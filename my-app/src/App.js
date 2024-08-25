import React from 'react';
import "./App.css";
import Header from './Components/header/header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/skills/Skills'
import Services from './Components/services/Services';
import Qualification from './Components/qualification/Qualification';
// import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';



const App = () => {
  return (
    <>
      <Header />

      <main className='main' >
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        {/* <Testimonials/> */}
        <Contact/>
      
      </main>
    </>
  )
}

export default App;

