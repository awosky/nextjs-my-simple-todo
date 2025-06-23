import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { App, ConfigProvider, Grid, List } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Empty from "@/components/atoms/Empty";
import TodoItem from "@/components/molecules/TodoItem";
import { ToDo } from "@/components/templates/Home";
import { constants } from "@/constants";
import { useToDoCollection } from "@/hooks/useFirebase";
import style from "@/styles/Home.module.scss";
import {
  deleteFirebaseDocument,
  getFirebaseAuth,
  updateFirebaseDocument,
} from "@/utils/firebase";

const TodoList = () => {
  const { xs } = Grid.useBreakpoint();
  const { modal } = App.useApp();
  const [user] = useAuthState(getFirebaseAuth());
  const [todos, loadingTodos] = useToDoCollection(user?.email || "");
  const [sortedTodos, setSortedTodos] = useState<ToDo[]>([]);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  );

  const getSortedTodo = useCallback(() => {
    const sorted = todos?.sort((x, y) => y.createdAt - x.createdAt) || [];
    return sorted as ToDo[];
  }, [todos]);

  useEffect(() => {
    if (todos) setSortedTodos(getSortedTodo());
  }, [getSortedTodo, todos]);

  const updateTodo = async ({ id, isDone }: ToDo) => {
    await updateFirebaseDocument(constants.TODOS, id, { isDone: !isDone });
  };

  const refreshTodo = async ({ id }: ToDo, newDate: Date) => {
    await updateFirebaseDocument(constants.TODOS, id, { createdAt: newDate });
  };

  const deleteTodo = async ({ id }: ToDo) => {
    await deleteFirebaseDocument(constants.TODOS, id);
  };

  const showDeleteConfirm = (item: ToDo) => {
    modal.confirm({
      centered: true,
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteTodo(item);
      },
    });
  };

  const getTime = (todo: ToDo) => todo.createdAt.toDate().getTime();

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sortedTodos.findIndex((i) => i.id === active.id);
      const newIndex = sortedTodos.findIndex((i) => i.id === over?.id);
      const newSorted = arrayMove(sortedTodos, oldIndex, newIndex);

      if (oldIndex - newIndex > 0) {
        for (let i = newIndex; i < oldIndex; i++) {
          refreshTodo(sortedTodos[i], new Date(getTime(sortedTodos[i + 1])));
        }
      } else {
        for (let i = newIndex; i > oldIndex; i--) {
          refreshTodo(sortedTodos[i], new Date(getTime(sortedTodos[i - 1])));
        }
      }

      refreshTodo(
        sortedTodos[oldIndex],
        new Date(getTime(sortedTodos[newIndex]))
      );

      setSortedTodos(newSorted);
    }
  };

  return (
    <div className={style.list}>
      <ConfigProvider renderEmpty={() => <Empty />}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={sortedTodos.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <List
              itemLayout="horizontal"
              loading={loadingTodos}
              dataSource={sortedTodos}
              renderItem={(item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onUpdate={updateTodo}
                  onDelete={showDeleteConfirm}
                  isSmall={!!xs}
                />
              )}
            />
          </SortableContext>
        </DndContext>
      </ConfigProvider>
    </div>
  );
};

export default TodoList;
