import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const properties = [
  {
    id: 1,
    title: "Azure Bay Retreat",
    location: "Malibu, California",
    price: "$850",
    rating: "4.95",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy74GjufROuwPPKFk8IaQJA7MZMiOLfQRzsyWdH9rstVEL87Rnz58_iMNG-cSxTDy3V8XXGd8eka9bfvjXgpl2MBOKf9h39uruK1iIQKs0NQZBZc0lmcy7_3Vhm_U5X6E-2DckzwaHG8DrgEx6OPKbLrH2KqpEZ2aDS5HvqaRON30kpwlPb-6Mct4qOSJrd1kafT5oZPe2ssI0aq3SHigQDtdgVGMbZqSqeFDQjPupg_GeZHElWejBQ9-uqCIaG0Ji6jtSEJPP5jxA"
  },
  {
    id: 2,
    title: "The Glass Cabin",
    location: "Aspen, Colorado",
    price: "$420",
    rating: "4.88",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhLz5FQv2gMWOrOG-VQHnSgf19EB0KBY6XglxSDLFHEAkt9SHnoDlfMv4mFXdB5rgKy1ElksR6EwJMU-bWbLAaCx8QAB5sozpz8bUVhNbytCj5q-Jzu1vit1INH0RXuvQzUYODD7TuGCLvWViagb1SNa_-w-6R04kh0oyyqHnUvPdurtJJmVZHrSeaXr-cP21Mne3mGlEQ1pLSkN8ThLxLyAnknYXquqiF0io3g8UAPP2476b6uX5Ot88HwOdQ9yTZSWctil9cezjb"
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "New York City, NY",
    price: "$1,200",
    rating: "4.92",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2MqaQhNDPIO1oeYOV5hMelFjRm4SWmykmOfLhWdT8JKROyZ2KGimERtVZ1taDjsM7UtihbRbPehs2JvJR-KJns_9lR-_WXwLAXYTFgKtjcP_gs9Y-mSfmp4_2jjbIHyumL3jZxYojN0SAMA8ZxpK8L6I5b6_WllTNITe1A42ntXH6PY_SNNxudnm-r_JgeCMn9M0poHiR-EIx5ar5Utyg7A91QQX0bXRyITqLYulhrrm_x9CL4MI9G9mlD59macL9dCei89-ek0o"
  },
  {
    id: 4,
    title: "Villa del Sol",
    location: "Santorini, Greece",
    price: "$650",
    rating: "5.0",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClprEo8Pxg9TBHpdJVJ7q4mL6Pq1Khu0Jw53soxXw1fi2KIqiZB1GfQ0oFkhqVAu-2y5-3vcm4G__M6VQL9lQqYAGqd3mhOnY08n3Kx-VOj9RoGu94xyegnsSX2LoEyIqYZjGPXn1rLbi8uCfb2PrOIFWKEj5uYc4iIC6niDTQmvvJM6zdQqr0GOuaATU0CO3DIZF92YhNoMsDJoum5QogqsYXkYUPRAs0bbLluxezVQNhsUWUNDafuHPJ7_zNB1abX5UkdSlK7F_f"
  }
];

const categories = [
  { icon: "waves", label: "Beachfront", active: true },
  { icon: "cabin", label: "Cabins", active: false },
  { icon: "apartment", label: "Iconic Cities", active: false },
  { icon: "pool", label: "Amazing Pools", active: false },
  { icon: "landscape", label: "Countryside", active: false },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 md:px-10 py-6">
          <div className="max-w-7xl mx-auto relative h-[500px] rounded-xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD88HWBBPSVFnDB4b1hpmOObx16S2n6QQHA4EgMXL7yd9VrvAGvLBtb5spMRpKDdiC1Fjn-KB1vVfGNwM7b2owyevUkIkngdfOWI7dd2IxIKHksM2BReMWjXQfjE79HQ1n8TnkIj6ZAp_2aYfYxVBkUhczlMQAnhU5D0554j7cBR9h0Gmg4tIYIUEIb3ql1vRIZsSzCBD2xXzK3kX2iysgoF_nIKN8exr4ilf4i08ajaTHeisSfQSPM6Y4hecCyhAuUbx1FSkP8Jw82')"
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">Find your nest away from home</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90 drop-shadow">Handpicked luxury stays for the discerning traveler.</p>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105">
                Explore Experiences
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark border-b border-primary/5 px-4 md:px-10 py-4">
          <div className="max-w-7xl mx-auto flex items-center gap-8 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`flex flex-col items-center gap-2 min-w-fit border-b-2 pb-2 transition-colors ${cat.active ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                <span className="material-symbols-outlined">{cat.icon}</span>
                <span className="text-xs font-bold whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Property Grid */}
        <section className="px-4 md:px-10 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map((prop) => (
              <div key={prop.id} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  <img src={prop.img} alt={prop.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  <button className="absolute top-3 right-3 text-white/90 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">{prop.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{prop.location}</p>
                    <p className="mt-2"><span className="font-bold">{prop.price}</span> <span className="text-slate-500 font-normal">night</span></p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm font-medium">{prop.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-16">
            <p className="text-slate-600 dark:text-slate-400">Continue exploring amazing nests</p>
            <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-10 rounded-xl hover:scale-105 transition-transform">
              Show more
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
