import React from "react";
import Heading from "./Heading";
import classes from "../Assets/Styles/Sponsors.module.scss";
// import Logo1 from "../Assets/Images/LandingPageImg.jpg";
const Sponsors = () => {
    window.onmessage = (e) => {
        if (e.data.hasOwnProperty("frameHeight")) {
            document.getElementById(
                "iframe-" + e.data.board_token
            ).style.height = `${e.data.frameHeight + 40}px`;
        }
    };

    return (
        <div>
            <iframe
                id="iframe-hyxylkbshcrqr"
                src="https://keepthescore.co/embed/hyxylkbshcrqr/"
                style="width:100%;border:none;"
            ></iframe>
        </div>
    );
};

export default Sponsors;
