"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import ValueProposition from "./components/ValueProposition";
import Skills from "./components/Skills";
import ProjectsHomeSection from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <HeroSection />
      <ValueProposition />
      <Skills />
      <ProjectsHomeSection />
      <Experience />
      <Education />
      <Achievements />

    </main>
  );
}
