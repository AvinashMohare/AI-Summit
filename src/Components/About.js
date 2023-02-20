import React from "react";

import classes from "./About.module.scss";

const About = () => {
    return (
        <div className={classes.rootAbout}>
            <div className={classes.headingContainer}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.frontText}>About Us</h1>
                    <div className={classes.line}>
                        <div className={classes.actualLine}></div>
                    </div>
                </div>
                <h1 className={classes.backText}>ABOUT US</h1>
            </div>

            <div className={classes.contentContainer}></div>
        </div>
    );
};

export default About;
