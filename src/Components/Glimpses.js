import React from "react";
import Heading from "./Heading";

import classes from "../Assets/Styles/Glimpses.module.scss";

// import Image from "../Assets/Images/LandingPageImg.jpg";

const IMAGE_LIST = [
    {
        url: "https://picsum.photos/2000/2000",
        className: classes.horizontal,
    },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.normal },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.normal },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.normal },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.vertical },
    { url: "https://picsum.photos/2000/2000", className: classes.horizontal },
    { url: "https://picsum.photos/2000/2000", className: classes.normal },
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
