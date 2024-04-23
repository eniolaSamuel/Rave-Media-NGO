import {Navbar} from "./NavBar";
import {HomePage} from "./HomePage";
import {AboutUs} from "./About";
import {DonationProcess} from "./DonationProcess";
import Footer from "./Footer";

export const RavePlatform = () => {
    return(
        <div>
            <Navbar/>
            <HomePage />
            <DonationProcess />
            <AboutUs />
            <Footer />
        </div>
    )
}