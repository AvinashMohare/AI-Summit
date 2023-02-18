import image from "../Assets/LandingPageImg.jpg";
import Header from "./Header";
import classes from "./LandingPage.module.scss";

const LandingPage = () => {
    return (
        <div className={classes.imageContainer}>
            <Header />

            {/* <div className={classes.img}></div> */}

            {/* <img src={image} /> */}

            <div className={classes.contentWrapper}>
                <div className={classes.imageText}>
                    <p className={classes.line1}>International</p>
                    <p className={classes.line2}>AI Summit 4.0</p>
                </div>

                <div className={classes.regButton}>
                    <a href="https://imaginecup.microsoft.com/en-us/india">
                        Register Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
