import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

import AboutSection from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactProject from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}
      <ThemeToggle />

      {/*background Effects*/}

      <StarBackground />
      {/*Navbar */}
      <NavBar />
      {/*Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
      {/*Footer */}
    </div>
  );
};

export default Home;
