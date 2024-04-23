import React from "react";
import HomeImage from "../assets/image/svg/home-Page-Background.svg"
import DonationBox from "../assets/icons/svg/donate-icon.svg"
import VolunteerHands from "../assets/icons/svg/volunteer-icon.svg"
import "../styles/HomePage.css"
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    const handleSignUpClick =()=>{
        navigate("/volunteer-sign-up")
    }

    const handleDonateClick = () =>{
        navigate("/donation-page")
    }
    return(
        <div className="home-page-main-frame" id="home">
            <div className="intro-frame">
                <div className="text-box">
                    <h1>Welcome to rage - Rights and Aid Group for Education</h1>
                    <p>At RAGE, we're dedicated to providing quality education to underprivileged children.
                        Through scholarships, tutoring, and community partnerships,
                        we empower kids to build brighter futures. Join us in making a difference today.</p>
                </div>
                <div className="text-button">
                    <button className="sign-up-button-big" onClick={handleDonateClick}> donate now
                        <img src={DonationBox} alt={DonationBox}/>
                    </button>
                    <button className="sign-up-button-big" onClick={handleSignUpClick}> be a volunteer
                        <img src={VolunteerHands} alt={VolunteerHands}/>
                    </button>
                </div>
            </div>

            <div className="image-frame">
                <img src={HomeImage} alt={HomeImage}/>
            </div>
        </div>
    )
}