import '@src/App.css';
import React from 'react';
import {Layout} from 'antd';
import Navbar from '@components/Navbar';
import SiteContent from '@components/SiteContent';
import {createUseStyles, ThemeProvider} from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  app: {
    margin: 0,
  },
  layout: {
    margin: 0,
    minHeight: '100vh',
  },
}));

const theme = {
  colorPrimary: '#151723',
  colorSecondary: '#C8C29E',
};

function App() {
  const classes = useStyles(theme);
  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Layout className={classes.layout}>
          <Navbar/>
          <SiteContent />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
