import {Navbar} from "./NavBar";
import {HomePage} from "./HomePage";
import {AboutUs} from "./About";
import {DonationProcess} from "./DonationProcess";

export const RavePlatform = () => {
    return(
        <div>
            <Navbar/>
            <HomePage />
            <DonationProcess />
            <AboutUs />
        </div>
    )
}