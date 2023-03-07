import React from "react";

import "../Assets/Styles/Timeline.scss";

const Timeline_Day2 = () => {
    return (
        <div>
            <div id="content">
                <ul className="timeline">
                    <li
                        className="event"
                        data-date="10:00 AM - 11:00 AM"
                        data-aos="fade-left"
                    >
                        <h3>Career Roadmap</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliq
                        </p>
                        {/* <p>
                            Get here on time, it's first come first serve. Be
                            late, get turned away.
                        </p>
                        <p>
                            Get here on time, it's first come first serve. Be
                            late, get turned away.
                        </p> */}
                    </li>
                    <li
                        className="event"
                        data-date="11:00 AM - 12:30 PM"
                        data-aos="fade-left"
                    >
                        <h3>AI Wizard and Quiz Preliminary</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliq
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="12:30 PM - 2:30 PM"
                        data-aos="fade-left"
                    >
                        <h3>Lunch</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliq
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="1:30 PM - 3:00 PM"
                        data-aos="fade-left"
                    >
                        <h3>Panel Discussion</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliq
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="3:00 PM - 4:30 PM"
                        data-aos="fade-left"
                    >
                        <h3>Quiz Finals</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliq
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="4:30 PM - 5:00 PM"
                        data-aos="fade-left"
                    >
                        <h3>Valedictory</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliq
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline_Day2;
