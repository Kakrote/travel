import React from 'react';
import homePage from "@/data/homePage.json";
import Image from 'next/image';

const ExploreWithUs = () => {
    const imagePlaceholders = [
        {
            id: 1,
            title: "Image 1 Placeholder",
            subtitle: "Scenic Destinations Showcase",
            badge: "✦ Iconic Destinations",
            rotation: "-rotate-3 hover:rotate-0",
            zIndex: "z-10",
            badgeColor: "bg-amber-500/90 text-amber-100",
        },
        {
            id: 2,
            title: "Image 2 Placeholder",
            subtitle: "Luxury Resort & Stay",
            badge: "✦ Premium Stays",
            rotation: "rotate-3 hover:rotate-0",
            zIndex: "z-20",
            badgeColor: "bg-emerald-600/90 text-emerald-100",
        },
        {
            id: 3,
            title: "Image 3 Placeholder",
            subtitle: "Guided Expeditions & Tours",
            badge: "✦ Curated Routes",
            rotation: "-rotate-2 hover:rotate-0",
            zIndex: "z-30",
            badgeColor: "bg-teal-600/90 text-teal-100",
        },
    ];

    return (
        <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Section: Text Content & Features */}
                <div className="mx-auto flex max-w-7xl items-center px-6 py-20">

                    {/* Left Content */}
                    <div className="flex-1">

                        <p className="mb-3 text-lg font-bold uppercase tracking-wider text-lime-400">
                            Time To Travel
                        </p>

                        <h1 className="text-[90px] font-extrabold uppercase tracking-widest leading-[0.9] text-slate-900">
                            Explore
                            <br />
                            With Us
                        </h1>

                        <h3 className="mt-14 mb-6 text-2xl font-bold tracking-widest uppercase text-gray-400">
                            All Packages Include
                        </h3>


                        <ul className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
                            {homePage.exploreWithUs.packagesInclude.map((item, index) => (
                                <li
                                    key={index}
                                    className="group flex items-center gap-3 text-lg font-medium tracking-wide text-[#111010] transition-all duration-300 hover:text-slate-900"
                                >
                                    <Image
                                        src="/icons/check.png"
                                        width={40}
                                        height={40}
                                        alt="Check Icon"
                                        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    />

                                    <span className="leading-relaxed text-[clamp(0.5rem,3vw,1.25rem)] ">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Bottom */}
                        <div className="mt-14 flex items-center gap-12">

                            <button className="rounded-full bg-lime-400 px-10 py-4 text-lg font-semibold transition hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
              

                {/* Right Section: Multiple Tilted Image Placeholders (Stacked vertically) */}
                <div className="relative mx-auto h-[750px] w-full max-w-[650px]">

                    {/* Background */}
                    {/* <div className="absolute inset-6 bg-gray-100" /> */}

                    {/* Top */}
                    <div className="absolute -left-20 top-0 rotate-[-6deg] shadow-2xl">
                        <div className="border-[10px] border-white bg-white">
                            <Image
                                src="/images/img1.jpg"
                                width={520}
                                height={330}
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="absolute -right-10 top-[16rem] rotate-[3deg] shadow-2xl z-20">
                        <div className="border-[10px] border-white bg-white">
                            <Image
                                src="/images/img2.jpg"
                                width={520}
                                height={330}
                                alt=""
                            />
                        </div>
                    </div>


                    <div className="absolute  top-[30rem] rotate-[-8deg] shadow-2xl z-20">
                        <div className="border-[10px] border-white bg-white">
                            <Image
                                src="/images/img3.jpg"
                                width={420}
                                height={230}
                                alt=""
                            />
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default ExploreWithUs;