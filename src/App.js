import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Services from "./pages/Services/Services";
// import Career from "./pages/Career/Career";
// import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./ScrolltoTop";
import Loading from "./pages/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Career = lazy(() => import("./pages/Career/Career"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const History = lazy(() => import("./pages/History/History"));

function App() {
  return (
    <div className="container">
      {/* <BrowserRouter> */}
      <Header />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/load" element={<Loading />} /> */}
        </Routes>
      </Suspense>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
