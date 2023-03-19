import React from "react";

import Heading from "./Heading";

import classes from "../Assets/Styles/Glimpses.module.scss";

import img1 from "../Assets/Images/Glimpses/glimpse1.jpg";
import img2 from "../Assets/Images/Glimpses/glimpse2.jpg";
import img3 from "../Assets/Images/Glimpses/glimpse3.jpg";
import img4 from "../Assets/Images/Glimpses/glimpse4.jpg";
import img5 from "../Assets/Images/Glimpses/glimpse5.jpg";
import img6 from "../Assets/Images/Glimpses/glimpse6.jpg";
import img7 from "../Assets/Images/Glimpses/glimpse7.jpg";
import img8 from "../Assets/Images/Glimpses/glimpse8.jpg";
import img9 from "../Assets/Images/Glimpses/glimpse9.jpg";
import img10 from "../Assets/Images/Glimpses/glimpse10.jpg";

const IMAGE_LIST = [
    { url: img1, className: classes.horizontal },
    { url: img3, className: classes.horizontal },
    { url: img2, className: classes.vertical },
    { url: img4, className: classes.normal },
    { url: img5, className: classes.horizontal },
    { url: img6, className: classes.vertical },
    { url: img7, className: classes.normal },
    { url: img8, className: classes.normal },
    { url: img10, className: classes.normal },
    { url: img9, className: classes.horizontal },
];

const CLASSES = [classes.vertical, classes.horizontal, classes.normal];

const Glimpses = (props) => {
    return (
        <div className={classes.rootGlimpses}>
            <Heading backText="Glimpses">Glimpses</Heading>

            <div className={classes.imageGallery}>
                {IMAGE_LIST.map((image, _) => {
                    return (
                        <div
                            key={image + _}
                            className={`${classes.image} ${image.className}`}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        ></div>
                    );
                })}
            </div>
            <div id="timeline"></div>
        </div>
    );
};

export default Glimpses;
