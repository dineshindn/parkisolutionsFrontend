import React, { Fragment, useState } from "react";
import {
  Form,
  Button,
  Row,
  Input,
  Select,
  Col,
  Card,
  message,
  Layout,
  Menu,
} from "antd";
import axios from "axios";
import "./style.css";

const { Header, Sider, Content } = Layout;
function CreateJob() {
  const [collapsed, setCollapsed] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
    const a = await axios.post("http://localhost:3001/job-create", values);
    message.success("Job entry added successfully");
  };

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" style={{ color: "white", padding: "16px" }}>
          <h2>{collapsed ? "Logo" : "Full Logo"}</h2>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Job Entry</Menu.Item>
          <Menu.Item key="3">Master</Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <div className="main">
          <h2>Job Entry</h2>
          <p>
            Home / <span className="spans">Job Entry</span>
          </p>
        </div>
        <Card className="main-card">
          <Form
            name="jobForm"
            initialValues={{ remember: true }}
            labelCol={{ span: 24 }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Row style={{ display: "flex", gap: "0px 30px" }}>
              <Form.Item
                className="form-input form-controll"
                name="job"
                label="Job #"
                rules={[
                  {
                    required: true,
                    type: "text",
                    message: "Please enter job",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="form-input form-controll"
                name="address"
                label="Address"
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="form-input form-controll"
                name="fee"
                label="FEE"
              >
                <Input type="Number" />
              </Form.Item>

              {1 == 1 ? (
                <>
                  
                  <Form.Item
                    className="form-input form-controll"
                    name="contact-date"
                  ><label>Contact - Date</label>
                    <Input />
                  </Form.Item>
                  <Form.Item className="form-input form-controll">
                    <label>Deliverd - Date</label>
                    <Input type="date" name="d-date" id="d-date"></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>Fee Collection Date</label>
                    <Input type="date" name="f-date" id="f-date"></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>Fee Collected $</label>
                    <Input
                      type="number"
                      name="feeCollected"
                      id="feeCollected"
                    ></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>Payment Terms</label>
                    <Input type="text" name="terms" id="terms"></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>Expenses $</label>
                    <Input type="number" name="p" id="expences"></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>Expenses Terms</label>
                    <Input type="text" name="expTerms" id="expTerms"></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>SubController</label>
                    <Input type="text" name="expTerms" id="expTerms"></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>SubController Fee</label>
                    <Input
                      type="text"
                      name="subControllerFee"
                      id="subControllerFee"
                    ></Input>
                  </Form.Item>

                  <Form.Item className="form-input form-controll">
                    <label>Modum Fee</label>
                    <Input type="text" name="modumFee" id="modumFee"></Input>
                  </Form.Item>

                  <Col span={5}>
                    <Form.Item className="form-input form-controll">
                      <label>Net Fee $</label>
                      <Input type="text" name="netFee" id="netFee"></Input>
                    </Form.Item>
                  </Col>

                  <Col span={5}>
                    <Form.Item className="form-input form-controll">
                      <label>Interna Review</label>
                      <Input
                        type="text"
                        name="internalReview"
                        id="internalReview"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={5}>
                    <Form.Item className="form-input form-controll">
                      <label>Marketing</label>
                      <Input
                        type="text"
                        name="marketing"
                        id="marketing"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Marketing %</label>
                      <Input
                        type="text"
                        name="marketing_per"
                        id="marketing_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Marketing $</label>
                      <Input
                        type="text"
                        name="marketing_doller"
                        id="marketing_doller"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Corporate %</label>
                      <Input
                        type="text"
                        name="corporate_per"
                        id="corporate_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Corporate $</label>
                      <Input
                        type="text"
                        name="corporate_doller"
                        id="corporate_doller"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Production %</label>
                      <Input
                        type="text"
                        name="production_per"
                        id="production_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Production $</label>
                      <Input
                        type="text"
                        name="production_doller"
                        id="production_doller"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 1 </label>
                      <Input
                        type="text"
                        name="appraiser1"
                        id="appraiser1"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 1 %</label>
                      <Input
                        type="text"
                        name="appraisel1_per"
                        id="appraisel1_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 1 $</label>
                      <Input
                        type="text"
                        name="appraisel1_doller"
                        id="appraisel1_doller"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 2</label>
                      <Input
                        type="text"
                        name="appraisel2"
                        id="appraisel2"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 2 %</label>
                      <Input
                        type="number"
                        name="appraisel2_per"
                        id="appraisel2_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 2 %</label>
                      <Input
                        type="number"
                        name="appraisel2_per"
                        id="appraisel2_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 3</label>
                      <Input
                        type="number"
                        name="appraisel3"
                        id="appraisel3"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 3 %</label>
                      <Input
                        type="number"
                        name="appraisel3_per"
                        id="appraisel3_per"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>APPRISER 3 $</label>
                      <Input
                        type="number"
                        name="appraisel3_doller"
                        id="appraisel3_doller"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>IR %</label>
                      <Input type="number" name="ir" id="ir"></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>IR $</label>
                      <Input
                        type="number"
                        name="ir_doller"
                        id="ir_doller"
                      ></Input>
                    </Form.Item>
                  </Col>

                  <Col span={2}>
                    <Form.Item className="form-input form-controll">
                      <label>Total %</label>
                      <Input type="number" name="total" id="total"></Input>
                    </Form.Item>
                  </Col>
                </>
              ) : (
                ""
              )}
              <Form.Item
                className="form-input form-controll"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button className="formButton" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}

export default CreateJob;
