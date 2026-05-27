// src/modules/home/views/HomeView.tsx

import { Bell, Calendar, Filter, Menu, Search } from "lucide-react";

const mockEvents = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  title: "UX Research for Digital Products",
  university: "Chulalongkorn University",
  date: "Nov 3, 2025",
  location: "Bangkok, Thailand",
  price: "Free Registration",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
}));

export default function HomeView() {
  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      <div className="flex">
        {/* SIDEBAR DESKTOP */}
        <aside className="hidden lg:flex w-[88px] border-r border-gray-200 bg-white flex-col items-center py-6">
          <div className="h-12 w-12 rounded-2xl border flex items-center justify-center">
            LOGO
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <button className="text-sm text-blue-500 font-medium">Home</button>

            <button className="text-sm text-gray-400">Events</button>

            <button className="text-sm text-gray-400">History</button>
          </div>

          <div className="mt-auto">
            <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
              P
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="flex-1">
          {/* TOPBAR */}
          <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="flex h-16 items-center justify-between px-4 lg:px-8">
              <div className="flex items-center gap-3">
                {/* MOBILE MENU */}
                <button className="lg:hidden">
                  <Menu size={22} />
                </button>

                <div className="font-semibold text-lg">Medalverse</div>
              </div>

              <div className="flex items-center gap-4">
                <Bell size={20} />

                <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  P
                </div>
              </div>
            </div>
          </header>

          {/* PAGE */}
          <div className="p-4 lg:p-8">
            {/* HERO */}
            <section className="overflow-hidden rounded-3xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop"
                alt="banner"
                className="h-[180px] w-full object-cover md:h-[240px] lg:h-[320px]"
              />
            </section>

            {/* SEARCH */}
            <section className="mt-6 flex flex-col gap-3 lg:flex-row">
              {/* SEARCH INPUT */}
              <div className="flex h-14 flex-1 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4">
                <Search size={18} className="text-gray-400" />

                <input
                  placeholder="Search Event"
                  className="flex-1 bg-transparent outline-none"
                />
              </div>

              {/* FILTERS */}
              <div className="flex gap-3">
                <button className="flex h-14 items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5">
                  <Calendar size={18} />
                  <span>Select date</span>
                </button>

                <button className="flex h-14 items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5">
                  <Filter size={18} />
                  <span>Filter</span>
                </button>
              </div>
            </section>

            {/* TABS */}
            <section className="mt-6 overflow-x-auto">
              <div className="flex min-w-max gap-6 border-b border-gray-200">
                {["All", "Bookmarked", "Registered", "History"].map(
                  (tab, index) => (
                    <button
                      key={tab}
                      className={`pb-4 text-sm font-medium ${
                        index === 0
                          ? "border-b-2 border-blue-500 text-blue-500"
                          : "text-gray-400"
                      }`}
                    >
                      {tab}
                    </button>
                  ),
                )}
              </div>
            </section>

            {/* EVENT GRID */}
            <section className="mt-6">
              <div
                className="
                  grid
                  grid-cols-1
                  gap-4

                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  2xl:grid-cols-5
                "
              >
                {mockEvents.map((event) => (
                  <article
                    key={event.id}
                    className="
                      overflow-hidden
                      rounded-3xl
                      border
                      border-gray-200
                      bg-white
                      transition-all
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    {/* IMAGE */}
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-[180px] w-full object-cover"
                      />

                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
                        Sponsored
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-3 p-4">
                      <div>
                        <h3 className="line-clamp-2 text-lg font-semibold">
                          {event.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {event.university}
                        </p>
                      </div>

                      <div className="space-y-2 text-sm text-gray-500">
                        <div>{event.date}</div>

                        <div>{event.location}</div>
                      </div>

                      <div className="pt-2 text-sm font-semibold text-emerald-500">
                        {event.price}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* PAGINATION */}
            <section className="mt-10 flex items-center justify-center gap-3">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`
                    h-10 w-10 rounded-full text-sm
                    ${
                      page === 1
                        ? "bg-blue-500 text-white"
                        : "bg-white border border-gray-200"
                    }
                  `}
                >
                  {page}
                </button>
              ))}
            </section>

            {/* FEATURE SECTION */}
            <section
              className="
                mt-12
                grid
                grid-cols-1
                gap-4

                md:grid-cols-2
                xl:grid-cols-4
              "
            >
              {["Learn", "Earn", "Grow", "Connect"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-6 border border-gray-200"
                >
                  <div className="mb-4 h-14 w-14 rounded-2xl bg-blue-50" />

                  <h3 className="text-lg font-semibold">{item}</h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
