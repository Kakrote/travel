"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function Destinations() {
    const destinations = [
        {
            id: 1,
            title: "Hawa Mahal",
            location: "Jaipur, Rajasthan",
            image: "/images/locations/jaipur.jpg",
        },
        {
            id: 2,
            title: "Kedarnath",
            location: "Uttarakhand, India",
            image: "/images/locations/uk.jpg",
        },
        {
            id: 3,
            title: "Dal Lake",
            location: "Srinagar, Jammu & Kashmir",
            image: "/images/locations/khasmir.jpg",
        },
        {
            id: 4,
            title: "Maravanthuruthu",
            location: "Kerala, India",
            image: "/images/locations/kerla.jpg",
        },
    ];

    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const arrowRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const activeIndexRef = useRef<number>(0);

    const handleActivate = (index: number) => {
        if (activeIndexRef.current !== index) {
            activeIndexRef.current = index;

            destinations.forEach((_, i) => {
                const bgEl = bgRefs.current[i];
                if (!bgEl) return;
                if (i === index) {
                    gsap.to(bgEl, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.7,
                        ease: "power2.out",
                        overwrite: "auto",
                    });
                } else {
                    gsap.to(bgEl, {
                        opacity: 0,
                        duration: 0.7,
                        ease: "power2.out",
                        overwrite: "auto",
                    });
                }
            });
        }

        const arrowEl = arrowRefs.current[index];
        if (arrowEl) {
            gsap.to(arrowEl, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.35,
                ease: "back.out(1.7)",
                overwrite: "auto",
            });
        }
    };

    const handleDeactivate = (index: number) => {
        const arrowEl = arrowRefs.current[index];
        if (arrowEl) {
            gsap.to(arrowEl, {
                opacity: 0,
                scale: 0.75,
                y: 10,
                duration: 0.25,
                ease: "power2.in",
                overwrite: "auto",
            });
        }
    };

    return (
        <section id="destinations" className="relative min-h-screen overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 flex items-center">
            {/* Background Images Stack for GSAP Crossfade */}
            <div className="absolute inset-0 z-0">
                {destinations.map((item, index) => (
                    <div
                        key={`bg-${item.id}`}
                        ref={(el) => {
                            bgRefs.current[index] = el;
                        }}
                        className="absolute inset-0"
                        style={{ opacity: index === 0 ? 1 : 0 }}
                    >
                        <Image
                            src={item.image}
                            fill
                            alt={item.title}
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-[1] bg-black/55 backdrop-blur-[0.5px]" />

            <div className="relative z-10 mx-auto container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 lg:px-8">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-5/12 xl:w-1/2 text-white text-center lg:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-wider leading-none">
                        Destinations
                    </h2>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-xl mx-auto lg:mx-0">
                        Experience the Perfect Blend of Comfort and Nature,
                        Crafted for Your Ultimate Escape.
                    </p>

                    <button className="mt-6 sm:mt-8 md:mt-10 rounded-full bg-lime-400 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-black transition-all hover:scale-105 hover:bg-lime-300 cursor-pointer shadow-lg">
                        View All
                    </button>
                </div>

                {/* RIGHT GRID */}
                <div className="w-full lg:w-7/12 xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    {destinations.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative h-[210px] sm:h-[240px] md:h-[260px] lg:h-[240px] xl:h-[270px] overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer shadow-xl border border-white/10"
                            onMouseEnter={() => handleActivate(index)}
                            onMouseLeave={() => handleDeactivate(index)}
                            onTouchStart={() => handleActivate(index)}
                        >
                            <Image
                                src={item.image}
                                fill
                                alt={item.title}
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                            {/* Card Details */}
                            <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end pr-16 sm:pr-20 z-10">
                                <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl tracking-wider font-extrabold uppercase leading-tight text-white drop-shadow-md">
                                    {item.title}
                                </h3>

                                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-lime-300">
                                    {item.location}
                                </p>
                            </div>

                            {/* Arrow button appearing on hover / tap */}
                            <button
                                ref={(el) => {
                                    arrowRefs.current[index] = el;
                                }}
                                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-lime-400 text-black shadow-xl transition-transform hover:scale-110 cursor-pointer"
                                style={{ opacity: 0, transform: "scale(0.75) translateY(10px)" }}
                                aria-label={`View ${item.title}`}
                            >
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
