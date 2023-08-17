import React, { useState, useEffect } from 'react';
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
import MyContract from './layouts/MyContract';
import Contracts from './layouts/Contracts';
import AddStaff from './layouts/AddStaff';
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
    <Link to="/dashboard" ><span style={{fontWeight: '600'}}>DASHBOARD</span></Link>,
    '1',
    <HomeOutlined />
  ),

  getItem(<span style={{fontWeight: '600'}}>NHÂN VIÊN</span>, 'sub1', <TeamOutlined />, [
    getItem(<Link to="/departments" >Phòng Ban</Link>
    ,'2', 
    <TeamOutlined />),
    getItem('Phòng Ban Của Tôi', '3', <TeamOutlined />),
    getItem(<Link to="/allstaff" >Toàn Bộ Nhân Viên</Link>,
      '4',
      <TeamOutlined />),
    getItem(<Link to="/addstaff">Tạo Nhân Viên Mới</Link>, '5', <UserAddOutlined />),
  ]),
  getItem(<span style={{fontWeight: '600'}}>TĂNG CA</span>, 'sub2', <FieldTimeOutlined />, [
    getItem('Đơn Tăng Ca Nhân Viên', '6', <SolutionOutlined />),
    getItem('Đơn Tăng Ca Của Tôi', '7', <SolutionOutlined />),
  ]),
  getItem(<span style={{fontWeight: '600'}}>NGHỈ PHÉP</span>, 'sub3', <FieldTimeOutlined />, [
    getItem('Đơn Nghỉ Phép Của Nhân Viên', '8', <SolutionOutlined />),
    getItem('Đơn Nghỉ Phép Của Tôi', '9', <SolutionOutlined />),
  ]),
  getItem(<span style={{fontWeight: '600'}}>ĐƠN KHÁC</span>, 'sub4', <FileOutlined />, [
    getItem('Danh Sách Đơn Khác', '10', <FileOutlined />),
    getItem('Đơn Khác Của Tôi', '11', <FileOutlined />),
  ]),

  getItem(<span style={{fontWeight: '600'}}>QUẢN LÝ LƯƠNG</span>, 'sub5', <BarChartOutlined />, [
    getItem('Lương Nhân Viên', '12', <DollarOutlined />),
    getItem('Lương Của Tôi', '13', <DollarOutlined />),
  ]),

  getItem(<span style={{fontWeight: '600'}}>HỢP ĐỒNG</span>, 'sub6', <SnippetsOutlined />, [
    getItem(<Link to="/contracts">Hợp Đồng Nhân Viên</Link>, '14', <FileDoneOutlined />),
    getItem(<Link to="/mycontract">Hợp Đồng Của Tôi</Link>, '15', <FileDoneOutlined />),
  ]),

  getItem(<span style={{fontWeight: '600'}}>TUYỂN DỤNG</span>, 'sub7', <UsergroupAddOutlined />, [
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
  const [selectedKeys, setSelectedKeys] = useState([]);
  useEffect(() => {
    const selectedMenu = sessionStorage.getItem('selectedMenu');
    if (selectedMenu) {
    setSelectedKeys([selectedMenu]);
    }
    }, []
    );
    const handleMenuSelect = (item) => {
      setSelectedKeys([item.key]);
      sessionStorage.setItem('selectedMenu', item.key);
      };
  return (
    <Layout hasSider>

      <Sider 
      theme={theme1}
        width="260"
        style={{
          overflow: 'auto',
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
        <h3 style={{fontWeight: '650'}}>NGUYEN VAN QUAN LY</h3>
    </Space>

        <br />
        <br />

        <div className="demo-logo-vertical" />
        <Space size={2}>
        <Switch style={{margin: '0px 0px 0px 10px'}} onChange={changeMode} /><span style={{fontWeight: '500'}}>CHANGE MODE</span></Space>
        <br/>
        <br/>
        <Space size={2}>
        <Switch style={{margin: '0px 0px 0px 10px'}} onChange={changeTheme} /><span style={{fontWeight: '500'}}>CHANGE STYLE</span>
        </Space>
        <br />
        <br/>
        <Menu
          style={{
            width: '270px',
          }}
          theme={theme1} mode={mode} 
          selectedKeys={selectedKeys}
          onSelect={handleMenuSelect}
          // defaultSelectedKeys={['1']} 
          // defaultOpenKeys={['sub1']}
          defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5','sub6', 'sub7']}
          items={items}
        >
        </Menu>
      </Sider>
      <Layout theme={theme1}
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
              <Route path='/mycontract' element={<MyContract/>} />
              <Route path='/contracts' element={<Contracts/>} />
              <Route path='/addstaff' element={<AddStaff/>} />
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