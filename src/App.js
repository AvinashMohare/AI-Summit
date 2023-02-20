import "./App.css";
// import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Presenters from "./Components/Presenters";
import About from "./Components/About";
import Glimpses from "./Components/Glimpses";

function App() {
    return (
        <div>
            {/* <Header /> */}
            <LandingPage />
            <Presenters />
            <About />
            <Glimpses />
        </div>
    );
}

export default App;
