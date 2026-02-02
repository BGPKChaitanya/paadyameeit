import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";

import ScrollToTop from "./ScrolltoTop";
import Loading from "./pages/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Career = lazy(() => import("./pages/Career/Career"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const History = lazy(() => import("./pages/History/History"));
const UID = lazy(() => import("./pages/Services/UID"));
const CDS = lazy(() => import("./pages/Services/CDS"));
const Technologies = lazy(() => import("./pages/Services/Softwareservices"));
const Projects = lazy(() => import("./pages/Projects/projects"));
const Projectsitem = lazy(() => import("./pages/Projects/projectitem"));

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
          <Route path="/uid" element={<UID />} />
          <Route path="/construction-design-services" element={<CDS />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projectsitem />} />
          {/* <Route path="/load" element={<Loading />} /> */}
        </Routes>
      </Suspense>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
