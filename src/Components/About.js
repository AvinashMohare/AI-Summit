import React from "react";

import classes from "../Assets/Styles/About.module.scss";
import Heading from "./Heading";

const About = () => {
    return (
        <div className={classes.rootAbout}>
            <Heading backText="About US" data-aos="fade-up">
                About Us
            </Heading>

            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <p>
                        G. H. Raisoni College of Engineering has successfully
                        organised three exhilarating editions of AI Summit. Now,
                        we are elated to announce AI Odyssey, a blend of AI and
                        games. AI plays a vital role in our lives and when fused
                        with games there is no better way to learn it.
                    </p>
                    <p>
                        AI Odyssey is going to be held on March 31 and April 1,
                        2023 where the junction of games will make you dive deep
                        into the creative, theoretical, applicable, visionary
                        and innovative ways of implementing Artificial
                        Intelligence.
                    </p>
                    <p>
                        The event is open to students, professionals, and
                        enthusiasts from various fields such as engineering,
                        computer science, game development, and others.
                    </p>
                </div>

                <div className={classes.images}>
                    <img
                        src={"https://aisummit3.vercel.app/assets/Saly-10.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
