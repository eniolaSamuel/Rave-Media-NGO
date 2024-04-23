import { BrowserRouter, Routes, Route } from "react-router-dom";
import {RavePlatform} from "./views/RavePlatform";
import {Navbar} from "./views/NavBar";
import {HomePage} from "./views/HomePage";
import {AboutUs} from "./views/About";
import {DonationProcess} from "./views/DonationProcess";
import VolunteerSignUp from "./views/VolunteerSignUp";
import DonationPage from "./views/Donation";
import Footer from "./views/Footer";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RavePlatform />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/donate-process" element={<DonationProcess />} />
            <Route path="/volunteer-sign-up" element={<VolunteerSignUp />} />
            <Route path="/donation-page" element={<DonationPage />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
