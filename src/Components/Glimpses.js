import React from "react";

import Heading from "./Heading";

import classes from "../Assets/Styles/Glimpses.module.scss";

import img1 from "../Assets/Images/Glimpses/h1.JPG";
import img2 from "../Assets/Images/Glimpses/2.JPG";
import img3 from "../Assets/Images/Glimpses/3.JPG";
import img4 from "../Assets/Images/Glimpses/4.JPG";
import img5 from "../Assets/Images/Glimpses/h5.JPG";
import img6 from "../Assets/Images/Glimpses/v6.JPG";
import img7 from "../Assets/Images/Glimpses/n7.JPG";
import img8 from "../Assets/Images/Glimpses/n8.JPG";
import img9 from "../Assets/Images/Glimpses/h9.JPG";
import img10 from "../Assets/Images/Glimpses/n10.JPG";

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

    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
    // { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    // { url: "https://picsum.photos/2000/2000", className: classes.normal },
];

const CLASSES = [classes.vertical, classes.horizontal, classes.normal];

const Glimpses = (props) => {
    return (
        <div className={classes.rootGlimpses}>
            <Heading>Glimpses</Heading>

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
        </div>
    );
};

export default Glimpses;
