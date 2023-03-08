import React, { useState, useEffect, useRef } from "react";
import Halo from "vanta/dist/vanta.halo.min";

import classes from "../Assets/Styles/AnimatedLanding.module.scss";
import Header from "./Header";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const AnimatedLanding = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                Halo({
                    el: myRef.current,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    // console.log(myRef);
    // console.log(vantaEffect);

    return (
        <div className={classes.main}>
            <div className={classes.a} ref={myRef}>
                <div className={classes.c}></div>
                {/* <Header /> */}
            </div>
            <div className={classes.b}>
                <div className={classes.contentWrapper}>
                    <div className={classes.imageText}>
                        {/* <p className={classes.line1}>International</p> */}
                        <p className={classes.line2}>AI Odyssey</p>
                    </div>

                    <div className={classes.regButton}>
                        <a href="https://form.typeform.com/to/QCUDC1mO?typeform-source=qrcode-button">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedLanding;
