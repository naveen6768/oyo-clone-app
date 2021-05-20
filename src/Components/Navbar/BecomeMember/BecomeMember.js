import React from 'react';

import classes from './BecomeMember.module.css';
import imagePath from '../../../Assets/oyo-wizard-coupon.jpg';

const BecomeMember = () => {
    return (
        <div className={classes.become_Member}>
            <img className={classes.become_Member__image} src={imagePath} alt='wizard-logo'/>
            <h1 className={classes.become_Member__title}>Become a Member</h1>
            <p className={classes.become_Member__subtitle}>Additonal 10% off on stays</p>

        </div>
    )
}

export default BecomeMember;