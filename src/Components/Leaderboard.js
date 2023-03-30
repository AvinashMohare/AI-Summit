import React from "react";

import classes from "../Assets/Styles/Leaderboard.module.scss";

const Leaderboard = () => {
    return (
        <div className={classes.rootLeaderboard}>
            <div className={classes.button}>
                <a
                    href="https://github.com/AvinashMohare/AI-Odyssey/blob/main/README.md"
                    target="_blank"
                >
                    Instructions
                </a>
            </div>

            <div className={classes.button}>
                <a
                    href="https://keepthescore.co/board/sdpdsfxdymqmr/"
                    target="_blank"
                >
                    Leaderboard
                </a>
            </div>
        </div>
    );
};

export default Leaderboard;
