import { Col, Row, Spin as SpinAntd, SpinProps } from "antd";

import style from "@/styles/Home.module.scss";

interface Props extends SpinProps {
  loading?: boolean;
}

const Spin = (props: Props) => {
  const { loading, ...baseProps } = props;
  return (
    <Row justify="center" align="middle" className={style.home}>
      <Col>
        <SpinAntd {...baseProps} spinning={loading} size="large" />
      </Col>
    </Row>
  );
};

export default Spin;
