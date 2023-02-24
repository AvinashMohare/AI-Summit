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
                        Welcome to the Event AI Summit website! Our summit is a
                        premier conference for AI enthusiasts, innovators, and
                        business leaders who are interested in exploring the
                        latest trends and developments in the world of
                        artificial intelligence. Our mission is to provide a
                        platform for professionals to connect, learn, and share
                        their insights and experiences with each other.
                    </p>
                    <p>
                        At our summit, you can expect to hear from leading
                        experts and pioneers in AI, as well as attend
                        informative workshops and panel discussions on a variety
                        of topics related to artificial intelligence. You'll
                        also have the opportunity to network with like-minded
                        individuals and companies, and explore the latest
                        products and services in the AI industry.
                    </p>
                    <p>
                        We believe that AI has the potential to transform our
                        world and bring about positive change in many different
                        fields, from healthcare to finance to transportation and
                        beyond. Join us at the Event AI Summit to learn more
                        about the latest innovations and to be a part of the
                        conversation about the future of AI.
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
