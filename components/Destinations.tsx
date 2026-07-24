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
            location: "Srinagar, Jammu and Kashmir",
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

    const handleMouseEnter = (index: number) => {
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

    const handleMouseLeave = (index: number) => {
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
        <section className="relative min-h-screen overflow-hidden">
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
                            alt={item.title.replace("\n", " ")}
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-[1] bg-black/45 backdrop-blur-[0.5px]" />

            <div className="relative z-10 mx-auto flex min-h-screen container items-center gap-14 px-6 py-20">

                {/* LEFT */}
                <div className="w-full max-w-2xl text-white">

                    <h2 className="text-7xl font-black uppercase leading-none">
                        Destinations
                    </h2>

                    <p className="mt-6 text-2xl leading-relaxed text-white/90">
                        Experience the Perfect Blend of Comfort and Nature,
                        Crafted for Your Ultimate Escape.
                    </p>

                    <button className="mt-10 rounded-full bg-lime-400 px-10 py-4 text-lg font-semibold text-black transition hover:scale-105 cursor-pointer">
                        View All
                    </button>

                </div>

                {/* RIGHT */}
                <div className="grid flex-1 grid-cols-2 gap-6">

                    {destinations.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative h-[260px] overflow-hidden rounded-3xl cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <Image
                                src={item.image}
                                fill
                                alt={item.title.replace("\n", " ")}
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            <div className="absolute bottom-8 left-8 z-10">

                                <h3 className="whitespace-pre-line text-4xl font-extrabold uppercase leading-none text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-300">
                                    {item.location}
                                </p>

                            </div>

                            {/* Arrow button appearing on hover */}
                            <button
                                ref={(el) => {
                                    arrowRefs.current[index] = el;
                                }}
                                className="absolute bottom-8 right-8 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-black shadow-lg transition-transform hover:scale-110 cursor-pointer"
                                style={{ opacity: 0, transform: "scale(0.75) translateY(10px)" }}
                                aria-label={`View ${item.title.replace("\n", " ")}`}
                            >
                                <ArrowRight size={28} />
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
