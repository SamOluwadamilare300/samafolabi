import React from 'react';
import "./about.css";
import AboutImg from "../../assets/Sam Profile.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from './Info';




const About = () => {
  return (
   <section className="about section" id="about">
    <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
    
   <div className="about__container container grid">
  <img src={AboutImg} alt="" className='about__img'/>
  
  <div className="about__data">
    <Info/>
    <p className="about__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam blanditiis eos iure architecto at atque
     ad harum fugit doloremque quidem, odio facilis, dolore molestias. Magnam minima qui.
    </p>

    <a download="" href={CV} className="button button--flex">
      <span className="/"></span>
      <svg width="151" height="47" viewBox="0 0 151 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="151" height="47" rx="10" fill="black"/>
<text x="50%" y="50%" text-anchor="middle" fill="white" font-size="12" font-family="Poppins" dy=".3em">Download Brochure</text>
</svg>

    </a>
  </div>



   </div>
   </section>
  )
}

export default About