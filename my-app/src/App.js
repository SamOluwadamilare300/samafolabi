import React from 'react';
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/skills/Skills'
import Services from './Components/services/Services';
import Qualification from './Components/qualification/Qualification';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';



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
        <Testimonials/>
        <Contact/>
        <Footer/>
      
      </main>
    </>
  )
}

export default App;

