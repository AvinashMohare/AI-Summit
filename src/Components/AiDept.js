import React from "react";

import image from "../Assets/Images/About-us.webp";
import classes from "../Assets/Styles/About.module.scss";
import Heading from "./Heading";

const AiDept = () => {
    return (
        <div className={classes.rootAbout}>
            <Heading backText="About AI">About AI Department</Heading>

            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <p>
                        The Department of Artificial Intelligence of G H Raisoni
                        College of Engineering was established in 2019. B.Tech.
                        in Artificial Intelligence is an undergraduate programme
                        with advanced learning solutions imparting knowledge of
                        advanced innovations like machine learning, often called
                        deep learning and artificial intelligence.
                    </p>
                    <p>
                        This specialisation is designed to enable students to
                        build intelligent machines, software, or applications
                        with a cutting-edge combination of machine learning,
                        analytics and visualisation technologies. This programme
                        discusses AI methods based in different fields,
                        including neural networks, signal processing, Natural
                        language processing, and data mining, in order to
                        present a unified treatment of machine learning problems
                        and solutions.
                    </p>
                    {/* <p>
                        AI Odyssey is a junction of games where you can dive
                        into the creative, theoretical, applicable, visionary
                        and innovative ways of Artificial Intelligence.
                    </p> */}
                </div>

                <div className={classes.images}>
                    <img
                        src={
                            "https://images.unsplash.com/photo-1678031523778-7486bde21335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80"
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default AiDept;
