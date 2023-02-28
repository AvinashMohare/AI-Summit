import { useEffect, useState, useRef } from "react";

import "./App.css";
import "aos/dist/aos.css";

import aos from "aos";

// import Header from "./Components/Header";
import Presenters from "./Components/Presenters";
import About from "./Components/About";
import Glimpses from "./Components/Glimpses";
import Events from "./Components/Events";
import Sponsors from "./Components/Sponsors";
import Speakers from "./Components/Speakers";
import AnimatedLanding from "./Components/AnimatedLanding";
import Timeline from "./Components/Timeline";

function App() {
    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            initClassName: "sb-initial-anim",
            once: false,
            mirror: true,
            offset: 50,
            debounceDelay: 100,
            throttleDelay: 100,
        });
    }, []);

    return (
        <div className="body">
            {/* <Header /> */}
            <AnimatedLanding />
            {/* <Presenters /> */}
            <About />
            <Glimpses />
            <Events />
            <Speakers />

            <Sponsors />

            {/* <Timeline /> */}
            {/* <EventsInfo /> */}
        </div>
    );
}

export default App;
