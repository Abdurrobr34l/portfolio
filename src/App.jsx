import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Container from './Components/Container';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='bg-base-100 text-base-content min-h-screen'>
      <Header></Header>
      
      <main>
        <Container>
          <Hero></Hero>
          <About></About>
        </Container>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default App;