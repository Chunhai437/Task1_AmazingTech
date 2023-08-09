import React from 'react';
// import './index.css';
import {
  EllipsisOutlined,
  UserOutlined,
  NumberOutlined,
  AlignLeftOutlined, 
  PhoneOutlined,
  PlusCircleOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Divider, Avatar, Table, Badge } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const { Content, Header} = Layout;


const columns = [
  {
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: [<UserOutlined />,' Tên Phòng Ban'],
    dataIndex: 'room',
    key: 'room',
    render: (text) => {
      let color = 'cyan'; // Mặc định màu là 'cyan'
  
      if (text === 'Sales') {
        color = 'yellow'; // Nếu text là 'Sale', màu sẽ là 'yellow'
      }
      if (text === 'Marketing') {
        color = 'lime';
      }
      if (text === 'Finance') {
        color = 'purple';
      }
      if (text === 'Human Resource') {
        color = 'red';
      }
      if (text === 'Operations') {
        color = 'orange';
      }
      if (text === 'Engineering') {
        color = '	#2E8B57';
      }
      if (text === 'Customer Support') {
        color = '	#BA55D3';
      }
      if (text === 'Research & Development') {
        color = 'pink';
      }
      if (text === 'Quality Assurance') {
        color = 'green';
      }
      if (text === 'Design') {
        color = '#A52A2A';
      }
      if (text === 'Chăm sóc khách hàng') {
        color = '#4B0082';
      }
  
      return (
        <Badge color={color} text={<u>{text}</u>} />
      );
    },
  },
  {
    title: [<UserOutlined />, ' Quản Lý'],
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      let letter = text.charAt(0);
      if (text !== '') {
        return (
          <>
            <Avatar
              style={{
                backgroundColor: '#800080',
                color: 'white',
              }}
            >
              {letter}
            </Avatar>
            <>{text}</>
          </>
        );
      }
      return text;
    },
  },
  {
    title: [<NumberOutlined />,' Số Nhân Viên'],
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: [<AlignLeftOutlined />,' Email Quản Lý'],
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: [<PhoneOutlined />,' Số Điện Thoại'],
    dataIndex: 'phone',
    key: 'phone',
  },
];
const data = [
  {
    key: '1',
    symbol: <EllipsisOutlined />,
    room: 'Sales',
    name: 'Nguyen Van Quan Ly',
    number: '3',
    email: 'hrstaff@test.com',
    phone: '0936748956'
  },
  {
    key: '2',
    symbol: <EllipsisOutlined />,
    room: 'Marketing',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '3',
    symbol: <EllipsisOutlined />,
    room: 'Finance',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '4',
    symbol: <EllipsisOutlined />,
    room: 'Human Resource',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '5',
    symbol: <EllipsisOutlined />,
    room: 'Operations',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '6',
    symbol: <EllipsisOutlined />,
    room: 'Engineering',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '7',
    symbol: <EllipsisOutlined />,
    room: 'Customer Support',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '8',
    symbol: <EllipsisOutlined />,
    room: 'Research & Development',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '9',
    symbol: <EllipsisOutlined />,
    room: 'Quality Assurance',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '10',
    symbol: <EllipsisOutlined />,
    room: 'Design',
    name: '',
    number: '0',
    email: '',
    phone: ''
  },
  {
    key: '11',
    symbol: <EllipsisOutlined />,
    room: 'Chăm sóc khách hàng',
    name: '',
    number: '1',
    email: '',
    phone: ''
  },
];

export default function AllStaff() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
      return (
        <Layout hasSider>
          <Layout
            className="site-layout"
            style={{
              marginLeft: 0,
              bottom: 0,
              height: '140vh',
              backgroundColor: 'white',
              display:'inline'
            }}
          >
          <Header
          style={{
            marginLeft:'16px',
            padding: 0,
            background: colorBgContainer,
          }}

        >
          <h3 style={{display: 'inline'}}>DANH SÁCH PHÒNG BAN</h3>
            <UploadOutlined
              rotate={90}
              style={{
                fontSize: '30px',
                padding: '5px',
                margin: '15px 20px 0 0',
                float: 'right',
                color: '#1677ff',
                border: '1px solid',
                borderColor: '#dddddd',
                borderRadius: '10px',
                marginLeft: '1000px'
              }}
            />
        </Header>
        <hr/>
        
        <Button
                style={{
                //   marginLeft: '1420px',
                //   marginBottom: '0',
                margin:'10px 15px 20px 0px',
                float:'right',
    
                }}
                type="primary" size="large" ><PlusCircleOutlined/> Thêm Phòng Ban</Button>
            <Divider type="horizontal" style={{color: '#dddddd'}}/>
              
            <Content
              theme={theme}
              style={{
                margin: '10px 16px 50px',
                overflow: 'initial',
              }}
            >
              <div
                style={{
                  // padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                  display:'inline',
                }}
              >
    
    <Table
     columns={columns} dataSource={data} scroll={{x:'max-content'}}/>;

              </div>
            </Content>
          </Layout>
        </Layout>
      );
}