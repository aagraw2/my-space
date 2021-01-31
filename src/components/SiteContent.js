import React from 'react';
import {Row, Col} from 'antd';
import {createUseStyles, useTheme} from 'react-jss';
import Background from '@images/letter_a.gif';
const useStyles = createUseStyles((theme) => ({
  siteContent: {
    marginTop: 0,
    textAlign: 'center',
    color: 'white',
    minHeight: '100vh',
    background: theme.colorPrimary,
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
  },
  row: {
    margin: 0,
  },
}));

function SiteContent() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.siteContent}>
      <Row className={classes.row}>
        <Col>
          <h1>Site under construction</h1>
        </Col>
      </Row>
      <Row className={classes.row}>
        <Col>
          <h1>Please visit later</h1>
        </Col>
      </Row>
    </div>
  );
}

export default SiteContent;
