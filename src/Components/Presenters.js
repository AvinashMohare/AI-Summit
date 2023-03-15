import React from "react";
import Heading from "./Heading";

import ghrce from "../Assets/Images/Logos/GHRCE.png";

import classes from "../Assets/Styles/Presenters.module.scss";

const Presenters = () => {
    return (
        <div className={classes.rootPresenters}>
            <div className={classes.logoContainer}>
                <div>
                    <img src={ghrce} />
                </div>
                <div>
                    <img src={ghrce} />
                </div>
                <div>
                    <img src={ghrce} />
                </div>
                <div>
                    <img src={ghrce} />
                </div>
                <div>
                    <img src={ghrce} />
                </div>
            </div>
        </div>
    );
};

export default Presenters;
