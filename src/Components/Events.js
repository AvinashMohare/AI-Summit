import React from "react";

import Heading from "./Heading";

import classes from "../Assets/Styles/Events.module.scss";
import Timeline from "./Timeline";

const Events = () => {
    return (
        <div className={classes.rootEvents}>
            <Heading>Events</Heading>

            <Timeline />
        </div>
    );
};

export default Events;
