"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const HomeSection = () => {
  return (
    <section id="home" className="relative">
      <Navbar />
      <Hero />
    </section>
  );
};

export default HomeSection;
