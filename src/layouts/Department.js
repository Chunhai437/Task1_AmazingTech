import React from 'react';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Button, Dropdown } from 'antd';
import {
  UnorderedListOutlined,
  GoogleOutlined,
  BankOutlined,
  CalendarOutlined,
  HomeOutlined,
  GlobalOutlined,
  CreditCardOutlined,
  EllipsisOutlined,
  UserOutlined,
  AlignLeftOutlined, 
  PhoneOutlined,
  PlusCircleOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header, Content} = Layout;
const columns = [
  {

    dataIndex: 'symbol',
    key: 'symbol'
  },
  {
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      let color = ''; 
  
      if (text === 'Active') {
        color = '#4169E1'; 
      }
      return(
        <Avatar
      style={{
        backgroundColor: color,
      }}
      icon={<UserOutlined />}
    />
      )
    }
  },
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
  },
  
  {
    title: [<AlignLeftOutlined />, ' Tên Nhân Viên'],
    dataIndex: 'name',
    key: 'name',
    overflow:'auto',
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

    },
  },
  {
    title: [<UnorderedListOutlined/>, ' Phòng Ban'],
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
    title: [<PhoneOutlined />,' Số Điện Thoại'],
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: [<UnorderedListOutlined/>, ' Giới tính'],
    key: 'sex',
    dataIndex: 'sex',
    render: (text) => {
      let color = 'volcano'; // Mặc định màu là 'cyan'
  
      if (text === 'Nam') {
        color = 'geekblue'; // Nếu text là 'Sale', màu sẽ là 'yellow'
      }
      return(
        <Tag color={color}>{text}</Tag>
      )
    }
  },
  {
    title: [<GoogleOutlined/>, ' Email'],
    dataIndex: 'email',
    key: 'email',
  },
  {
    title:  [<BankOutlined/> , ' Ngân Hàng'],
    dataIndex: 'bank',
    key: 'bank',
  },
  {
    title: [<CalendarOutlined />, ' Ngày Sinh'],
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: [<HomeOutlined /> , ' Địa Chỉ'],
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: [<GlobalOutlined />, ' Quốc Gia'],
    dataIndex: 'nation',
    key: 'nation',
  },
  {
    title: [<CreditCardOutlined />, ' TK Ngân Hàng'],
    dataIndex: 'account',
    key: 'account',
  },
];
const data = [
  {
    key: '1',
    symbol: <EllipsisOutlined />,
    name: 'Tran Van Nhan',
    status: 'Active',
    room: 'Sales',
    phone: '0946578298',
    sex: 'Nam',
    email: 'test1@gmail.com',
    bank: 'TPbank',
    birthday: '3 tháng 1 năm 2003',
    address: '123 Cống Quỳnh, Quận 1, TP Hồ Chí Minh',
    nation: 'VietNam',
    account: '939843894949'
  },
  {
    key: '2',
    symbol: <EllipsisOutlined />,
    name: 'Nguyen Van Nhan Vien',
    status: 'Inactive',
    room: 'Chăm sóc khách hàng',
    phone: '0964785934',
    sex: 'Nam',
    email: 'staff@test.com',
    bank: 'Vietcombank',
    birthday: '9 tháng 2 năm 1999',
    address: '64A1 Ấp Bắc, Phường 4, TP Mỹ Tho, Tiền Giang',
    nation: 'America',
    account: '395938592003034'
  },
  {
    key: '3',
    symbol: <EllipsisOutlined />,
    name: 'Nguyen Van Quan Ly',
    status: 'Active',
    room: 'Sales',
    phone: '0764539764',
    sex: 'Nam',
    email: 'hrstaff@gmail.com',
    bank: 'ACBbank',
    birthday: '25 tháng 4 năm 1998',
    address: 'Vinhomes Grandpark, Quận 9, TP Hồ Chí Minh',
    nation: 'VietNam',
    account: '737498399474939'
  },
  {
    key: '4',
    symbol: <EllipsisOutlined />,
    name: 'Huynh Ngoc Han',
    status: 'Inactive',
    room: 'Sales',
    phone: '08647587348',
    sex: 'Nữ',
    email: 'hrmanager@gmail.com',
    bank: 'TPbank',
    birthday: '8 tháng 9 năm 1990',
    address: 'VinWonders, TP Đà Nẵng',
    nation: 'VietNam',
    account: '7839940940930'
  },
];

export default function Department() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    
      return (
        <Layout hasSider>
    
          <Layout
            className="site-layout"
            style={{
              // marginLeft: 200,
              bottom: 0,
              height: '100vh',
            }}
          >
                    <Header
          style={{
            marginLeft:'16px',
            padding: 0,
            background: colorBgContainer,
          }}

        >
          <h3 style={{display: 'inline'}}>DANH SÁCH NHÂN VIÊN</h3>
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
            <Header
              style={{
                backgroundColor: 'white',
                marginTop: '16px',
                marginLeft: '16px',
                marginRight: '16px',
              }}
            >
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="middle"
                onSearch={onSearch}
                style={{
                  width: '200px',
                  marginTop: '16px',
                  marginRight: '30px'
                }}
              />
    
              <Dropdown
                menu={{
                  // items,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space
                    style={{
                      color: 'black',
                      marginRight: '30px',
                    }}
                  >
                    Toàn Bộ Phòng Ban
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
    
              <Button danger
                style={{
                  borderColor: 'lime',
                  color: 'lime',
                  marginRight: '200px',
                }}
              >Làm mới</Button>
    
              <Button style={{float: 'right', marginTop: '15px'}}type="primary"><PlusCircleOutlined /> Thêm nhân viên</Button>
            </Header>
            <Content 
              style={{
                margin: '24px 16px 0',
                overflow: 'initial',
              }}
            >
              <div
                style={{
                  padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
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