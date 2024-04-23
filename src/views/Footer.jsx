import "../styles/Footer.css"
import raveLogo from "../assets/image/svg/raveLogo.svg"

const Footer = () =>{
    return(
        <div className="contact-main-frame">
            <div className="inner-frame">
                <img className="inner-frame-logo" src={raveLogo} alt={raveLogo}/>
            </div>
        </div>
    )
}

export default Footer;