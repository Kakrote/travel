"use client";

import React from "react";
import {
    ArrowUp,
    Mail,
    MapPin,
    Phone,
    Compass,
    Send,
    ArrowRight,
} from "lucide-react";
import homePage from "@/data/homePage.json";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://instagram.com",
            color: "hover:bg-pink-600 hover:text-white hover:border-pink-600",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://facebook.com",
            color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 2.7 9.5 5.2v2.26H6.75V11h2.75v12.5h5V11h3.75l.52-3.54z" />
                </svg>
            ),
        },
        {
            name: "X / Twitter",
            href: "https://twitter.com",
            color: "hover:bg-stone-900 hover:text-white hover:border-stone-900",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "https://youtube.com",
            color: "hover:bg-red-600 hover:text-white hover:border-red-600",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            color: "hover:bg-blue-700 hover:text-white hover:border-blue-700",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
    ];

    const backLinks = [
        { name: "Home", href: "#home" },
        { name: "About & Explore", href: "#about" },
        { name: "Destinations", href: "#destinations" },
        { name: "Popular Packages", href: "#packages" },
        { name: "Holiday Experiences", href: "#experiences" },
    ];

    const destinationLinks = [
        { name: "Masai Mara Reserve", href: "#destinations" },
        { name: "Ubud, Bali", href: "#destinations" },
        { name: "Queenstown", href: "#destinations" },
        { name: "Koh Lanta", href: "#destinations" },
    ];

    return (
        <footer className="relative bg-[#F8F5F0] text-stone-800 overflow-hidden border-t border-stone-200">
            {/* Soft Warm Background Accents */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl pointer-events-none" />

            {/* Top Banner / Call to Action & Back to Top */}
            <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl bg-[#EFE8DC] p-8 md:p-12 border border-stone-300/80 shadow-sm">
                    <div className="max-w-2xl text-center md:text-left">
                        <span className="text-amber-800 font-bold uppercase tracking-widest text-sm flex items-center gap-2 justify-center md:justify-start">
                            <Compass className="w-4 h-4 text-emerald-700" /> Start Your Expedition
                        </span>
                        <h3 className="text-4xl md:text-5xl font-black uppercase text-stone-900 mt-2 leading-none">
                            Ready for Your Ultimate Escape?
                        </h3>
                        <p className="text-stone-600 text-lg mt-3">
                            Subscribe to get exclusive travel deals, secret destinations, and curated itineraries directly in your inbox.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                        <div className="relative w-full sm:w-80">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-5 py-4 rounded-full bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700 shadow-inner transition"
                            />
                            <button
                                aria-label="Subscribe"
                                className="absolute right-2 top-2 bottom-2 px-5 bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold rounded-full transition flex items-center justify-center cursor-pointer shadow-sm"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-semibold border border-stone-300 shadow-sm transition duration-300 hover:scale-105 cursor-pointer shrink-0"
                            aria-label="Back to Top"
                        >
                            <ArrowUp className="w-5 h-5 text-emerald-700" />
                            <span className="uppercase text-sm tracking-wider">Top</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Col 1: Brand Info */}
                    <div className="flex flex-col space-y-6">
                        <a href="#home" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-emerald-500 to-teal-500 p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-full bg-stone-950 text-amber-400 flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500"
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
                                <span className="text-2xl font-bold tracking-wider text-stone-900">
                                    {homePage.header.title.toUpperCase()}
                                </span>
                                <span className="text-xs tracking-widest text-amber-800 font-bold -mt-1">
                                    {homePage.header.tagline}
                                </span>
                            </div>
                        </a>

                        <p className="text-stone-600 text-base leading-relaxed">
                            Crafting unforgettable travel experiences across the globe. From serene landscapes to thrill-packed expeditions, explore the world with zero limits.
                        </p>

                        <div className="flex flex-col space-y-3 text-stone-700 text-sm">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                                <span>100 World Avenue, Suite 400, NY 10001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                                <span>+1 (800) 555-AURA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                                <span>concierge@auratravel.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Navigation Back Links */}
                    <div>
                        <h4 className="text-xl font-bold uppercase tracking-wider text-stone-900 mb-6 border-b border-stone-300/80 pb-3 flex items-center justify-between">
                            Navigation
                            <span className="w-8 h-0.5 bg-amber-600 rounded-full" />
                        </h4>
                        <ul className="space-y-3">
                            {backLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-stone-600 hover:text-amber-800 text-base transition-colors duration-200"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-emerald-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Popular Destinations Back Links */}
                    <div>
                        <h4 className="text-xl font-bold uppercase tracking-wider text-stone-900 mb-6 border-b border-stone-300/80 pb-3 flex items-center justify-between">
                            Destinations
                            <span className="w-8 h-0.5 bg-amber-600 rounded-full" />
                        </h4>
                        <ul className="space-y-3">
                            {destinationLinks.map((dest, idx) => (
                                <li key={idx}>
                                    <a
                                        href={dest.href}
                                        className="group inline-flex items-center gap-2 text-stone-600 hover:text-amber-800 text-base transition-colors duration-200"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-emerald-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{dest.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Social Media Links */}
                    <div>
                        <h4 className="text-xl font-bold uppercase tracking-wider text-stone-900 mb-6 border-b border-stone-300/80 pb-3 flex items-center justify-between">
                            Connect With Us
                            <span className="w-8 h-0.5 bg-amber-600 rounded-full" />
                        </h4>
                        <p className="text-stone-600 text-sm mb-6">
                            Follow us on social media for daily travel inspiration, live updates, and guest highlights.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        className={`w-11 h-11 rounded-full bg-white border border-stone-300 shadow-sm flex items-center justify-center text-stone-700 transition-all duration-300 hover:scale-110 ${item.color}`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-stone-300/70 bg-[#EDE7DD] py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
                    <p>© {new Date().getFullYear()} Aura Travel. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#home" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
                        <span className="text-stone-400">•</span>
                        <a href="#home" className="hover:text-stone-900 transition-colors">Terms of Service</a>
                        <span className="text-stone-400">•</span>
                        <a href="#home" className="hover:text-stone-900 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
