import React from 'react';
import { Input, Tag, Badge, Avatar, Table, Layout, theme, Button, Select} from 'antd';
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
const { Header, Content} = Layout;
const{Option} = Select;
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
      // Tạo danh sách các màu có sẵn
const colors = ['	#FF69B4', '#006400', '#D2691E', '#8B008B', '#DAA520', '#B22222'];

// Random một màu nền từ danh sách
const randomColor = colors[Math.floor(Math.random() * colors.length)];

      if (text !== '') {
        return (
          <>
            <Avatar
              style={{
                backgroundColor: randomColor,
                color: 'white',
              }}
            >
              {letter}
            </Avatar>
            <>   {text}</>
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
      let color = 'volcano'; 
  
      if (text === 'Nam') {
        color = 'geekblue'; 
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

export default function AllStaff() {
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
          <h3 style={{display: 'inline', float: 'left', textAlign: 'center', margin:'0px 0px 0px 10px'}}>DANH SÁCH NHÂN VIÊN</h3>
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
            background: colorBgContainer,
            margin:'16px 14px 10px 16px',
          }}
        >
          <div
          style={{
            display:'flex',
            justifyContent:'space-between'

          }}>
            <Input 
              placeholder='Tìm kiếm'
                style={{
                  borderStyle: 'none',
                  borderBottom: 'solid 0.5px ',
                  borderRadius: 0,
                  display: 'inline',
                  width: '200px',
                  float: 'left',
                  // marginTop: '16px'
                  margin: '15px 0px 0px 0px',
                }}
              />
            <div 
            style={{
              display:'flex',
              justifyContent:'space-between'
            }}
            >
          <Select
          style={{
            margin: '15px 0px 0px 0px',
          }}
          defaultValue=""
          // style={{ width:"" }}
          // onChange={handleFilterChange}
          // value={filterDepartment}
          bordered={false}
        >
          <Option value="">Tất Cả Phòng Ban</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Human Resource">Human Resource</Option>
          <Option value="Sales">Sales</Option>
          <Option value="Marketing">Marketing</Option>
          <Option value="Operations">Operations</Option>
          <Option value="Engineering">Engineering</Option>
          <Option value="Customer Support">Customer Support</Option>
          <Option value="Research & Development">
            Research & Development
          </Option>
          <Option value="Quality Assurance">Quality Assurance</Option>
          <Option value="Design">Design</Option>
          <Option value="Chăm sóc khách hàng">Phòng Chăm Sóc Khách Hàng</Option>
        </Select>

              <Button
                style={{
                  borderColor: '#7CFC00',
                  color: '#7CFC00',
                  margin: '15px 0px 0px 0px',
                }}
              >Làm mới</Button>

            </div>
              

          <Button type="primary" size='large'

            style={{
              // float: 'right',
              margin: '13px 0px 0px 0px',
            }}>

            <PlusCircleOutlined /> Thêm nhân viên</Button>
          </div>
           

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
     columns={columns} dataSource={data} scroll={{x:'max-content'}}/>
              </div>
            </Content>
          </Layout>
        </Layout>
      );
}