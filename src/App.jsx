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

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 50,
    });

    // Simulate loading time (or use fetch to wait for data)
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // Show loader first

  return (
        <div className="bg-base-100 text-base-content min-h-screen">
      <Header></Header>
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        // color="3, 7, 18"
        color="55, 42, 172"
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
