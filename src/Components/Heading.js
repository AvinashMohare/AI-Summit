import React from "react";

import classes from "../Assets/Styles/Heading.module.scss";

const Heading = (props) => {
    return (
        <div className={classes.headingContainer}>
            <div className={classes.titleContainer}>
                <p className={classes.frontText}>{props.children}</p>
                {/* <div className={classes.line}>
                    <div className={classes.actualLine}></div>
                </div> */}
            </div>
            <h1 className={classes.backText}>{props.children}</h1>
        </div>
    );
};

export default Heading;
