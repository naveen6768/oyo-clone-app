import React from 'react';

import classes from './RegisterButton.module.css';
import { FaUserAlt } from 'react-icons/fa';

const RegisterButton = () => {
    return(
<div className={classes.register_button}>
{/* <FaUserAlt/> */}
    <h1 className={classes.register_button__title}>Login/Signup</h1>
</div>
    )
}
export default RegisterButton;