import React, { useState} from "react";
import { Button,Layout, Modal , Checkbox, Form, Input,theme } from "antd";
const { Content } = Layout;
const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default function Index() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);

  };

  const handleOk = () => {
    setIsModalOpen(false);
    window.location.href = "/departments"; 
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout hasSider>
      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
          bottom: 0,
          height: "140vh",
          marginRight: "10px",
        }}
      >

        <Content
          style={{
            margin: "10px 16px 50px",
            overflow: "initial",
            backgroundColor: "white",
            padding: "20px 50px",
          }}
        >
          <div
            style={{
              // padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              display: "inline",
              maxWidth: "100vw",
            }}
          >
          <h1>WELCOME TO MANAGEMENT SYSTEM</h1>
          <>
          <Button
  size="large"
  type="primary"
  style={{ fontSize: '18px', fontWeight: '600px' }}
  onClick={showModal}
>
  Đăng Nhập
</Button>
      <Modal 
      width={900}
      height={1000}
      title=<span style={{fontSize: '25px'}}>Đăng Nhập</span> 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      okButtonProps={{ style: { backgroundColor: 'green', fontSize: '18px',width: '120px', height: '40px' , color: 'white' } }}
  cancelButtonProps={{ style: { backgroundColor: 'red', fontSize: '18px',width: '120px', height: '40px' , color: 'white' } }}>
      <Form
    name="form_item_path" 
    layout="horizontal" 
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label= <span style={{fontSize: '20px'}}>Tên đăng nhập</span>
      name="username"
      rules={[
        {
          required: true,
          message: <span style={{fontSize: '18px'}}>Vui lòng điền vào phần Tên đăng nhập!</span>,
        },
      ]}
    >
      <Input style={{fontSize: '18px'}}/>
    </Form.Item>

    <Form.Item
      label=<span style={{fontSize: '20px'}}>Mật khẩu</span>
      name="password"
      rules={[
        {
          required: true,
          message: <span style={{fontSize: '18px'}}>Vui lòng điền vào phần Mật khẩu!</span>,
        },
      ]}
    >
      <Input.Password style={{fontSize: '18px'}}/>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox><span style={{fontSize: '20px'}}>Remember me</span></Checkbox>
    </Form.Item>

  
  </Form>
      </Modal>
    </>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}