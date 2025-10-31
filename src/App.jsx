import React, { useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Container from './Components/Container';
import About from './Components/About';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration (in ms)
      once: true,     // only run animation once
      offset: 50,    // start animation 100px before element is in view
    });
  }, []);

  return (
    <div className='bg-base-100 text-base-content min-h-screen'>
      <Header></Header>
      
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