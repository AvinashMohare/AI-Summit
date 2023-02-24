import "./App.css";
// import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Presenters from "./Components/Presenters";
import About from "./Components/About";
import Glimpses from "./Components/Glimpses";
import Events from "./Components/Events";
import Sponsors from "./Components/Sponsors";

function App() {
    return (
        <div>
            {/* <Header /> */}
            <LandingPage />
            <Presenters />
            <About />
            <Glimpses />
            <Events />
            <Sponsors />
        </div>
    );
}

export default App;
