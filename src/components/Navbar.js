import {Menu} from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />} />
          <Menu.Item key="2" icon={<VideoCameraOutlined />} />
          <Menu.Item key="3" icon={<UploadOutlined />} />
          <Menu.Item key="4" icon={<BarChartOutlined />} />
          <Menu.Item key="5" icon={<CloudOutlined />} />
          <Menu.Item key="6" icon={<AppstoreOutlined />} />
          <Menu.Item key="7" icon={<TeamOutlined />} />
          <Menu.Item key="8" icon={<ShopOutlined />} />
        </Menu>
      </div>
    );
  }
}

export default Navbar;
