import React from 'react';

import classes from './RegisterButton.module.css';
import {RiUser3Line } from 'react-icons/fa';
const RegisterButton = () => {
    return(
<div className={classes.register_button}>
<h3> Lets go for a <RiUser3Line />? </h3>
    <h1 className={classes.register_button__title}>Login/Signup</h1>
</div>
    )
}
export default RegisterButton;