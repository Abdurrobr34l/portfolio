import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Container from "./Components/Container";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fade, setFade] = useState(false);

useEffect(() => {
  Aos.init({ duration: 1000, once: true, offset: 50 });

  const timer = setTimeout(() => {
    setFade(true); // trigger fade
    setTimeout(() => setLoading(false), 500); // remove loader after fade
  }, 1000);

  return () => clearTimeout(timer);
}, []);

  if (loading) return <Loader fade={fade } />; // Show loader first

  return (
        <div className="bg-base-100 text-base-content min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <AnimatedCursor
  innerSize={8}
  outerSize={40}
  color={darkMode ? "255, 255, 255" : "55, 42, 172"}
  outerAlpha={0.3}
  innerScale={0.7}
  outerScale={2}
  clickables={["a", "button", "input", "textarea", "select", "label"]}
/>

      <main>
        <Container>
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
        </Container>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default App;
