import React from 'react';
import {
  EllipsisOutlined,
  UserOutlined,
  NumberOutlined,
  AlignLeftOutlined, 
  PhoneOutlined,
  PlusCircleOutlined,
  UploadOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Avatar, Table, Badge } from 'antd';
const { Content, Header} = Layout;


const columns = [
  {
    dataIndex: 'symbol',
    key: 'symbol',
    width: '5%',
  },
  {
    title: <span ><b>ID</b></span>,
    dataIndex: 'key',
    key: 'key',
    width: '5%',
    overflow: 'auto',
    render: (text) => <span style={{ color: 'grey' }}>{text}</span>,
  },
  {
    title: [<UserOutlined />, <span ><b>  Tên Phòng Ban</b></span>],
    dataIndex: 'room',
    key: 'room',
    width: '15%',
    overflow: 'auto',
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
        <Badge color={color} text={<span style={{color: 'grey'}}><u>{text}</u></span>} />
      );
    },
  },
  {
    title: [<UserOutlined />, <span><b>  Quản Lý  </b></span>, <ArrowUpOutlined  />],
    dataIndex: 'name',
    key: 'name',
    width: '13%',
    overflow: 'auto',
    render: (text) => {
      let letter = text.charAt(0);
      if (text !== '') {
        return (
          <span>
            <Avatar
              style={{
                backgroundColor: '#800080',
                color: 'white',
              }}
            >
              {letter}
            </Avatar>
             <span style={{color: 'grey'}}>        <b>{text}</b></span>
          </span>
        );
      }
    },
  },
  {
    title: [<NumberOutlined />,<span ><b>  Số Nhân Viên</b></span>],
    dataIndex: 'number',
    key: 'number',
    width: '10%',
    overflow: 'auto',
    render: (text) => <span style={{ color: 'grey' }}>{text}</span>,
  },
  {
    title: [<AlignLeftOutlined />,<span ><b>  Email Quản Lý</b></span>],
    dataIndex: 'email',
    key: 'email',
    width: '10%',
    overflow: 'auto',
    render: (text) => <span style={{ color: 'grey' }}>{text}</span>,
  },
  {
    title: [<PhoneOutlined />,<span ><b>  Số Điện Thoại</b></span>],
    dataIndex: 'phone',
    key: 'phone',
    width: '14%',
    overflow: 'auto',
    render: (text) => <span style={{ color: 'grey' }}>{text}</span>,
  },
];
const data = [
  {
    key: '1',
    symbol: <EllipsisOutlined />,
    room: 'Sales',
    name: 'Nguyen Van Quan Ly ',
    number: 3,
    email: 'hrstaff@test.com',
    phone: '0936748956'
  },
  {
    key: '2',
    symbol: <EllipsisOutlined />,
    room: 'Marketing',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '3',
    symbol: <EllipsisOutlined />,
    room: 'Finance',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '4',
    symbol: <EllipsisOutlined />,
    room: 'Human Resource',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '5',
    symbol: <EllipsisOutlined />,
    room: 'Operations',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '6',
    symbol: <EllipsisOutlined />,
    room: 'Engineering',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '7',
    symbol: <EllipsisOutlined />,
    room: 'Customer Support',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '8',
    symbol: <EllipsisOutlined />,
    room: 'Research & Development',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '9',
    symbol: <EllipsisOutlined />,
    room: 'Quality Assurance',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '10',
    symbol: <EllipsisOutlined />,
    room: 'Design',
    name: '',
    number: 0,
    email: '',
    phone: ''
  },
  {
    key: '11',
    symbol: <EllipsisOutlined />,
    room: 'Chăm sóc khách hàng',
    name: '',
    number: 1,
    email: '',
    phone: ''
  },
];

export default function Departments() {
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
              // backgroundColor: 'white',
              display:'inline'
            }}
          >
         <Header
          style={{
            marginLeft:'16px',
            padding: 0,
            background: colorBgContainer,
            fontWeight: '650'
          }}

        >
          <div style={{float: 'left', textAlign: 'center', margin:'0px 0px 0px 10px'}}>DANH SÁCH PHÒNG BAN</div>
            <UploadOutlined
              rotate={90}
              style={{
                fontSize: '30px',
                padding: '5px',
                margin: '15px 20px 0px 0px',
                float: 'right',
                color: '#1677ff',
                border: '1px solid',
                borderColor: '#dddddd',
                borderRadius: '10px',
              }}
            />
        </Header>
        
        <Header
          style={{
            marginLeft:'16px',
            padding: 0,
            background: colorBgContainer,
            marginTop: '40px',
            border: '1px solid',
            borderColor: '#dddddd',
            borderRadius: '10px',
          }}

        >
        <Button
                style={{
                //   marginLeft: '1420px',
                //   marginBottom: '0',
                margin:'10px 15px 20px 0px',
                float:'right',
    
                }}
                type="primary" size="large" ><PlusCircleOutlined/> Thêm Phòng Ban</Button>
        </Header>
        
       
            <Content
              style={{
                margin: '20px 16px 50px',
                overflow: 'initial',
                background: colorBgContainer,
                border: '1px solid',
                borderColor: '#dddddd',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  // padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                  display:'inline',
                  width: '100%'
                }}
              >
    <Table
    style={{
      border: '1px solid',
      borderColor: '#dddddd',
      borderRadius: '10px',
      width: '100%'
              }}
     columns={columns} dataSource={data} scroll={{x:'max-content'}}/>

              </div>
            </Content>
          </Layout>
        </Layout>
      );
}