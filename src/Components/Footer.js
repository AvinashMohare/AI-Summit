import React from "react";

import classes from "../Assets/Styles/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin eget tortor risus. Nulla porttitor
                            accumsan tincidunt. Nulla quis lorem ut libero
                            malesuada feugiat.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>G.H. Raisoni College of Engineering, Nagpur</p>
                        {/* <p>Phone: 555-555-5555</p> */}
                        <p>Email: aiodyssey@ghrce.raisoni.net</p>
                    </div>
                    {/* <div className="col-md-4">
                        <h3>Connect With Us</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    <div className="regButton">
                        <a href="https://imaginecup.microsoft.com/en-us/india">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
