"use client";

import React, { useState, useEffect } from "react";
import homePage from "@/data/homePage.json";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? " backdrop-blur-[0.5px] py-3.5"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-3 group focus:outline-none"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-emerald-500 to-teal-500 p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300">
                            <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors ${isScrolled ? "bg-white text-emerald-600" : "bg-slate-950 text-amber-400"
                                }`}>
                                <svg
                                    className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span
                                className={`text-xl  font-bold tracking-wider transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white drop-shadow-sm"
                                    }`}
                            >
                                {homePage.header.title.toUpperCase()}
                            </span>
                            <span
                                className={`text-[10px] tracking-widest font-medium -mt-1 ${isScrolled ? "text-slate-500" : "text-slate-200"
                                    }`}
                            >
                                {homePage.header.tagline}
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Pill */}
                    <nav className="hidden md:block">
                        <div
                            className={`flex items-center gap-1 px-4 py-1.5 rounded-full border transition-all duration-300 ${isScrolled
                                    ? "bg-slate-100/80 border-slate-200 shadow-inner"
                                    : "bg-black/25 backdrop-blur-md border-white/20 shadow-md"
                                }`}
                        >
                            {homePage.header.nav.map((navItem) => {
                                const isActive = activeNav === navItem.name;
                                return (
                                    <a
                                        key={navItem.name}
                                        href={navItem.link}
                                        onClick={() => setActiveNav(navItem.name)}
                                        className={`relative tracking-wider px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                                ? isScrolled
                                                    ? "text-slate-900 font-bold"
                                                    : "text-white font-bold"
                                                : isScrolled
                                                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                                                    : "text-slate-100 hover:text-white hover:bg-white/15"
                                            }`}
                                    >
                                        {isActive && (
                                            <span
                                                className={`absolute inset-0 rounded-full shadow-sm -z-10 transition-all ${isScrolled
                                                        ? "bg-white border border-slate-200"
                                                        : "bg-gradient-to-r from-amber-500 to-emerald-500"
                                                    }`}
                                            />
                                        )}
                                        {navItem.name}
                                    </a>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Header Actions CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={homePage.header.cta.link}
                            className="relative inline-flex tracking-widest items-center justify-center px-6 py-2.5 text-sm  text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none"
                        >
                            <span>{homePage.header.cta.name}</span>
                            <svg
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2.5 rounded-xl border transition-colors ${isScrolled
                                ? "bg-slate-100 border-slate-200 text-slate-800"
                                : "bg-black/30 border-white/20 text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 rounded-2xl bg-white/95 backdrop-blur-xl p-5 border border-slate-200 shadow-2xl text-slate-900">
                        <div className="flex flex-col space-y-2">
                            {homePage.header.nav.map((navItem) => (
                                <a
                                    key={navItem.name}
                                    href={navItem.link}
                                    onClick={() => {
                                        setActiveNav(navItem.name);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${activeNav === navItem.name
                                            ? "bg-emerald-50 text-emerald-700 font-bold"
                                            : "text-slate-700 hover:bg-slate-100"
                                        }`}
                                >
                                    {navItem.name}
                                </a>
                            ))}
                            <div className="pt-3 border-t border-slate-100">
                                <a
                                    href={homePage.header.cta.link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full inline-flex items-center justify-center px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md"
                                >
                                    {homePage.header.cta.name}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;