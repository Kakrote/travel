import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Kashmir Paradise",
    location: "Srinagar, Gulmarg & Pahalgam",
    duration: "6 Days • 5 Nights",
    price: "₹24,999",
    rating: 4.9,
    image: "/images/packages/khasmir.jpg",
    category: "Nature",
    featured: true,
  },
  {
    id: 2,
    title: "Royal Rajasthan",
    location: "Jaipur, Jodhpur & Udaipur",
    duration: "7 Days • 6 Nights",
    price: "₹32,999",
    rating: 4.8,
    image: "/images/packages/jaipur.jpg",
    category: "Heritage",
  },
  {
    id: 3,
    title: "Goa Beach Escape",
    location: "North & South Goa",
    duration: "5 Days • 4 Nights",
    price: "₹18,999",
    rating: 4.7,
    image: "/images/packages/goa.jpg",
    category: "Beach",
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    location: "Munnar, Alleppey & Kochi",
    duration: "6 Days • 5 Nights",
    price: "₹26,999",
    rating: 4.9,
    image: "/images/packages/kerla.jpg",
    category: "Nature",
  },
  {
    id: 5,
    title: "Leh–Ladakh Adventure",
    location: "Leh, Nubra & Pangong",
    duration: "8 Days • 7 Nights",
    price: "₹36,999",
    rating: 5.0,
    image: "/images/packages/ladakh.jpg",
    category: "Adventure",
  },
];
export default function PopularPackages() {
  const featured = packages[0];
  const others = packages.slice(1);

  return (
    <section className="bg-[#ebebe9] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className=" px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#13ab09]">
              Best Selling Tours
            </span>

            <h2 className="mt-5 max-w-xl text-[clamp(3rem,4vw,5rem)] uppercase leading-[4rem] tracking-widest font-black text-slate-900">
              Popular <span className="text-lime-500 block">Packages</span>
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
              Discover hand-picked destinations designed for unforgettable
              adventures, luxury stays, and once-in-a-lifetime memories.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-semibold transition hover:bg-slate-900 hover:text-white">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-12 gap-6">

          {/* Featured */}

          <div className="group relative col-span-12 overflow-hidden rounded-3xl lg:col-span-6 lg:row-span-2">

            <Image
              src={featured.image}
              alt={featured.title}
              width={900}
              height={900}
              className="h-full min-h-[620px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute left-8 right-8 top-8 flex justify-between">

              <div className="rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md">
                Adventure
              </div>

              <div className="flex items-center gap-1 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="font-semibold text-white">
                  {featured.rating}
                </span>
              </div>

            </div>

            <div className="absolute bottom-8 left-8 right-8">

              <h3 className="text-4xl font-black text-white">
                {featured.title}
              </h3>

              <p className="mt-2 text-white/80">
                {featured.location}
              </p>

              <p className="mt-2 text-white/80">
                {featured.duration}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div>
                  <p className="text-sm text-white/60">
                    Starting From
                  </p>

                  <h4 className="text-4xl font-black text-lime-400">
                    {featured.price}
                  </h4>
                </div>

                <button className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
                  Book Now
                </button>

              </div>

            </div>

          </div>

          {/* Small Cards */}

          {others.map((item) => (
            <div
              key={item.id}
              className="group relative col-span-12 overflow-hidden rounded-3xl sm:col-span-6 lg:col-span-3"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                <Star
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm font-semibold text-white">
                  {item.rating}
                </span>
              </div>

              <div className="absolute bottom-5 left-5">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  {item.location}
                </p>

                <p className="mt-3 text-2xl font-bold text-lime-400">
                  {item.price}
                </p>

              </div>

            </div>
          ))}
        </div>

       

      

      </div>
    </section>
  );
}