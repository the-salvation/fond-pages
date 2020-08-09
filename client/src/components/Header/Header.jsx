import React from 'react';
import classes from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Search from '../Search/Search';

const Header = () => {
    return (
        <header className={classes.header}>
            <HeaderLogo/>
            <Search/>
            {/* <img alt="logo" src="https://img.favpng.com/9/0/12/logo-phoenix-illustration-png-favpng-bPSWE9dLfqAMWJwvZeAErTs4U.jpg"></img> */}
            {/* <img alt="logo" src="../../assets/logo.png"></img> */}
        </header>
    )
}

export default Header;