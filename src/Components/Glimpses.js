import React from "react";

import Heading from "./Heading";

import classes from "../Assets/Styles/Glimpses.module.scss";

import img1 from "../Assets/Images/Glimpses/1.png";
import img2 from "../Assets/Images/Glimpses/2.jpg";
import img3 from "../Assets/Images/Glimpses/3.jpg";
import img4 from "../Assets/Images/Glimpses/4.jpg";
import img5 from "../Assets/Images/Glimpses/h5.jpg";
import img6 from "../Assets/Images/Glimpses/v6.jpg";
import img7 from "../Assets/Images/Glimpses/n7.jpg";
import img8 from "../Assets/Images/Glimpses/n8.jpg";
import img9 from "../Assets/Images/Glimpses/h9.jpg";
import img10 from "../Assets/Images/Glimpses/n10.jpg";

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
