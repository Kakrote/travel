import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Destinations() {

    const destinations = [
        {
            id: 1,
            title: "MASAI MARA\nNATIONAL RESERVE",
            location: "KENYA, EAST AFRICA",
            image: "/images/masai.jpg",
            featured: true,
        },
        {
            id: 2,
            title: "UBUD, BALI",
            location: "INDONESIA",
            image: "/images/bali.jpg",
        },
        {
            id: 3,
            title: "QUEENSTOWN",
            location: "NEW ZEALAND (SOUTH ISLAND)",
            image: "/images/queenstown.jpg",
        },
        {
            id: 4,
            title: "KOH LANTA",
            location: "THAILAND (KRABI PROVINCE)",
            image: "/images/thailand.jpg",
        },
    ];
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background */}

            <Image
                src="/images/bg.jpg"
                fill
                alt=""
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

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

                    <button className="mt-10 rounded-full bg-lime-400 px-10 py-4 text-lg font-semibold text-black transition hover:scale-105">
                        View All
                    </button>

                </div>

                {/* RIGHT */}

                <div className="grid flex-1 grid-cols-2 gap-6">

                    {destinations.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[260px] overflow-hidden rounded-3xl"
                        >
                            <Image
                                src={item.image}
                                fill
                                alt={item.title}
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            <div className="absolute bottom-8 left-8">

                                <h3 className="whitespace-pre-line text-4xl font-extrabold uppercase leading-none text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-300">
                                    {item.location}
                                </p>

                            </div>

                            {item.featured && (
                                <button className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-black transition hover:scale-110">
                                    <ArrowRight size={28} />
                                </button>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}