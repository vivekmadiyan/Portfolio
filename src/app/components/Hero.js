"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import v3 from "../assets/v3.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vivek_Resume_.pdf"; 
    link.download = "Vivek_Resume_.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 sm:pt-20 md:pt-24 pb-8 font-sans overflow-hidden">
      
      {/* Top Section */}
      <div className="relative flex flex-col items-center text-center mb-10 w-full">
        <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 -translate-x-1/2 flex">
          <div
            className={`flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black border shadow-sm transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Hello!
          </div>
        </div>

        <div className="flex flex-col">
          <div
            className={`text-3xl sm:text-5xl md:text-6xl font-medium text-black transition-all duration-500 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            I&apos;m <span className="text-[#FD853A]">Vivek</span>,
          </div>

          <div
            className={`mt-2 text-3xl sm:text-5xl md:text-7xl font-medium text-black transition-all duration-500 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Full Stack Developer
          </div>
        </div>

        <div
          className={`flex justify-center transition-all duration-500 delay-[400ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div
            onClick={handleDownload}
            className="flex items-center border rounded-full px-6 py-2 mt-4 text-gray-800 hover:bg-gray-100 transition cursor-pointer"
          >
            My Resume
            <FaDownload size={15} className="ml-2" />
          </div>
        </div>
      </div>

      {/* Image and CTA */}
      <div
        className={`w-full max-w-3xl transition-all duration-700 delay-[500ms] ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative flex justify-center">
          <img
            src={v3.src}
            alt="Avatar of Vivek"
            className="w-full max-w-[800px] h-auto mx-auto"
          />
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10 flex items-center bg-transparent rounded-full border border-white p-1 pr-0 group cursor-pointer transition-transform duration-300 hover:scale-105">
            
            <div
              onClick={() => scrollToSection("#projects")}
              className="flex items-center gap-2 bg-[#FD853A] text-white py-3 px-6 rounded-full text-lg font-semibold mr-1 transition-colors duration-300 group-hover:bg-[#e9712a]"
            >
              Portfolio
              <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:rotate-45" />
            </div>

            <div
              onClick={() => scrollToSection("#contact")}
              className="flex text-white text-lg font-semibold px-4 pr-6 whitespace-nowrap cursor-pointer"
            >
              Hire me
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;



