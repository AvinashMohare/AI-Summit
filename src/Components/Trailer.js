import React from "react";

import classes from "../Assets/Styles/Trailer.module.scss";

const Trailer = () => {
    return (
        <div className={classes.rootTrailer}>
            <div className={classes.video}>
                <iframe
                    // width="560"
                    // height="315"
                    src="https://www.youtube.com/embed/Gv2beqTqFNA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </div>

            <div className={classes.details}>
                <div className={classes.date}>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16Z"
                            fill="#ffffff"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4C19.7614 4 22 6.23858 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.23858 4.23858 4 7 4V3C7 2.44772 7.44772 2 8 2ZM7 6C5.34315 6 4 7.34315 4 9V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V9C20 7.34315 18.6569 6 17 6C17 6.55229 16.5523 7 16 7C15.4477 7 15 6.55229 15 6H9C9 6.55229 8.55228 7 8 7C7.44772 7 7 6.55229 7 6Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <div>
                        <p>31 March - 1 April</p>
                    </div>
                </div>

                {/* <div className={classes.line}></div> */}

                <div className={classes.time}>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 8V12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div>
                        <p>10 AM - 5 PM (IST) </p>
                    </div>
                </div>

                <div className={classes.lineContainer}>
                    <div className={classes.line}></div>
                </div>

                <div className={classes.venue}>
                    <svg
                        fill="#ffffff"
                        height="20px"
                        width="20px"
                        viewBox="0 0 297 297"
                    >
                        <path
                            d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
	c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
	C259.253,49.703,209.57,0,148.5,0z M148.5,79.693c16.964,0,30.765,13.953,30.765,31.104c0,17.151-13.801,31.104-30.765,31.104
	c-16.964,0-30.765-13.953-30.765-31.104C117.735,93.646,131.536,79.693,148.5,79.693z"
                        />
                    </svg>
                    <div>
                        <p>G.H. Raisoni College of Engineering, Nagpur</p>
                        {/* <p>3rd Floor</p>
                        <p>F-21</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
