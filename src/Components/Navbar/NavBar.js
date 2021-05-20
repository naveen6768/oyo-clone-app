import React from 'react';

import classes from './NavBar.module.css';
import CompanyLogo from './CompanyLogo/CompanyLogo'
import BecomeMember from './BecomeMember/BecomeMember'
import RegisterButton from './RegisterButton/RegisterButton'
import LanguageSelection from './LanguageSelection/LanguageSelection';
import CitiesDropdown from '../CitiesDropdown/CitiesDropdown'

const NavBar = () => {
    return (
        <div className={classes.mainNavbar}>
            <CompanyLogo />
            <BecomeMember />
            <LanguageSelection/>
            <RegisterButton />
            <CitiesDropdown/>
        </div>
    )
}

export default NavBar;