import { ExclamationCircleFilled, LogoutOutlined } from "@ant-design/icons";
import { App, Button, Col, Grid, Row, Typography } from "antd";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

import style from "@/styles/Home.module.scss";
import { getFirebaseAuth } from "@/utils/firebase";

const Navbar = () => {
  const { xs } = Grid.useBreakpoint();
  const [user] = useAuthState(getFirebaseAuth());
  const [signOut] = useSignOut(getFirebaseAuth());
  const { modal } = App.useApp();

  const showLogoutConfirm = () => {
    modal.confirm({
      centered: true,
      title: "Are you sure you want to log out?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        signOut();
      },
    });
  };

  const getUserName = () => {
    const displayName = xs
      ? user?.displayName?.replace(/ .*/, "")
      : user?.displayName;
    return user ? ` ${displayName} ` : " There ";
  };

  const getRandomAnimalEmoji = () => {
    const randomNumber = Math.floor(Math.random() * 30 + 10).toString();
    const emojiCode = "&#1280" + randomNumber;
    return <span dangerouslySetInnerHTML={{ __html: emojiCode }} />;
  };

  return (
    <div className={style.navbar}>
      <Row justify="space-between" align="middle" className="container">
        <Col>
          <Typography.Title level={3} className={style.logo}>
            Hi,
            {getUserName()}
            {getRandomAnimalEmoji()}
          </Typography.Title>
        </Col>
        <Col>
          <Button
            icon={<LogoutOutlined />}
            onClick={() => showLogoutConfirm()}
            danger
          >
            {!xs && "Logout"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
