import React from 'react';
import {
  UploadOutlined,
} from '@ant-design/icons';
import { Layout, Descriptions, theme } from 'antd';
const { Content, Header} = Layout;
const items = [
    {
      key: '1',
      children: <span style={{color: '#4169E1', fontWeight: '600', fontSize: '20px', paddingLeft: '16px' }}>Thông tin người lao động</span>,
      span: 3,
    },
    {
      key: '2',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Họ và tên</span>,
      children: 'Nguyen Van Quan Ly',
    },
    {
      key: '3',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Sinh ngày</span>,
      children: '06-07-2003',
    },
    {
      key: '4',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>CMND/CCCD</span>,
      children: 'AAAA000002',
    },
    {
      key: '5',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Địa chỉ</span>,
      span: 1,
      children: 'Vinhomes Grandpark, Building S2.03, Nguyen Xien Street, District 9, HCM City',
    },
    {
      key: '6',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Số điện thoại</span>,
      children: '0864758398',
    },
    {
      key: '7',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Giới tính</span>,
      children: 'Nam',
    },
    {
      key: '8',
      children: <span style={{color: '#4169E1', fontWeight: '600', fontSize: '20px', paddingLeft: '16px' }}>Hợp đồng lao động</span>,
      span: 3,
    },
    {
      key: '9',
      children: <span style={{color: '#4169E1', fontWeight: '450', fontSize: '16px', paddingLeft: '16px' }}>1. Công việc, phòng ban và thời hạn hợp đồng</span>,
      span: 3,
    },
    {
      key: '10',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Phòng ban công tác</span>,
      children: 'Sales',
    },
    {
      key: '11',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Loại hợp đồng</span>,
      children: 'Hợp đồng xác định hạn',
      span: 2,
    },
    {
      key: '12',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Từ ngày</span>,
      children: '05-08-2023 ',
    },
    {
      key: '13',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Đến ngày</span>,
      children: '30-11-2023',
      span: 2,
    },
    {
      key: '14',
      children: <span style={{color: '#4169E1', fontWeight: '450', fontSize: '16px', paddingLeft: '16px' }}>2. Lương, phụ cấp và các khoản bổ sung khác</span>,
      span: 3,
    },
    {
      key: '15',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Lương căn bản</span>,
      children: '90.000.000',
    },
    {
      key: '16',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Lương tính thuế</span>,
      children: '80.000.000',
      span: 2,
    },
    {
      key: '17',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Các phụ cấp (mỗi tháng)</span>,
      span: 3,
    },
    {
      key: '18',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Hình thức trả lương</span>,
      children: 'Chuyển khoản',
      span: 3,
    },
    {
      key: '19',
      label: <span style={{color: 'black', fontWeight: '490', paddingLeft: '40px'}}>STK Ngân hàng</span>,
      children: '4763783949294',
      span: 3,
    },
    {
      key: '20',
      label: <span style={{color: 'black', fontWeight: '490', paddingLeft: '40px'}}>Chủ tài khoản</span>,
      children: 'Nguyen Van Quan Ly',
      span: 3,
    },
    {
      key: '21',
      label: <span style={{color: 'black', fontWeight: '490', paddingLeft: '40px'}}>Ngân hàng</span>,
      children: 'VPBank',
      span: 3,
    },
    {
      key: '22',
      children: <span style={{color: '#4169E1', fontWeight: '450', fontSize: '16px' , paddingLeft: '16px' }}>3. Thời gian làm việc và ghi chú</span>,
      span: 3,
    },
    {
      key: '23',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Số ngày làm việc 1 tuần</span>,
      children: '5',
    },
    {
      key: '24',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Số người phụ thuộc</span>,
      children: '1',
      span: 2
    },
    {
      key: '25',
      label: <span style={{color: 'black', fontWeight: '600', paddingLeft: '16px'}}>Ghi chú</span>,
      children: 'abc',
      span: 2
    },
  ];

export default function MyContract() {
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
          <div style={{float: 'left', textAlign: 'center', margin:'0px 0px 0px 10px'}}>HỢP ĐỒNG CỦA TÔI</div>
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
<Descriptions style={{}} title=<h2> THÔNG TIN HỢP ĐỒNG</h2> layout="horizontal" items={items} />;
              </div>
            </Content>
          </Layout>
        </Layout>
      );
}