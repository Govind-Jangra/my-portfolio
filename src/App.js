import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Achievement from "./components/resume/Achievement";
import Skills from "./components/resume/skills/index";
import Education from "./components/resume/Education";
import SocialLinks from "./components/socialLinks";
import TechStack from "./components/resume/skills/tech-stack";
import Efficiency from "./components/resume/skills/skills";
import Experience from "./components/resume/Experience";
function App() {
  return (
    <div className="w-full h-auto bg-slate-700 text-lightText ">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Experience/>
        <Projects />
        <TechStack/>
        {/* <Efficiency/> */}
        <Education/>
        <Achievement/>
     
        
        <Contact />
        
        <Footer />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
