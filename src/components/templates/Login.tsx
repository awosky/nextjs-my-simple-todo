import { GoogleOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import style from "@/styles/Login.module.scss";
import { getFirebaseAuth } from "@/utils/firebase";

const Login = () => {
  const { push } = useRouter();
  const [signIn, user, loading] = useSignInWithGoogle(getFirebaseAuth());

  useEffect(() => {
    if (user && !loading) push("/");
  }, [loading, push, user]);

  return (
    <main className={style.login}>
      <Row className={style.row} justify="center" align="middle">
        <Col>
          <Button
            icon={<GoogleOutlined />}
            type="primary"
            size="large"
            onClick={() => signIn()}
            loading={loading}
          >
            Sign in with Google
          </Button>
        </Col>
      </Row>
    </main>
  );
};

export default Login;
