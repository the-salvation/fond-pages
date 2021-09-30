import React from 'react';
import classes from './FooterInfo.module.scss';

const FooterInfo = () => {
  return (
    <div className={classes.footerData}>Фонд рятування дітей та підлітків України від наркотиків(c) 2021
      <span className={classes.tel}>&nbsp;Телефон: (057)714-31-77</span></div>
  );
};

export default FooterInfo;