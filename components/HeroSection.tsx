import React from "react";
import homePage from "@/data/homePage.json";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white">
      {/* Background Image */}
      <div
        className="absolute  inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-slate-950/55" />

      {/* Hero Content */}
      <div className="relative z-10  container  flex flex-col items-start ">
        {/* Badge */}
       

        {/* Title */}
        <h1 className="text-[clamp(2rem,5vw,4rem)] max-w-2xl font-bold tracking-wider text-white mb-6 leading-tight">
          {homePage.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-xl">
          {homePage.hero.subtitle}
        </p>

       
      </div>
    </section>
  );
};

export default HeroSection;