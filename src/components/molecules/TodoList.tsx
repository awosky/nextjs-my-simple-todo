import { ExclamationCircleFilled } from "@ant-design/icons";
import { App, Button, Checkbox, ConfigProvider, Grid, List } from "antd";
import classNames from "classnames";
import { useAuthState } from "react-firebase-hooks/auth";

import Empty from "@/components/atoms/Empty";
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

  const getSortedTodo = () => {
    return todos?.sort((x, y) => y.createdAt - x.createdAt);
  };

  const updateTodo = async ({ id, isDone }: ToDo) => {
    await updateFirebaseDocument(constants.TODOS, id, { isDone: !isDone });
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

  return (
    <div className={style.list}>
      <ConfigProvider renderEmpty={() => <Empty />}>
        <List
          itemLayout="horizontal"
          loading={loadingTodos}
          dataSource={getSortedTodo() as ToDo[]}
          renderItem={(item: ToDo) => (
            <List.Item
              className={style.item}
              actions={[
                <Checkbox
                  key="check"
                  checked={!!item.isDone}
                  onClick={() => updateTodo(item)}
                />,
                <Button
                  key="delete"
                  type="text"
                  size={xs ? "middle" : "large"}
                  onClick={() => showDeleteConfirm(item)}
                >
                  🗑️
                </Button>,
              ]}
            >
              <List.Item.Meta
                className={classNames(style.text, {
                  [style.done]: item.isDone,
                })}
                title={item.title}
              />
            </List.Item>
          )}
        />
      </ConfigProvider>
    </div>
  );
};

export default TodoList;
