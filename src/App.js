import { BrowserRouter, Routes, Route } from "react-router-dom";
import {RavePlatform} from "./views/RavePlatform";
import {Navbar} from "./views/NavBar";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RavePlatform />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
