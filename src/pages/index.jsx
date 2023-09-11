import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import { homeDetailObj } from "../components/HeroSection/Data";
import AboutSection from "../components/AboutSection";
import { AboutSectionObj } from "../components/AboutSection/Data";
import Projects from "../components/projectsSection";
import ContactSection from "../components/ContactSection";
import { ContactSectionObj } from "../components/ContactSection/Data";
import Footer from "../components/Footer";
import { FooterDetailObj } from "../components/Footer/Data";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection {...homeDetailObj}/>
      <AboutSection {...AboutSectionObj}/>
      <Projects />
      <ContactSection {...ContactSectionObj}/>
      <Footer {...FooterDetailObj}/>
    </>
  );
};

export default Home;