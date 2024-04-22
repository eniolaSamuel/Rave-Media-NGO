import React from "react";
import AboutContent from "../assets/image/svg/about-Us-Background.svg"
import MissionContent from "../assets/image/svg/about-class-education.svg"
import VisionContent from "../assets/image/svg/vision-kids.svg"
import EducationIcon from "../assets/icons/svg/education-icon.svg"
import EquityIcon from "../assets/icons/svg/equity-icon.svg"
import EmpowermentIcon from "../assets/icons/svg/empowerment-icon.svg"
import CollaborationIcon from "../assets/icons/svg/collaboration-icon.svg"
import "../styles/About.css"


export const AboutUs = () => {
    return(
        <div className="about-us-frame">
                <div className="about-us-sub-frame-content">
                    <div className="about-content">
                        <img src={AboutContent} alt={AboutContent}/>
                        <div className="about-content-text">
                            <h1> about us</h1>
                            <p>Welcome to RAGE - Rights and Aid Group for Education.
                                Based in Abuja, Nigeria, RAGE is a non-governmental
                                organization committed to providing quality education to children across the nation.<br/>
                            </p>
                        </div>
                    </div>

                    <div className="mission-content">
                        <div className="mission-content-text">
                            <h1> our mission </h1>
                            <p>At RAGE, our mission is clear: to empower Nigerian children through education.
                                We are passionate about ensuring that every child, regardless of their
                                socio-economic background, has access to quality learning opportunities.
                                Our goal is ambitious yet achievable -
                                we aim to provide education to one million Nigerian children
                                between the ages of 3 and 17.<br/>
                            </p>
                        </div>
                        <img src={MissionContent} alt={MissionContent}/>
                    </div>


                    <div className="vision-content">
                        <img src={VisionContent} alt={VisionContent}/>
                        <div className="vision-content-text">
                            <h1> our vision </h1>
                            <p>We envision a future where every child in Nigeria has the opportunity
                                to reach their full potential through education.
                                By equipping children with the knowledge and skills they need to succeed,
                                we believe we can create a brighter future for our nation.<br/>
                            </p>
                        </div>
                    </div>


                    <div className="value-content">
                        <div className="value-content-text">
                            <h1> our values </h1>
                            <p>
                                <img src={EducationIcon} alt={EducationIcon}/>
                                Education: We believe that education is a fundamental human right
                                and the key to breaking the cycle of poverty.<br/>
                            </p>

                            <p>
                                <img src={EquityIcon} alt={EquityIcon}/>
                                Equality: We are committed to promoting equal
                                access to education for all children,
                                regardless of their background or circumstances.<br/>
                            </p>

                            <p>
                                <img src={EmpowermentIcon} alt={EmpowermentIcon}/>
                                Empowerment: We empower children to take control of their
                                futures and become agents of change in their communities.<br/>
                            </p>

                            <p>
                                <img src={CollaborationIcon} alt={CollaborationIcon}/>
                                Collaboration: We work collaboratively with local communities, schools,
                                and partners to maximize our impact and reach more children.<br/>
                            </p>
                        </div>
                    </div>

                </div>
        </div>
    )
}