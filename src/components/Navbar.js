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
import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {Layout} from 'antd';
const {Sider} = Layout;
const useStyles = createUseStyles((theme) => ({
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    marginTop: 0,
    background: theme.colorSecondary,
  },
  menu: {

  },
}));

function Navbar() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Sider className={classes.sider}>
      <Menu mode="inline" defaultSelectedKeys={['4']} className={classes.menu}>
        <Menu.Item key="1" icon={<UserOutlined />} />
        <Menu.Item key="2" icon={<VideoCameraOutlined />} />
        <Menu.Item key="3" icon={<UploadOutlined />} />
        <Menu.Item key="4" icon={<BarChartOutlined />} />
        <Menu.Item key="5" icon={<CloudOutlined />} />
        <Menu.Item key="6" icon={<AppstoreOutlined />} />
        <Menu.Item key="7" icon={<TeamOutlined />} />
        <Menu.Item key="8" icon={<ShopOutlined />} />
      </Menu>
    </Sider>
  );
}
export default Navbar;
