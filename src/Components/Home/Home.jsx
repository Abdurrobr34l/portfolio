import React from "react";
import Container from "../Container";
import Hero from "../Hero";
import About from "../About";
import {Skills} from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

const Home = () => {
  return (
    <Container customStyle={"flex flex-col gap-20 xl:gap-32"}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;