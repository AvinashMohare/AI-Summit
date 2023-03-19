import React, { useEffect, useState } from "react";

import classes from "../Assets/Styles/Header.module.scss";

const INNER_HEIGHT = window.innerHeight;
const Header = () => {
    // controls the glass effect on the header
    // 0 - transparent
    // 1 - opaque
    // 2 - glass
    const [glassStatus, setGlassStatus] = useState(false);

    // current scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const currScrollPosition = document.documentElement.scrollTop;

            // if the scroll position is greater than the inner height of the window
            if (currScrollPosition > 50 && currScrollPosition < INNER_HEIGHT) {
                setGlassStatus(1);
            } else if (currScrollPosition > INNER_HEIGHT) {
                setGlassStatus(2);
            } else {
                setGlassStatus(0);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <div
            className={`${classes.headerRoot} ${
                glassStatus === 1
                    ? classes.color
                    : glassStatus === 2
                    ? classes.active
                    : classes.inactive
            }`}
        >
            <div className={classes.header}>
                <div className={classes.logo}>
                    <span>AI Odyssey</span>
                </div>

                <div className={classes.headerControls}>
                    <div className={classes.navigation}>
                        <ul>
                            <li>
                                <a href="#speakers">Speakers</a>
                            </li>
                            <li>
                                <a href="#events">Events</a>
                            </li>
                            <li>
                                <a href="#timeline">Timeline</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.headerSmall}></div>
        </div>
    );
};

export default Header;
