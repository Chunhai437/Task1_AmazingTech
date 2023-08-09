import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Avatar,Layout, theme, Space } from 'antd';
import {
  TeamOutlined,
  HomeOutlined,
  FieldTimeOutlined,
  FileOutlined,
  BarChartOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
  UserAddOutlined,
  SolutionOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import './index.css';
import Dashboard from './layouts/Dashboard';
import Index from './layouts/Index';
import { Link } from 'react-router-dom';
import Departments from './layouts/Departments';
import AllStaff from './layouts/AllStaff';
// import Header from './components/Header';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const { Content, Footer, Sider } = Layout;
const items = [
  getItem(
    <Link to="/dashboard" >DASHBOARD</Link>,
    'Dashboard',
    <HomeOutlined />
  ),

  getItem('NHÂN VIÊN', 'sub1', <TeamOutlined />, [
    getItem(<Link to="/departments" >Phòng Ban</Link>
    ,'Phòng Ban', 
    <TeamOutlined />),
    getItem('Phòng Ban Của Tôi', '3', <TeamOutlined />),
    getItem(<Link to="/allstaff" >Toàn Bộ Nhân Viên</Link>,
      'Toàn Bộ Nhân Viên',
      <TeamOutlined />),
    getItem('Tạo Nhân Viên Mới', '5', <UserAddOutlined />),
  ]),
  getItem('TĂNG CA', 'sub2', <FieldTimeOutlined />, [
    getItem('Đơn Tăng Ca Nhân Viên', '6', <SolutionOutlined />),
    getItem('Đơn Tăng Ca Của Tôi', '7', <SolutionOutlined />),
  ]),
  getItem('NGHỈ PHÉP', 'sub3', <FieldTimeOutlined />, [
    getItem('Đơn Nghỉ Phép Của Nhân Viên', '8', <SolutionOutlined />),
    getItem('Đơn Nghỉ Phép Của Tôi', '9', <SolutionOutlined />),
  ]),
  getItem('ĐƠN KHÁC', 'sub4', <FileOutlined />, [
    getItem('Danh Sách Đơn Khác', '10', <FileOutlined />),
    getItem('Đơn Khác Của Tôi', '11', <FileOutlined />),
  ]),

  getItem('QUẢN LÝ LƯƠNG', 'sub5', <BarChartOutlined />, [
    getItem('Lương Nhân Viên', '12', <DollarOutlined />),
    getItem('Lương Của Tôi', '13', <DollarOutlined />),
  ]),

  getItem('HỢP ĐỒNG', 'sub6', <SnippetsOutlined />, [
    getItem('Hợp Đồng Nhân Viên', '14', <FileDoneOutlined />),
    getItem('Hợp Đồng Của Tôi', '15', <FileDoneOutlined />),
  ]),

  getItem('TUYỂN DỤNG', 'sub7', <UsergroupAddOutlined />, [
    getItem('Danh Sách Ứng Viên', '16', <UsergroupAddOutlined />),

  ]),
]

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [mode, setMode] = useState('inline');
  const [theme1, setTheme1] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme1(value ? 'dark' : 'light');
  };

  return (
    <Layout hasSider>

      <Sider theme={theme1}
        width="260"
        style={{
          // overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          // left: 0,
          // top:0,
          // bottom: 0,
          marginRight: 10,
        }}
      >
        <div className="demo-logo-vertical" />
        <Space size={16} wrap>
        <Avatar src={<img src={url} alt="avatar" />} />
        <h3>NGUYEN VAN QUAN LY</h3>
    </Space>

        <br />
        <br />

        <div className="demo-logo-vertical" />
        <Space size={2}>
        <Switch onChange={changeMode} /><h5> CHANGE MODE</h5></Space>
        <br/>
        <Space size={2}>
        <Switch onChange={changeTheme} /><h5> CHANGE STYLE</h5>
        </Space>
        <br />
        <Menu
          style={{
            width: '260',
          }}
          theme={theme1} mode={mode} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
          items={items}
        >
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
          // bottom: 0,
          marginLeft: '250px',
          minHeight: '100vh',
        }}
      >
        <Content
          theme={theme1}
          style={{
            margin: '8px 8px 0 15px',
            // overflow: 'initial',
          }}
        >
          <div
            style={{
              // padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path='' element={<Index />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/departments' element={<Departments />} />
              <Route path='/allstaff' element={<AllStaff/>} />
            </Routes>
          </div>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          HRMIntern@2023
        </Footer>


      </Layout>
    </Layout>
  );
};
export default App;