import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React, { createContext, useRef } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const TypewriterResetContext = React.createContext(() => {});

const Index = () => {
  const resetTypewriterRef = useRef(() => {});
  return (
    <TypewriterResetContext.Provider value={() => resetTypewriterRef.current()}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div id="hero">
          <Hero setResetRef={cb => { resetTypewriterRef.current = cb; }} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </TypewriterResetContext.Provider>
  );
};

export default Index;
