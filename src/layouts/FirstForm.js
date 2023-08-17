import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input} from 'antd';



export default function FirstForm() {

   
      const [form] = Form.useForm();
      const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
    
      useEffect(() => {
        const savedName = sessionStorage.getItem('name');
        const savedEmail = sessionStorage.getItem('email');
        const savedPassword = sessionStorage.getItem('password');
        const savedConfirmPassword = sessionStorage.getItem('confirmPassword');
    
        if (savedName) {
          setName(savedName);
        }
        if (savedEmail) {
          setEmail(savedEmail);
        }
        if (savedPassword) {
          setPassword(savedPassword);
        }
        if (savedConfirmPassword) {
          setConfirmPassword(savedConfirmPassword);
        }
      }, []);
      useEffect(() => {
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('confirmPassword', confirmPassword);
      }, [name, email, password, confirmPassword]);
      
      const validatePassword = (_, value) => {
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        if (!hasSpecialChar || !hasUppercase || !hasNumber) {
          return Promise.reject();

        }
        
        return Promise.resolve();
      };

     


    return (
        <Form
      form={form}
      name="form_item_path" 
      layout="vertical" 
    //   name="register"
      onFinish={onFinish}
    //   style={{
    //     maxWidth: 600,
    //     fontSize: '20px',
        
    //   }}
      scrollToFirstError
    >
    <Row>
      <Col span={24} style={{ paddingLeft: "20px", paddingTop: "16px" }}>
      <Form.Item
        style={{
            width:'100%'
        }}
        name="name"
        label=<span style={{fontSize: '20px'}}>Tên đăng nhập</span>
        initialValue={name}
        rules={[
          {
            required: true,
            message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần tên đăng nhập!</span>,
          },
        ]}
      >
        <Input onChange={(e) => setName(e.target.value)} style={{fontSize:'18px', width: '100%'}} />
      </Form.Item>
      </Col>
      </Row>

      <Row>
      <Col span={24} style={{paddingLeft:'20px'}}>
      <Form.Item
       style={{
            width:'100%'
        }}
        name="email"
        label=<span style={{fontSize: '20px'}}>E-mail</span>
        initialValue={email}
        rules={[
          {
            type: 'email',
            message: <span style={{fontSize:'18px'}}>Email không hợp lệ!</span>,
          },
          {
            required: true,
            message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần email bên trên!</span>,
          },
        ]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} style={{fontSize:'18px', width: '100%'}}/>
      </Form.Item>
      </Col>
</Row>

<Row>
      <Col span={24} style={{paddingLeft:'20px'}}>
      <Form.Item
       style={{
            width:'100%'
        }}
        name="password"
        label=<span style={{fontSize: '20px'}}>Mật khẩu</span>
        initialValue={password}
        extra=<span style={{fontSize:'18px'}}>Mật khẩu cần ít nhất 1 kí tự đặc biệt, 1 chữ in hoa và 1 số</span>
        rules={[
          {
            validator: validatePassword,
            message: <span style={{fontSize:'18px'}}>Mật khẩu không hợp lệ! </span>
          },
          {
            required: true,
            message: <span style={{fontSize:'18px'}}>Vui lòng điền vào phần mật khẩu bên trên!</span>,
          },
        ]}
        hasFeedback
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)} style={{fontSize:'18px',width: '100%'}} />
      </Form.Item>
      </Col>
</Row>

<Row>
      <Col span={24} style={{paddingLeft:'20px'}}>
      <Form.Item
       style={{
            width:'100%'
        }}
        name="confirm"
        label=<span style={{fontSize: '20px'}}>Xác nhận mật khẩu</span>
        initialValue={confirmPassword}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: <span style={{fontSize:'18px'}}>Vui lòng xác nhận mật khẩu!</span> ,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(<span style={{fontSize:'18px'}}>Xác nhận mật khẩu sai!</span>)
              );
            },
          }),
        ]}
      >
        <Input.Password onChange={(e) => setConfirmPassword(e.target.value)} style={{fontSize:'18px', width: '100%'}}/>
      </Form.Item>
      </Col>
      </Row>
    </Form>
    )
}