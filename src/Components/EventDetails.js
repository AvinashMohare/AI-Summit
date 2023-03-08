import React from "react";

import styles from "../Assets/Styles/EventDetails.module.scss";
import Heading from "./Heading";

import treasurehunt from "../Assets/Images/Events/TreasureHunt.png";
import aiwizard from "../Assets/Images/Events/AiWIzard.png";
import mindscape from "../Assets/Images/Events/Mindscape.jpeg";
import smartplayoffs from "../Assets/Images/Events/SmartPlayofs.png";

const EventsInfoData = [
    {
        id: 1,
        name: "Scan & Hunt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos culpa, totam voluptatibus rerum hic ea recusandae exercitationem, earum harum ex magni vitae provident suscipit, ipsam odio neque repudiandae! Cumque.",
        img: treasurehunt,
        url: "https://drive.google.com/file/d/1-Ka_06a0kSDklvogjf-VdCYXeo9Cpxwm/view",
    },
    {
        id: 1,
        name: "AI Wizard",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos culpa, totam voluptatibus rerum hic ea recusandae exercitationem, earum harum ex magni vitae provident suscipit, ipsam odio neque repudiandae! Cumque.",
        img: aiwizard,
        url: "https://onedrive.live.com/?authkey=%21AGls%2DbL39uUS1eQ&cid=4DFAFCD7B14B5170&id=4DFAFCD7B14B5170%211471&parId=4DFAFCD7B14B5170%211466&o=OneUp",
    },
    {
        id: 1,
        name: "Mindscape",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos culpa, totam voluptatibus rerum hic ea recusandae exercitationem, earum harum ex magni vitae provident suscipit, ipsam odio neque repudiandae! Cumque.",
        img: mindscape,
        url: "",
    },
    {
        id: 1,
        name: "Smart Playoffs",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos culpa, totam voluptatibus rerum hic ea recusandae exercitationem, earum harum ex magni vitae provident suscipit, ipsam odio neque repudiandae! Cumque.",
        img: smartplayoffs,
        url: "",
    },
    {
        id: 1,
        name: "Treasure Hunt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos culpa, totam voluptatibus rerum hic ea recusandae exercitationem, earum harum ex magni vitae provident suscipit, ipsam odio neque repudiandae! Cumque.",
        img: treasurehunt,
        url: "",
    },
    {
        id: 1,
        name: "Treasure Hunt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos culpa, totam voluptatibus rerum hic ea recusandae exercitationem, earum harum ex magni vitae provident suscipit, ipsam odio neque repudiandae! Cumque.",
        img: treasurehunt,
        url: "",
    },
];

const EventDetails = () => {
    return (
        <div className={styles.eventDetailsRoot}>
            <Heading>Events</Heading>

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
