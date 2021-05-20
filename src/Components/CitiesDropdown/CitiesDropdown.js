import React from 'react';

import classes from './CitiesDropdown.module.css';
import Cities from './Cities/Cities';

const CitiesDropdown = () => {
    return (
        <div className={classes.main_citiesDropdown}>
           <Cities/> 
        </div>
    )
}

export default CitiesDropdown;