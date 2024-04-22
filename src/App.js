import { BrowserRouter, Routes, Route } from "react-router-dom";
import {RavePlatform} from "./views/RavePlatform";
import {Navbar} from "./views/NavBar";
import {HomePage} from "./views/HomePage";
import {AboutUs} from "./views/About";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RavePlatform />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
