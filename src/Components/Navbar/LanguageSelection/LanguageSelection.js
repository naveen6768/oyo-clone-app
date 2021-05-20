import React from 'react';

import classes from './LanguageSelection.module.css'
const LanguageSelection = () => {
    return (
        <div className={classes.language_container}>
            <select className={classes.language_selection} name="languageSelection" id="lang">
                <option value="English">English</option>
                <option value="Spanel">Spanel</option>
            </select>
        </div>

    )
}

export default LanguageSelection;