import React from 'react';
import classes from './Footer.module.css';
import FooterInfo from './FooterInfo/FooterInfo';

const Header = () => {
    return (
        <header className={classes.footer}>

            <FooterInfo/>
        </header>
    )
}

export default Header;