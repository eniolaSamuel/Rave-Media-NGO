import React from "react";
import HomeImage from "../assets/image/svg/home-Page-Background.svg"
import "../styles/HomePage.css"

export const HomePage = () => {
    return(
        <div className="home-page-main-frame">
            <div className="intro-frame">
                <div className="text-box">
                    <h1>Welcome to RAGE - Rights and Aid Group for Education</h1>
                    <p>At RAGE, we're dedicated to providing quality education to underprivileged children.
                        Through scholarships, tutoring, and community partnerships,
                        we empower kids to build brighter futures. Join us in making a difference today.</p>
                </div>
                <div className="text-button">
                    <button className="sign-up-button-big"></button>
                </div>
            </div>

            <div className="image-frame">
                <img src={HomeImage} alt={HomeImage}/>
            </div>
        </div>
    )
}