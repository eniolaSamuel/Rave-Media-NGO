import '../styles/NavBar.css'
import raveLogo from "../assets/image/svg/raveLogo.svg";
import React from "react";
import {useNavigate} from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick =()=>{
        navigate("/volunteer-sign-up")
    }

    let links = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Donate", link: "/" },
    ];

    return (
            <div className="navigation-main-frame">
                <div className="rave-logo-frame">
                    <img src={raveLogo} alt={raveLogo}/>
                </div>
                <nav className="navigation-frame">
                    <div className="link-frame">
                        <ul className="nav-link">
                            <li className="nav-link-detail">
                                <a href="#home">Home</a>
                            </li>
                            <li className="nav-link-detail">
                                <a href="#about">About</a>
                            </li>
                            <li className="nav-link-detail">
                                <a href="#donate">Donate</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button id="signUp-button"  onClick={handleButtonClick}>volunteer</button>
                    </div>
                </nav>
            </div>
    )
}
