import '../styles/NavBar.css'
import raveLogo from "";
import React from "react";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick =()=>{
        navigate("")
    }

    return (
            <div className="navigation-main-frame">
                <div className="rave-logo-frame">
                    <img src={raveLogo} alt={raveLogo}/>
                </div>
                <nav className="navigation-frame">
                    <div className="link-frame">
                        <ul className="link-bars">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Donate</a></li>
                        </ul>
                    </div>
                    <div>
                        <button id="signUp-button" onClick={handleButtonClick}>Sign Up</button>
                    </div>
                </nav>
            </div>
    )
}
