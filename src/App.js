import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
