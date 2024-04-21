import { Spin } from "antd";

import "./Loading.scss";
export default () => {
  return (
    <div className="loading">
      <Spin size="large"></Spin>
    </div>
  );
};
