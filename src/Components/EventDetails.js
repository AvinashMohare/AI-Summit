import React from "react";

import styles from "../Assets/Styles/EventDetails.module.scss";
import Heading from "./Heading";

import innovation from "../Assets/Images/Events/Innovation.png";
import treasurehunt from "../Assets/Images/Events/TreasureHunt.png";
import aiwizard from "../Assets/Images/Events/AiWizard.png";
import mindscape from "../Assets/Images/Events/Mindscape.jpeg";
import smartplayoffs from "../Assets/Images/Events/SmartPlayofs.png";
// import innovationjunction from "../Assets/Images/Events/InnovationJunction.mp4";
import goalgo from "../Assets/Images/Events/GoAlgo.png";

const EventsInfoData = [
    {
        id: 1,
        name: "Scan & Hunt",
        desc: "Scan & Hunt is an intriguing game that wakes up the detective inside of you as you go on searching answers for the riddles.Each team of three to five members will compete with one another by unravelling the mystery inside of a QR code in three rounds adding more mystery and complexity than the previous rounds.",
        img: treasurehunt,
        url: "",
    },
    {
        id: 1,
        name: "AI Wizard",
        desc: "A wizard is the one who has magical powers. Are you the Dumbledore of AI? Let's find it out in our exciting game of AI Wizard. A member from each team will be competing with the other teams in three rounds ranging from their creativity in AI, their proficiency in AI, to their vision in AI.",
        img: aiwizard,
        url: "",
    },
    {
        id: 1,
        name: "Mindscape",
        desc: "The most inquisitive competition that will electrify your inventive minds with mind twisting quizzes is here. Each team consisting of three to four members will compete against each other in this competition which will be held in three rounds with each round more exciting and challenging than the previous one.",
        img: mindscape,
        url: "",
    },
    {
        id: 1,
        name: "Smart Playoffs",
        desc: "Darwin’s theory about survival of the fittest also applies in the tech world where the smartest one is the last of us. The Smart Playoffs is a virtual ethical implication of AI in humans. In this valiant battle get ready to sharpen your mental ability and problem solving skills, followed by a creative brainstorm showing your photographic and designing skills and then a  rapid fire round involving the latest trends in the field of AI.",
        img: smartplayoffs,
        url: "",
    },
    {
        id: 1,
        name: "Innovation Junction",
        desc: "Introducing Innovation Junction, the game that promises to unlock your creativity and imagination like never before! Get ready to generate game-changing ideas and tap into your inner innovator with this ultimate idea-generation experience. In this fast-paced game, players will be challenged to come up with innovative solutions to a variety of prompts and scenarios, from business challenges to social issues and beyond. With each round, players will have a limited amount of time to brainstorm and pitch their ideas. ",
        img: innovation,
        url: "",
    },
    {
        id: 1,
        name: "Go Algo",
        desc: "This competition is for anyone with a passion for programming and are ready to unleash their programming prowess and take on the ultimate challenge in our thrilling algorithm game! The competition is divided into three rounds where shuffled steps of the algorithm will be provided and one teammate must correct the sequence while the others complete the code. It's a race against the clock, and teamwork is the key to success!",
        img: goalgo,
        url: "",
    },
];

const EventDetails = () => {
    return (
        <div className={styles.eventDetailsRoot}>
            <Heading backText="Events">Events</Heading>

            <div className={styles.eventsDetailsMain}>
                {EventsInfoData.map((eventInfo) => {
                    return (
                        <a href={eventInfo.url} target="_blank">
                            <div className={styles.eventCard}>
                                <img
                                    className={styles.eventImg}
                                    src={eventInfo.img}
                                />

                                <p className={styles.eventTitle}>
                                    {eventInfo.name}
                                </p>

                                <p className={styles.eventDescription}>
                                    {eventInfo.desc}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default EventDetails;
