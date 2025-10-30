import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Container from './Components/Container';

const App = () => {
  return (
    <div className='bg-base-100 text-base-content min-h-screen'>
      <Header></Header>
      
      <main>
        <Container>
          <Hero></Hero>
        </Container>
      </main>
    </div>
  );
};

export default App;