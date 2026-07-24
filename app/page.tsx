"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import ExploreWithUs from "@/components/ExploreWithUs";
import Destination from "@/components/Destinations";
import PopularPackages from "@/components/Packages";

export default function Home() {
 

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section Component */}
      <HeroSection />
      <ExploreWithUs/>

      {/* Featured Destinations Section */}
      <Destination />

      {/* Popular Packages Section */}
      <PopularPackages />



      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Aura Travel. All rights reserved.</p>
      </footer>
    </div>
  );
}
