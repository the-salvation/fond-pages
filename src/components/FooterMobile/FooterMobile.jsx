import React from "react";
import classes from "./Footer.module.scss";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <FooterInfo />
    </footer>
  );
};

export default Footer;
