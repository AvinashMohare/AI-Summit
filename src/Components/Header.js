import React from "react";

import classes from "../Assets/Styles/Header.module.scss";

const Header = () => {
    return (
        <div className={classes.headerRoot}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <span>AI Odyssey</span>
                </div>

                <div className={classes.headerControls}>
                    <div className={classes.navigation}>
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Speakers</a>
                            </li>
                            <li>
                                <a>Events</a>
                            </li>
                            <li>
                                <a>Prizes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
