

import React from 'react';
import About from "./Components/About/About";
import HomeDefault from "./Components/HomeDefault/HomeDefault";
import Navbar from "./Components/Navbar/Navbar";
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
     
  return (
    <>
       <Navbar/>
      <HomeDefault/>
      <About/> 
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
