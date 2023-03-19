import { useState, useEffect } from "react";

const EVENT_STARTING_DATETIME = "";

/**
 * this function returns the days, hours, minutes, seconds left
 * @param {number} currentCountdown number of milliseconds left
 * @returns days, hours, minutes, seconds left
 */
export const getReturnValues = (currentCountdown = 0) => {
    // calculate time left
    const days = Math.floor(currentCountdown / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (currentCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (currentCountdown % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor((currentCountdown % (1000 * 60)) / 1000);

    // return the time left
    return { days, hours, minutes, seconds };
};

/**
 * hook to get the time left for the event
 * @returns days, hours, minutes, seconds left
 */
export const useCountdown = () => {
    const currentDate = new Date().getTime();
    const countdownDatetime = new Date(EVENT_STARTING_DATETIME).getTime();

    // state to hold the time left
    const [countDown, setCountDown] = useState(countdownDatetime - currentDate);

    // update the time left every second
    useEffect(() => {
        // check if the event has started
        const countInterval = setInterval(() => {
            // update the time left
            setCountDown(countdownDatetime - new Date().getTime());
        }, 1000);

        return () => clearInterval(countInterval);
    }, [countdownDatetime]);

    /**
     * this hook calls the above utility function to get the days, hours, minutes, seconds left
     * @returns days, hours, minutes, seconds left
     */
    return getReturnValues(countDown);
};
