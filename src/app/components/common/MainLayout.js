import React from "react";
import { Layout, Avatar, Space, Row, Col } from "antd"; 
import Sidebar from "./Sidebar";
import Logo from "../../../assets/images/logo.png"
import Logout from "../../../assets/images/logout.png"
import Bell from "../../../assets/images/bell.png"
import Full from "../../../assets/images/full.png"
const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <> 
      <Header
        style={{
          background: "#fff",
          padding: "0 20px",
          borderBottom: "1px solid #ddd",
        //   marginTop: "15px"
        }}
      >
        <Row align="middle" justify="space-between"> 
          <Col>
            <img
              src={Logo}  
              alt="Four Corners Valuations"
              style={{ height: 50 ,     position: "relative",
                top: "9px"}}
            />
          </Col>
 
          <Col>
            <Space size="large">  
              <img src={Bell} alt="" /> 
              <img src={Full} alt="" /> 
              <img src={Logout} alt="" /> 
            </Space>
          </Col>
        </Row>
      </Header>
 
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />

        <Layout className="site-layout">
          <Content style={{ margin: "16px" }}>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
