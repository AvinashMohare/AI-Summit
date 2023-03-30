import React from "react";

import classes from "../Assets/Styles/Leaderboard.module.scss";

const Leaderboard = () => {
    return (
        <div className={classes.rootLeaderboard}>
            <div className={classes.button}>
                <a
                    href="https://keepthescore.co/board/hyxylkbshcrqr/"
                    target="_blank"
                >
                    Leaderboard
                </a>
            </div>
        </div>
    );
};

export default Leaderboard;
