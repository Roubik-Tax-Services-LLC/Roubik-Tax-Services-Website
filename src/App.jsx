import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import About from "./About";
import Services from "./Services";
import Questionaire from "./Questionaire";
import Reviews from "./Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/questionaire" element={<Questionaire />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
