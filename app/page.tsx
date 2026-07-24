"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import ExploreWithUs from "@/components/ExploreWithUs";

export default function Home() {
  const featuredDestinations = [
    {
      id: 1,
      title: "Santorini Luxury Escape",
      location: "Greece",
      rating: "4.95",
      price: "$2,450",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      tag: "Popular",
    },
    {
      id: 2,
      title: "Kyoto Temple & Alpine Tour",
      location: "Japan",
      rating: "4.98",
      price: "$3,100",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      tag: "Trending",
    },
    {
      id: 3,
      title: "Amalfi Coast Yacht Retreat",
      location: "Italy",
      rating: "4.92",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      tag: "Exclusive",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section Component */}
      <HeroSection />
      <ExploreWithUs/>

      {/* Featured Destinations Section */}
      <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200">
              Curated Expeditions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Featured Destinations
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base leading-relaxed">
            Hand-picked luxury stays and iconic routes verified for comfort, safety, and breathtaking views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                  {destination.tag}
                </span>
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                  ★ {destination.rating}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  📍 {destination.location}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-emerald-700 transition-colors">
                  {destination.title}
                </h3>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <div className="text-xl font-extrabold text-slate-900">{destination.price}</div>
                  </div>
                  <button className="px-5 py-2.5 text-xs font-bold rounded-xl bg-slate-900 hover:bg-emerald-600 text-white transition-all shadow-md">
                    View Package →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Aura Travel. All rights reserved.</p>
      </footer>
    </div>
  );
}
