import { Grid, Typography } from "antd";
import Image from "next/image";

import style from "@/styles/Home.module.scss";

const Empty = () => {
  const { xs } = Grid.useBreakpoint();

  return (
    <div className={style.empty}>
      <Image
        src={"/images/empty.svg"}
        width={xs ? 200 : 300}
        height={xs ? 200 : 300}
        alt="empty"
      />
      <Typography.Title level={3}>No Tasks Found</Typography.Title>
      <Typography.Text>
        Write your task and Click the submit button to add a new task.
      </Typography.Text>
    </div>
  );
};

export default Empty;
