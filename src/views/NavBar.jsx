import '../styles/NavBar.css'
import raveLogo from "../assets/image/svg/raveLogo.svg";
import React from "react";


export const Navbar = () => {

    let links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
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
                            {links.map((link) => (
                                <li key={link.name} className="nav-link-detail">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button id="signUp-button" >volunteer</button>
                    </div>
                </nav>
            </div>
    )
}
