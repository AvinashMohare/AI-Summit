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
// import Timeline from "./Components/Timeline";
import EventDetails from "./Components/EventDetails";
import LoadingScreen from "./Components/LoadinScreen";
import Footer from "./Components/Footer";

function App() {
    // Loading Screen
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading with a timeout
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    // Animations
    useEffect(() => {
        aos.init({
            duration: 1828.3268,
            initClassName: "sb-initial-anim",
            once: false,
            mirror: true,
            offset: 50,
            debounceDelay: 100,
            throttleDelay: 100,
        });
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="body">
                    <AnimatedLanding />
                    <About />
                    <Glimpses />
                    <Events />
                    <Speakers />
                    <EventDetails />
                    {/* <Sponsors /> */}
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default App;
