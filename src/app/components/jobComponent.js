import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Select,
  Button,
  Checkbox,
  Card,
  InputNumber,
  message,
} from "antd";
import { FormStyle } from "../containers/jobs/styles";
import axios from "axios";
import { BASE_URL } from "../utils/helper";

const { Option } = Select;

const JobEntryForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const normalizedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          value === undefined || value === null ? "" : value,
        ])
      );

      console.log("values", values);
      const response = await axios.post(
        `${BASE_URL}/job/newAll`,
        normalizedValues
      );
      message.success("Job entry added successfully");
      form.resetFields();
      console.log("API Response: ", response.data);
    } catch (error) {
      console.error(
        "API Error: ",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <FormStyle>
      <Card>
        <Form
          form={form}
          name="job-entry"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row gutter={[16, 16]}>
            <Col span={5}>
              <Form.Item label="Job #" name="job">
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Address" name="address">
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="FEE $" name="fee">
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Contract - Date" name="c_date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Delivered - Date" name="d_date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={5}>
              <Form.Item label="Fee Collected - Date" name="fee_c_d">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Fee Collected $" name="fee_c">
                <Input />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item label="Payment Terms" name="payment_terms">
                <Input placeholder="-" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Expenses $" name="expenses">
                <Input />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Expense Terms" name="expenses_terms">
                <Select>
                  <Option value="inclusive">Inclusive</Option>
                  <Option value="exclusive">Exclusive</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={5}>
              <Form.Item label="Subcontractor" name="subcontroller">
                <Select>
                  <Option value="subcontractor1">Select</Option>
                  <Option value="Value 1">Value 1</Option>
                  <Option value="Value 2">Value 2</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item label="Subcontractor Fee $" name="subcontroller_fee">
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Modum Fee $" name="modum_fee">
                <Input placeholder="-" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="Net Fee $" name="net_fee">
                <Input />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Internal Review" name="internal_review">
                <Select>
                  <Option value="review1">Select</Option>
                  <Option value="Value 1">Value 1</Option>
                  <Option value="Value 2">Value 2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={5}>
              <Form.Item label="Marketing" name="marketing">
                <Select>
                  <Option value="marketing1">Select</Option>
                  <Option value="Value 1">Value 1</Option>
                  <Option value="Value 2">Value 2</Option>
                </Select>
              </Form.Item>
            </Col>
            <div style={{ display: "flex", gap: "35px" }}>
              <Form.Item label="Marketing %" name="marketing_per">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Marketing $" name="marketing_doller">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Corporate %" name="corporate">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Corporate $" name="corporate_per">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Production%" name="production_per">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Production$" name="production_doller">
                <InputNumber />
              </Form.Item>
            </div>

            <Col span={4}>
              <Form.Item label="Appraiser 1 %" name="appraiser1">
                <Select>
                  <Option value="marketing1">Select</Option>
                  <Option value="Value 1">Value 1</Option>
                  <Option value="Value 2">Value 2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Form.Item label="Appraiser 1%" name="appraiser1_per">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Appraiser 1 $" name="appraiser1Amount">
              <InputNumber />
            </Form.Item>

            <Col span={4}>
              <Form.Item label="Appraiser 2" name="appraiser2">
                <Select>
                  <Option value="appraiser2">Select</Option>
                  <Option value="Value 1">Value 1</Option>
                  <Option value="Value 2">Value 2</Option>
                </Select>
              </Form.Item>
            </Col>

            <Form.Item label="Appraiser 2 %" name="appraiser2_per">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Appraiser 2 $" name="appraiser2Amount">
              <InputNumber />
            </Form.Item>

            <Col span={4}>
              <Form.Item label="Appraiser 3" name="appraiser3">
                <Select>
                  <Option value="appraiser3">Select</Option>
                  <Option value="Value 1">Value 1</Option>
                  <Option value="Value 2">Value 2</Option>
                </Select>
              </Form.Item>
            </Col>

            <Form.Item label="Appraiser 3 %" name="appraiser3_per">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Appraiser 3 $" name="appraiser3_doller">
              <InputNumber />
            </Form.Item>
          </Row>

          <Row gutter={16}>
            <Col span={3}>
              <Form.Item label="IR %" name="ir">
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="IR $" name="ir_doller">
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Total %" name="total">
                <InputNumber
                  style={{ color: "#fff !important", background: "#01B93F" }}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Hourly Charges"
                name="hourlyCharges"
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} justify="center">
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "#293756",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                }}
              >
                Save
              </Button>
            </Col>
            <Col>
              <Button type="default">Discard</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </FormStyle>
  );
};

export default JobEntryForm;
