import React from "react";
import Image from "./components/header/header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
      <Image />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
