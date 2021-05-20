import React from 'react';

import classes from './NavBar.module.css';
import CompanyLogo from './CompanyLogo/CompanyLogo'
import BecomeMember from './BecomeMember/BecomeMember'
import RegisterButton from './RegisterButton/RegisterButton'
import LanguageSelection from './LanguageSelection/LanguageSelection';


const NavBar = () => {
    return (
        <div className={classes.mainNavbar}>
            <CompanyLogo />
            <BecomeMember />
            <LanguageSelection/>
            <RegisterButton />
        </div>
    )
}

export default NavBar;