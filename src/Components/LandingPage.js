import image from "../Assets/demo.png";
import classes from "./LandingPage.module.scss";

const LandingPage = () => {
    return (
        <div className={classes.LandingPage}>
            <img src={image} alt="" />

            <div className={classes.regButton}>
                <a href="https://imaginecup.microsoft.com/en-us/india">
                    Register Now
                </a>
            </div>
        </div>
    );
};

export default LandingPage;
