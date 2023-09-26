import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import About from "./About";
import Services from "./Services";
import Questionaire from "./Questionaire";
import Footer from "./components/Footer";

function NotFound() {
  return (
    <div className="mx-4 mt-32 flex h-screen flex-col items-center justify-start gap-12 text-xl sm:mx-8 md:text-4xl">
      <h1 className="text-center">404 - Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <p className="text-center">
        Go back to the{" "}
        <Link to="/" className="text-logoBlue underline hover:text-blue-700">
          homepage
        </Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/questionaire" element={<Questionaire />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
