import React from 'react';

import classes from './NavBar.module.css';
import CompanyLogo from './CompanyLogo/CompanyLogo'
import BecomeMember from './BecomeMember/BecomeMember'
import RegisterButton from './RegisterButton/RegisterButton'
const NavBar = () => {
    return (
        <div className={classes.mainNavbar}>
        <CompanyLogo />
        <BecomeMember/>
        <RegisterButton/>
        </div>
    )
}

export default NavBar;