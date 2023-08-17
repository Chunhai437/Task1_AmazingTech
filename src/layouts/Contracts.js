import React from 'react';
import { Input, Tag, Badge, Avatar, Table, Layout, theme} from 'antd';
import {
  UnorderedListOutlined,
  BankOutlined,
  CalendarOutlined,
  EllipsisOutlined,
  UserOutlined,
  BulbOutlined,
  DollarOutlined,
  BorderlessTableOutlined,
  FileTextOutlined,
  UploadOutlined
} from '@ant-design/icons';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
const { Header, Content} = Layout;
const columns = [
  {

    dataIndex: 'symbol',
    key: 'symbol'
  },
  {
    title: <span><b>ID</b></span>,
    dataIndex: 'key',
    key: 'key',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
  
  {
    title: [<UserOutlined />, <span><b>  Tạo Bởi</b></span>],
    dataIndex: 'author',
    key: 'author',
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
            <span style={{color: 'grey'}}>   {text}</span>   
          </>
        );
      }

    },
  },
  {
    title: [<UnorderedListOutlined />, <span ><b>  Loại hợp đồng</b></span>],
    dataIndex: 'type',
    key: 'type',
    render: (text) => {
      let color = 'cyan'; // Mặc định màu là 'cyan'
  
      if (text === 'Hợp đồng xác định hạn') {
        color = 'yellow'; 
      }
  
      return (
        <Badge color={color} text={<span style={{color:'grey'}}><u>{text}</u></span>} />
      );
    },
  },
  {
    title: [<BulbOutlined  />, <span ><b>  Trạng thái</b></span>],
    key: 'status',
    dataIndex: 'status',
    render: (text) => {
      let color = 'cyan'; 
  
      if (text === 'Hiệu lực') {
        color = 'purple'; 
      }
      return(
        <Tag color={color}>{text}</Tag>
      )
    }
  },
  {
    title: [<DollarOutlined   />, <span ><b>  Loại lương</b></span>],
    key: 'salary',
    dataIndex: 'salary',
    render: (text) => {
      let color = '	#3CB371'; 
  
      if (text === 'Gross to net') {
        color = '#87CEFA'; 
      }
      return(
        <Tag color={color}>{text}</Tag>
      )
    }
  },
  {
    title: [<BorderlessTableOutlined />, <span ><b>  Người phụ thuộc</b></span>],
    dataIndex: 'people',
    key: 'people',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
  {
    title: [<CalendarOutlined  />, <span ><b>  Ngày Bắt Đầu</b></span>],
    dataIndex: 'startdate',
    key: 'startdate',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
  {
    title: [<CalendarOutlined  />, <span ><b>  Ngày Kết Thúc</b></span>],
    dataIndex: 'enddate',
    key: 'enddate',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
  {
    title:  [<BankOutlined /> , <span ><b>  Lương Thỏa Thuận</b></span>],
    dataIndex: 'dealsalary',
    key: 'dealsalary',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
  {
    title:  [<BankOutlined /> , <span ><b>  Lương Đóng Thuế</b></span>],
    dataIndex: 'taxsalary',
    key: 'taxsalary',
    render: (text) => <span style={{ color: 'gray' }}>{text} </span>,
  },
  {
    title:  [<BorderlessTableOutlined  /> , <span ><b>  Tổng Phụ Cấp</b></span>],
    dataIndex: 'extra',
    key: 'extra',
    render: (text) => <span style={{ color: 'gray' }}>{text} </span>,
  },
  {
    title: [<FileTextOutlined />, <span ><b>  Ghi chú</b></span>],
    dataIndex: 'note',
    key: 'note',
    render: (text) => {
        if (text === '') {
          text = <i>Chưa có ghi chú</i>; 
        }
        return(
            <span style={{ color: 'gray' }}>{text}</span>
        )
      }
    
  },
  {
    title: [<CalendarOutlined  />, <span ><b>  Thời Gian Tạo</b></span>],
    dataIndex: 'createdate',
    key: 'createdate',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
  {
    title: [<CalendarOutlined  />, <span ><b>  Thời Gian Thay Đổi</b></span>],
    dataIndex: 'changedate',
    key: 'changedate',
    render: (text) => <span style={{ color: 'gray' }}>{text}</span>,
  },
];
const data = [
  {
    key: '1',
    symbol: <EllipsisOutlined />,
    author: 'Vo Nguyen Trung Hai',
    type: 'Hợp đồng xác định hạn',
    status: 'Hiệu lực',
    salary: 'Gross to net',
    people: '1',
    startdate: 'Thg 8 05, 2023 00:00',
    enddate: 'Thg 11 31, 2023 00:00',
    dealsalary: '90.000.000 đ',
    taxsalary: '80.000.000 đ',
    extra: '0 đ',
    note: '',
    createdate: 'Thg 8 05, 2023 00:00',
    changedate: 'Thg 8 05, 2023 00:00',
  },
  {
    key: '2',
    symbol: <EllipsisOutlined />,
    author: 'Nguyen Van Nhan Vien',
    type: 'Hợp đồng không xác định hạn',
    status: 'Không hiệu lực',
    salary: 'Net to gross',
    people: '3',
    startdate: 'Thg 8 06, 2023 00:00',
    enddate: 'Thg 12 01, 2023 00:00',
    dealsalary: '70.000.000 đ',
    taxsalary: '65.000.000 đ',
    extra: '1.000 đ',
    note: '',
    createdate: 'Thg 8 06, 2023 00:00',
    changedate: 'Thg 8 06, 2023 00:00',
  },
];

export default function Contracts() {
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
            fontWeight: '650'
          }}

        >
          <div style={{ float: 'left', textAlign: 'center', margin:'0px 0px 0px 10px'}}>DANH SÁCH NHÂN VIÊN</div>
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
            margin:'40px 14px 10px 16px',
            border: '1px solid',
            borderColor: '#dddddd',
            borderRadius: '10px',
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
          </div>
           

        </Header>
        <Content
              style={{
                margin: '10px 16px 50px',
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
                }}
              >
    <Table
    style={{
      border: '1px solid',
      borderColor: '#dddddd',
      borderRadius: '10px',
              }}
     columns={columns} dataSource={data} scroll={{x:'max-content'}}/>

              </div>
            </Content>
          </Layout>
        </Layout>
      );
}