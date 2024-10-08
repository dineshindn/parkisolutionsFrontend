import React from "react";
import { Layout, Menu, Avatar, Typography, Row, Col, Divider } from "antd";
import {
  DashboardOutlined,
  HistoryOutlined,
  FileTextOutlined,
  UserOutlined,
  DollarOutlined,
  FileDoneOutlined,
  TeamOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import AvatarImg from "../../../assets/images/avatar.png"
const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
  return (
    <Sider collapsible width={250} theme="light" style={{ background: "#293756" }}>
 
      <div  style={{
          background: "#293756",
          padding: "10px 10px 1px 5px ",
          textAlign: "center",
          color: "#fff",
          display:"flex",
          gap:"30px",
          alignItems:"center"
        //   justifyContent:"space-between"
        }}>
      <Avatar
          size={39}
          src={AvatarImg} 
          alt="User Avatar"
          style={{ marginBottom: "10px" }}
        />
        <Text style={{ color: "#fff", fontWeight: "bold", marginTop:"-10px" }}>Marthandam</Text>
      </div>
 
      <div
        style={{
          background: "#E7D69E",
          padding: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
    
        <Row>
          <Col span={12}>
            <div style={{ color: "#293756" }}>
              <Text strong style={{fontSize:"20px", lineHeight:"30px", color: "#F0642F"}}>12</Text>
              <br />
              <Text style={{color: "#F0642F"}}>Current Allocations</Text>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ color: "#293756" }}>
              <Text strong style={{fontSize:"20px", lineHeight:"30px",color: "#F0642F"}}>08</Text>
              <br />
              <Text style={{color: "#F0642F"}}>Future Allocations</Text>
            </div>
          </Col>
        </Row>
      </div>

      {/* Menu Items */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: "#293756" }}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined />}>
          Job Entry
        </Menu.Item>
        <Menu.Item key="3" icon={<HistoryOutlined />}>
          Job History
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Master">
          <Menu.Item key="4" icon={<TeamOutlined />}>
            User List
          </Menu.Item>
          <Menu.Item key="5" icon={<DollarOutlined />}>
            Hour Charges
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="6" icon={<PieChartOutlined />}>
          Customer Register
        </Menu.Item>
        <Menu.Item key="7" icon={<FileDoneOutlined />}>
          Expenses Entry
        </Menu.Item>
        <Menu.Item key="8" icon={<FileTextOutlined />}>
          Job Report
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
