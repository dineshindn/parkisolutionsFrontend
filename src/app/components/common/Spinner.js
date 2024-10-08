import React from "react";
import { Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const SpinnerComponent = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Space size="middle">
      <Spin indicator={<LoadingOutlined spin />} />
    </Space>
  </div>
);

export default SpinnerComponent;
