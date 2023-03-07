import React from "react";

import image from "../Assets/Images/About-us.webp";
import classes from "../Assets/Styles/About.module.scss";
import Heading from "./Heading";

const About = () => {
    return (
        <div className={classes.rootAbout}>
            <Heading>About Us</Heading>
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <p>
                        G. H. Raisoni College of Engineering has successfully
                        organised three exhilarating editions of AI Summit. Now,
                        we are very glad to announce AI Odyssey, a blend of AI
                        and games. AI plays a vital role in our lives and when
                        fused with games there is no better way to learn it.
                    </p>
                    <p>
                        AI Odyssey is going to be on March 24 and March 25,
                        2023. It will discuss AI and its functions in a fun,
                        creative and innovative way.
                    </p>
                    <p>
                        AI Odyssey is a junction of games where you can dive
                        into the creative, theoretical, applicable, visionary
                        and innovative ways of Artificial Intelligence.
                    </p>
                </div>
                <div className={classes.images}>
                    <img src={image} />
                </div>
            </div>
        </div>
    );
};

export default About;
