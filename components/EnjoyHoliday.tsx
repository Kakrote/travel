import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Restaurants",
    description: "Savor local flavors at top-rated spots.",
    image: "/images/experiences/restaurants.jpg",
  },
  {
    id: 2,
    title: "Sightseeing",
    description: "Explore iconic sights and hidden gems.",
    image: "/images/experiences/sightseeing.jpg",
  },
  {
    id: 3,
    title: "Where To Stay",
    description: "Find comfort in top-rated stays.",
    image: "/images/experiences/stay.jpg",
  },
  {
    id: 4,
    title: "Shops & Boutiques",
    description: "Discover unique finds and local treasures.",
    image: "/images/experiences/shopping.jpg",
  },
];

export default function HolidayExperience() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-[380px_1fr]">

          {/* Left Content */}

          <div className="relative">

            <h2 className="text-[clamp(2rem,8vw,7rem)] tracking-widest font-black uppercase leading-none text-slate-900">
              Enjoy Your
              <br />
              Holiday
            </h2>

            <p className="mt-6 max-w-xs text-xl text-slate-500 tracking-wider leading-relaxed">
              Enjoy your holiday with unforgettable moments, scenic views,
              local flavors, and carefree, joyful travel experiences.
            </p>

            {/* Vertical Divider */}

            <div className="absolute right-0 top-28 hidden h-72 w-px bg-slate-300 lg:block" />

          </div>

          {/* Right Cards */}

          <div className="grid grid-cols-2 gap-5">

            {experiences.map((item, index) => (
              <div
                key={item.id}
                className={`
                  group rounded-xl bg-[#F7F4EF] p-3 shadow-sm
                  transition duration-300 hover:-translate-y-2 hover:shadow-xl
                  ${index >= 2 ? "mt-10" : ""}
                `}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="px-3 py-5 text-center">

                  <h3 className="text-lg font-black uppercase tracking-widest text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed tracking-wider text-slate-500">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}