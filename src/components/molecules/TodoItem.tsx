import { MenuOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Checkbox, List } from "antd";
import classNames from "classnames";

import { ToDo } from "@/components/templates/Home";
import style from "@/styles/Home.module.scss";

const TodoItem = ({
  item,
  onUpdate,
  onDelete,
  isSmall,
}: {
  item: ToDo;
  onUpdate: ({ id, isDone }: ToDo) => Promise<void>;
  onDelete: (item: ToDo) => void;
  isSmall: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const styleItem = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: 8,
    background: "white",
  };

  return (
    <div ref={setNodeRef} style={styleItem}>
      <List.Item
        className={style.item}
        actions={[
          <Checkbox
            key="check"
            checked={!!item.isDone}
            onClick={() => onUpdate(item)}
          />,
          <Button
            key="delete"
            type="text"
            size={isSmall ? "middle" : "large"}
            onClick={() => onDelete(item)}
          >
            🗑️
          </Button>,
          <div
            key="drag"
            {...attributes}
            {...listeners}
            style={{
              cursor: "grab",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MenuOutlined />
          </div>,
        ]}
      >
        <List.Item.Meta
          className={classNames(style.text, {
            [style.done]: item.isDone,
          })}
          title={item.title}
        />
      </List.Item>
    </div>
  );
};

export default TodoItem;
