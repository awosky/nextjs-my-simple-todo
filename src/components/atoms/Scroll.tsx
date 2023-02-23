import { CaretUpOutlined } from "@ant-design/icons";
import ScrollToTop from "react-scroll-up";

import style from "@/styles/Home.module.scss";

const Scroll = () => {
  return (
    <div className={style.scroll}>
      <ScrollToTop showUnder={20}>
        <div className={style.wrapper}>
          <CaretUpOutlined />
        </div>
      </ScrollToTop>
    </div>
  );
};

export default Scroll;
