import '@src/App.css';
import React from 'react';
import {Layout} from 'antd';
import Navbar from '@components/Navbar';
import Mainframe from '@components/Mainframe';
import {createUseStyles} from 'react-jss';

const {Sider} = Layout;

const useStyles = createUseStyles({
  sider: {
    overflow: 'auto',
    height: '100vh',
    width: '1vw',
    position: 'fixed',
    left: 0,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Layout>
        <Sider className={classes.sider}>
          <Navbar/>
        </Sider>
        <Mainframe />
      </Layout>
    </div>
  );
}

export default App;
