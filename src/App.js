import "./App.css";
// import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Presenters from "./Components/Presenters";
import About from "./Components/About";

function App() {
    return (
        <div>
            {/* <Header /> */}
            <LandingPage />
            <Presenters />
            <About />
        </div>
    );
}

export default App;
