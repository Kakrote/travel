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
        <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10">
          {homePage.hero.badge}
        </span>

        {/* Title */}
        <h1 className="text-[clamp(2rem,5vw,4rem)] max-w-2xl font-bold tracking-tight text-white mb-6 leading-tight">
          {homePage.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-xl">
          {homePage.hero.subtitle}
        </p>

        {/* Primary CTA */}
        <a
          href="#destinations"
          className="px-8 py-3.5 text-sm font-semibold rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg hover:shadow-emerald-600/30 hover:scale-105 active:scale-95"
        >
          Explore Destinations
        </a>
      </div>
    </section>
  );
};

export default HeroSection;