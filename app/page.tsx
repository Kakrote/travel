"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import ExploreWithUs from "@/components/ExploreWithUs";
import Destination from "@/components/Destinations";
import PopularPackages from "@/components/Packages";
import HolidayExperience from "@/components/EnjoyHoliday";
import Footer from "@/components/Footer";

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

      {/* Holiday Experience Section */}
      <HolidayExperience />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
