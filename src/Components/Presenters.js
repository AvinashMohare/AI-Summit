import React from "react";

import classes from "./Presenters.module.scss";

const Presenters = () => {
    return (
        <div className={classes.rootPresenters}>
            <p>Presenters</p>
            <div className={classes.logos}>
                <img></img>
            </div>
        </div>
    );
};

export default Presenters;
