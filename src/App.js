import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Educations from "./views/Education";
import Projects from "./views/Projects";
import { ThemeProvider } from "./themeProvider";
import Experience from "./views/Experience";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
