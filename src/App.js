// import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Educations from "./views/Education";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Educations />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
