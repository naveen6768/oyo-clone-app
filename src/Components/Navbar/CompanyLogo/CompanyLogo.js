import React from 'react';

import classes from './CompanyLogo.module.css';
import imagePath from '../../../Assets/Oyo-Rooms-Logo.jpg';
const CompanyLogo = () => {
  return (
    <>
      <img className={classes.brandLogo} src={imagePath} alt='brand logo' />
    </>
  );
}

export default CompanyLogo