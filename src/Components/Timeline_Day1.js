import React from "react";

import "../Assets/Styles/Timeline.scss";

const Timeline_Day1 = () => {
    return (
        <div>
            <div id="content">
                <ul className="timeline">
                    <li
                        className="event"
                        data-date="10:00 AM - 10:15 AM"
                        data-aos="fade-up"
                    >
                        <h3>Inauguration</h3>
                        <p>
                            Commencement of event by lighting the lamp, followed
                            by the welcoming of the judges and sponsors.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="10:15 AM - 11:00 AM"
                        data-aos="fade-up"
                    >
                        <h3>Keynote</h3>
                        <p>
                            Attend our keynote session to gain a clear
                            understanding of AI technologies and explore
                            inquisitive topics.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="11:00 AM - 12:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Scan & Hunt</h3>
                        <p>
                            Prepare yourself for Scan & Hunt, a game that
                            requires collaborative problem-solving and
                            clue-finding to reach the final target.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="12:30 PM - 1:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Lunch</h3>
                        <p>
                            Take a break during lunchtime to relax and
                            rejuvenate before returning to your activities.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="1:30 PM - 3:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Workshop</h3>
                        <p>
                            Be prepared to dive deep into the oceans of
                            knowledge imparted by the mentors in our Workshop
                            session to gain the most of AI.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="3:30 PM - 3:45 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Break</h3>
                        <p>Take a break to rest and recharge.</p>
                    </li>
                    <li
                        className="event"
                        data-date="3:45 PM - 5:00 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Go Algo</h3>
                        <p>
                            Join us for GoAlgo, a game that will challenge your
                            programming skills by getting you to solve
                            algorithms and eliminating the errors in them.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline_Day1;
