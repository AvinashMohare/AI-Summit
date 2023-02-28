import React from "react";

import Image from "../Assets/Images/Glimpses/h1.JPG";

import styles from "../Assets/Styles/Speakers.module.scss";
import Heading from "./Heading";

const SpeakersList = [
    {
        image: "https://avatars.githubusercontent.com/u/83494663?v=4",
        name: "Avinash Mohare",
        about: "I’m currently working on Machine Learning, I’m looking to collaborate on Web development",
        url: "https://linkedin.com/in/sobhanbera",
        co: "Avinash",
    },
    {
        image: "https://avatars.githubusercontent.com/u/50291544?v=4",
        name: "Sobhan Bera",
        about: "With extensive experience in both web and android development along with DevOps and Linux Ricing.",
        url: "https://linkedin.com/in/sobhanbera",
        co: "Sobyte",
    },
    {
        image: "https://avatars.githubusercontent.com/u/83494663?v=4",
        name: "Avinash Mohare",
        about: "I’m currently working on Machine Learning, I’m looking to collaborate on Web development",
        url: "https://linkedin.com/in/sobhanbera",
        co: "Avinash",
    },
    // {
    //     image: "https://avatars.githubusercontent.com/u/50291544?v=4",
    //     name: "Sobhan Bera",
    //     about: "With extensive experience in both web and android development along with DevOps and Linux Ricing.",
    //     url: "https://linkedin.com/in/sobhanbera",
    //     co: "Sobyte",
    // },
];

const Speakers = () => {
    return (
        <div className={styles.speakersRoot}>
            <Heading>Speakers</Heading>

            <div className={styles.speakersContainer}>
                {SpeakersList.map((speaker) => {
                    return (
                        <div className={styles.speakerCard} data-aos="fade-up">
                            <img src={speaker.image} data-aos="fade-up" />

                            <p
                                className={styles.speakerName}
                                data-aos="fade-up"
                            >
                                {speaker.name}
                            </p>

                            <p className={styles.speakerCo} data-aos="fade-up">
                                {speaker.co}
                            </p>

                            <p
                                className={styles.aboutSpeaker}
                                data-aos="fade-up"
                            >
                                {speaker.about}
                            </p>

                            <p className={styles.speakerURL} data-aos="fade-up">
                                <a href={speaker.url}>Know More</a>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Speakers;
