import React, { useState } from "react";
import { Col, Row, Form, Input, Radio, DatePicker, Select } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

export default function SecondForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [value, setValue] = useState();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Form
      form={form}
      // name="register"
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}
      // style={{
      //   maxWidth: 600,
      // }}
      scrollToFirstError
    >
      <Row>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="surname"
            label=<span style={{ fontSize: "20px" }}>Họ</span>
            rules={[
              {
                type: "text",
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Họ bên trên!</span>,
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Nhập họ"
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="firstname"
            label=<span style={{ fontSize: "20px" }}>Tên</span>
            rules={[
              {
                type: "text",
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Tên bên trên!</span>,
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Nhập tên"
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px", paddingRight: '150px' }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="gender"
            label=<span style={{ fontSize: "20px" }}>Giới tính</span>
            rules={[
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng chọn vào ô bên trên!</span>,
              },
            ]}
          >
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ paddingRight: "350px" }}
            >
              <Radio style={{ fontSize: "20px" }} value={1}>
                Nam
              </Radio>
              <Radio style={{ fontSize: "20px" }} value={2}>
                Nữ
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="nation"
            label=<span style={{ fontSize: "20px" }}>Quốc tịch</span>
            rules={[
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Quốc tịch bên trên!</span>,
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Nhập Quốc tịch"
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="phone"
            label=<span style={{ fontSize: "20px" }}>Số điện thoại</span>
            rules={[
              {
                pattern: /^(?:\d*)$/,
                message: <span style={{fontSize:'18px'}}>Số điện thoại không hợp lệ!</span>,
              },
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Số điện thoại bên trên!</span>,
              },
            ]}
          >
            <Input
              placeholder="Nhập số điện thoại"
              maxLength={10}
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="Birthday"
            label=<span style={{ fontSize: "20px" }}>Ngày sinh</span>
            rules={[
              {
                type: "date",
                message: <span style={{fontSize:'18px'}}>Ngày sinh không hợp lệ!</span>,
              },
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng chọn Ngày sinh!</span>,
              },
            ]}
          >
           <DatePicker style={{width:'100%', height: '40px', fontSize: '18px'}} defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="address"
            label=<span style={{ fontSize: "20px" }}>Địa chỉ</span>
            rules={[
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Địa chỉ bên trên!</span>,
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Địa chỉ"
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="room"
            label=<span style={{ fontSize: "20px" }}>Phòng ban</span>
            rules={[
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng chon Phòng ban bên trên!</span>,
              },
            ]}
          >
            <Select
              placeholder=<span style={{ fontSize: "18px", width: "100%" }}>
                {" "}
                Chọn phòng ban
              </span>
            >
              <Option style={{ fontSize: "18px" }} value="Finance">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  {" "}
                  Finance
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Human Resource">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  {" "}
                  Human Resource
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Sales">
                <span style={{ fontSize: "18px", width: "100%" }}> Sales</span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Marketing">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  {" "}
                  Marketing
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Operations">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  {" "}
                  Operations
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Engineering">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  {" "}
                  Engineering
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Customer Support">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  Customer Support
                </span>
              </Option>
              <Option
                style={{ fontSize: "18px" }}
                value="Research & Development"
              >
                <span style={{ fontSize: "18px", width: "100%" }}>
                  Research & Development
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Quality Assurance">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  Quality Assurance
                </span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Design">
                <span style={{ fontSize: "18px", width: "100%" }}>Design</span>
              </Option>
              <Option style={{ fontSize: "18px" }} value="Chăm sóc khách hàng">
                <span style={{ fontSize: "18px", width: "100%" }}>
                  Phòng Chăm sóc khách hàng
                </span>
              </Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="Identification"
            label=<span style={{ fontSize: "20px" }}>CCCD/CMND</span>
            rules={[
              {
                pattern: /^(?:\d*)$/,
                message: <span style={{ fontSize: "18px" }}>Số không hợp lệ!</span>,
              },
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần CCCD/CMND bên trên!</span>,
              },
            ]}
          >
            <Input
              placeholder="CCCD/CMND"
              maxLength={30}
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="accountname"
            label=<span style={{ fontSize: "20px" }}>Tên TK ngân hàng</span>
            rules={[
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Tên TK ngân hàng bên trên!</span>,
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Tên TK ngân hàng"
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={12} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="accountnumber"
            label=<span style={{ fontSize: "20px" }}>Số TK ngân hàng</span>
            rules={[
              {
                pattern: /^(?:\d*)$/,
                message: <span style={{fontSize:'18px'}}>Số TK ngân hàng không hợp lệ!</span>,
              },
              {
                required: true,
                message:<span style={{fontSize:'18px'}}>Vui lòng điền vào phần Số TK ngân hàng bên trên!</span>,
              },
            ]}
          >
            <Input
              placeholder="Số TK ngân hàng"
              maxLength={30}
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="bank"
            label=<span style={{ fontSize: "20px" }}>Ngân hàng</span>
            rules={[
              {
                required: true,
                message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần Ngân hàng bên trên!</span>,
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Tên ngân hàng"
              style={{ fontSize: "18px", width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
