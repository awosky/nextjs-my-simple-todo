import { Button, Form, Grid, Input } from "antd";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { ToDo } from "@/components/templates/Home";
import { constants } from "@/constants";
import style from "@/styles/Home.module.scss";
import { addFirebaseDocument, getFirebaseAuth } from "@/utils/firebase";

const TodoForm = () => {
  const [user] = useAuthState(getFirebaseAuth());
  const [form] = Form.useForm();
  const { xs } = Grid.useBreakpoint();
  const [loading, setLoading] = useState(false);

  const addTodo = async ({ title }: ToDo) => {
    setLoading(true);
    const email = user?.email || "-";
    const id = new Date().toISOString() + email;
    const values = { id, email, title, isDone: false, createdAt: new Date() };

    await addFirebaseDocument(constants.TODOS, id, values)
      .then(() => {
        form.resetFields();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Form form={form} className={style.form} onFinish={addTodo}>
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Please fill out this field.",
            validateTrigger: "onBlur",
          },
        ]}
      >
        <Input size="large" placeholder="Create your new task here..." />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size={xs ? "middle" : "large"}
          loading={loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
