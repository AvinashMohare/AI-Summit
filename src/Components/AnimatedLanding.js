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
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    baseColor: 0x23407e,
                    // backgroundColor: 0x80a1d,
                    backgroundColor: 0x50523,
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
            <div id="ex" className={classes.a} ref={myRef}>
                <div className={classes.c}></div>
                <Header />
            </div>
            <div className={classes.b}>
                <div className={classes.contentWrapper}>
                    <div className={classes.imageText}>
                        {/* <p className={classes.line1}>International</p> */}
                        <p className={classes.line2}>AI Odyssey</p>
                        <p className={classes.line3}>31 March - 1 April</p>
                    </div>

                    <div className={classes.regButton}>
                        <a
                            href="https://form.typeform.com/to/QCUDC1mO?typeform-source=qrcode-button"
                            target={"_blank"}
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedLanding;
