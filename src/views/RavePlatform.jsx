import {Navbar} from "./NavBar";
import {HomePage} from "./HomePage";
import {AboutUs} from "./About";

export const RavePlatform = () => {
    return(
        <div>
            <Navbar/>
            <HomePage />
            <AboutUs />
        </div>
    )
}