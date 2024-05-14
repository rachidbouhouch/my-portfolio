import "./App.css";
import Hero from "./Components/Hero";
import Logos from "./Components/Logos";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <div className="relative bg-color">
        <div className="relative">
          <Hero />
          <Logos />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  );
}

export default App;
