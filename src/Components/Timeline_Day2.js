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
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Career Roadmap</h3>
                        <p>
                            If you feel you are on a wobbly journey for your
                            career join us at Career Roadmap and get yourself a
                            clear vision for your better future.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="11:00 AM - 12:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>AI Wizard and Quiz Preliminary</h3>
                        <p>
                            All the knowledge and passion for AI has found its
                            junction here at AI Wizard and the Quiz Preliminary
                            Round. Both the games will challenge your skills in
                            AI to find the best AI enthusiast of all.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="12:30 PM - 2:30 PM"
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
                        data-date="1:30 PM - 3:00 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Panel Discussion</h3>
                        <p>
                            Take a break during lunchtime to relax and
                            rejuvenate before returning to your activities.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="3:00 PM - 4:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Quiz Finals</h3>
                        <p>
                            After showcasing their proficiency in the Quiz
                            Preliminary Round, the qualifying teams will face
                            Quiz Finals where one of them will become the
                            ultimate AI know-it-all.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="4:30 PM - 5:00 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Valedictory</h3>
                        <p>
                            All the winners and runner ups will be felicitated
                            with prizes and more for their amazing performances
                            at AI Odyssey
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline_Day2;
