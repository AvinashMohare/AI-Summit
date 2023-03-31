import React from "react";

// import Image from "../Assets/Images/Glimpses/n7.JPG";

import styles from "../Assets/Styles/Speakers.module.scss";
import Heading from "./Heading";

const SpeakersList = [
    {
        // image: Image,
        image: "https://media.licdn.com/dms/image/C5103AQFP6ESvGnmU3A/profile-displayphoto-shrink_400_400/0/1577369922716?e=1684972800&v=beta&t=aGYb-W2P-XJCwapPZl0QZRbs7hyWDaOuw_kFfgyRLdc",
        name: "Aditya Rane",
        // about: "Coming Soon",
        url: "https://www.linkedin.com/in/aditya-rane/",
        co: "Google",
    },
    {
        image: "https://media.licdn.com/dms/image/C5603AQGEV-kzawPxjw/profile-displayphoto-shrink_400_400/0/1588602102622?e=1684972800&v=beta&t=9I2VAjrdk2UTm4auncoJMo8Vfsg4gxsubut9LcXNG5Q",
        name: "Aditya Jyoti Paul",
        // about: "Coming Soon",
        url: "https://www.linkedin.com/in/phreakyphoenix/",
        co: "ReflectiveAI",
    },
    {
        image: "https://media.licdn.com/dms/image/C4E03AQHy74cQXZU5Nw/profile-displayphoto-shrink_400_400/0/1591702102131?e=1685577600&v=beta&t=f626ajjuV6G7DP3ubH18L_i1Yu1BPVnFKpLrQs8ukaQ",
        name: "Hemant Kshirsagar",
        // about: "Coming Soon",
        url: "https://www.linkedin.com/in/hemant-kshirsagar-31796279/",
        co: "Kizora Software",
    },
    {
        image: "https://media.licdn.com/dms/image/D4D03AQFgzlVi276ymw/profile-displayphoto-shrink_400_400/0/1665824209290?e=1685577600&v=beta&t=5jvme2tSsC9crfGCqJO1oVIp30MhN03wLzResyef6I0",
        name: "Dr Latesh Bhagat ",
        // about: "Coming Soon",
        url: "https://www.linkedin.com/in/dr-latesh-bhagat-malik-b22811a/",
        co: "Associate Professor, GCOEN",
    },
    {
        image: "https://media.licdn.com/dms/image/C5603AQHA5qCse4ZdrQ/profile-displayphoto-shrink_400_400/0/1658596566056?e=1685577600&v=beta&t=iPDfTUfRJz8Souy-DzhiTp6sfIBtOk89w4ZCykYNlx0",
        name: "Aditya Bobde",
        // about: "Coming Soon",
        url: "https://www.linkedin.com/in/aditya-bobde/",
        co: "Research Intern, ISB",
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

                            {/* <p
                                className={styles.aboutSpeaker}
                                data-aos="fade-up"
                            >
                                {speaker.about}
                            </p> */}

                            <p className={styles.speakerURL} data-aos="fade-up">
                                <a href={speaker.url} target={"_blank"}>
                                    Connect with Me
                                </a>
                            </p>
                        </div>
                    );
                })}
            </div>
            <div id="events"></div>
        </div>
    );
};

export default Speakers;
