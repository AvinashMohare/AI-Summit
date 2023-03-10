import React from "react";

import Image from "../Assets/Images/Glimpses/h1.JPG";

import styles from "../Assets/Styles/Speakers.module.scss";
import Heading from "./Heading";

const SpeakersList = [
    {
        image: "https://img.freepik.com/free-vector/public-speaking-avatar_98292-6629.jpg?w=740&t=st=1678262099~exp=1678262699~hmac=6c36b3a1136fd429c80f7442e024589a18fce3cccfc257e85bb9a173300cc5f4",
        name: "Coming Soon",
        about: "Coming Soon",
        url: "https://linkedin.com",
        co: "Coming Soon",
    },
    {
        image: "https://img.freepik.com/free-vector/public-speaking-avatar_98292-6629.jpg?w=740&t=st=1678262099~exp=1678262699~hmac=6c36b3a1136fd429c80f7442e024589a18fce3cccfc257e85bb9a173300cc5f4",
        name: "Coming Soon",
        about: "Coming Soon",
        url: "https://linkedin.com",
        co: "Coming Soon",
    },
    {
        image: "https://img.freepik.com/free-vector/public-speaking-avatar_98292-6629.jpg?w=740&t=st=1678262099~exp=1678262699~hmac=6c36b3a1136fd429c80f7442e024589a18fce3cccfc257e85bb9a173300cc5f4",
        name: "Coming Soon",
        about: "Coming Soon",
        url: "https://linkedin.com",
        co: "Coming Soon",
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
        <div id="speakers" className={styles.speakersRoot}>
            <Heading backText="Speakers">Speakers</Heading>

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
