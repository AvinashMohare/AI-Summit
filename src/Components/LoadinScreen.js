import { useState, useEffect } from "react";

import classes from "../Assets/Styles/LoadingScreen.module.scss";

function LoadingScreen() {
    const names = ["AI Odyssey", "Workshops", "Games", "Power Talks", "Fun"];
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading with a timeout
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index) => {
                if (index === names.length - 1) {
                    return 0;
                } else {
                    return index + 1;
                }
            });
        }, 500);

        return () => clearInterval(intervalId);
    }, [names.length]);

    return (
        <div
            className={`${classes.loading} ${
                loading ? classes.active : classes.inactive
            }`}
        >
            <span className={classes.events}>{names[index]}</span>
        </div>
    );
}

export default LoadingScreen;
