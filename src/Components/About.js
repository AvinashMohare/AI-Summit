import React from "react";

import classes from "../Assets/Styles/About.module.scss";
import Heading from "./Heading";

const About = () => {
    return (
        <div className={classes.rootAbout}>
            <Heading>About Us</Heading>
            <div className={classes.contentContainer}>
                <div className={classes.content}></div>
                <div className={classes.image}></div>
            </div>
        </div>
    );
};

export default About;
