import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Achievement from "./components/resume/Achievement";
import Skills from "./components/resume/Skills";
import Education from "./components/resume/Education";

function App() {
  return (
    <div className="w-full h-auto bg-slate-700 text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
       
        <Projects />
        <Skills/>
        <Education/>
        <Achievement/>
        
        <Resume />
        
        <Contact />
        
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
