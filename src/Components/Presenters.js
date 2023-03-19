import React from "react";
import Heading from "./Heading";

import ghrce from "../Assets/Images/Logos/GHRCE.png";
// import rgi from "../Assets/Images/Logos/RGI.png";
import rgi from "../Assets/Images/Logos/RGi.png";

import ieee from "../Assets/Images/Logos/IEEE_CIS_logo_White.png";
import jarvis from "../Assets/Images/Logos/JARVIS.png";
import gdgc from "../Assets/Images/Logos/GDGC.png";

import classes from "../Assets/Styles/Presenters.module.scss";

const Presenters = () => {
    return (
        <div className={classes.rootPresenters}>
            <div className={classes.logoContainer}>
                <div>
                    <img src={ghrce} />
                </div>
                <div>
                    <img src={rgi} />
                </div>
                <div>
                    <img src={ieee} />
                </div>

                <div>
                    <img src={jarvis} />
                </div>
                <div>
                    <img src={gdgc} />
                </div>
            </div>
        </div>
    );
};

export default Presenters;
