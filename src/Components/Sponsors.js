import React from "react";
import Heading from "./Heading";
import classes from "../Assets/Styles/Sponsors.module.scss";
import Logo1 from "../Assets/Images/LandingPageImg.jpg";
const Sponsors = () => {
    return (
        <div className={classes.rootSponsors}>
            <Heading>Sponsors</Heading>
            <div className={classes.content}>
                <div className={classes.card}>
                    <div className={classes.Logo}>
                        <img src={Logo1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
