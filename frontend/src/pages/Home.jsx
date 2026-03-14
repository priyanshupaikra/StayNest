import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const categories = [
  { icon: "waves", label: "Beachfront", active: true },
  { icon: "cabin", label: "Cabins", active: false },
  { icon: "apartment", label: "Iconic Cities", active: false },
  { icon: "pool", label: "Amazing Pools", active: false },
  { icon: "landscape", label: "Countryside", active: false },
];

const Home = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]); // Currently empty, waiting for backend integrations
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // GET array of properties from your Django DB (PostgreSQL backend)
        const response = await api.get('properties/'); 
        setProperties(response.data);
      } catch (err) {
        console.error('Failed to fetch properties', err);
        setError('Failed to load listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProperties();
  }, []);

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
              <button onClick={() => navigate('/search')} className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105">
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
            {loading ? (
              <div className="col-span-full py-16 text-center text-primary flex justify-center items-center">
                 <span className="material-symbols-outlined text-4xl animate-spin">refresh</span>
              </div>
            ) : error ? (
              <div className="col-span-full py-16 text-center text-red-500">
                <span className="material-symbols-outlined text-6xl mb-4 opacity-50">warning</span>
                <p>{error}</p>
              </div>
            ) : properties.length === 0 ? (
              <div className="col-span-full py-16 text-center text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">No properties found</h3>
                <p>There are currently no listings available in the database.</p>
              </div>
            ) : properties.map((prop) => (
              <div key={prop.id} onClick={() => navigate(`/property/${prop.id}`)} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  {/* Pulls Cloudinary image URL dynamically */}
                  <img src={prop.image_url || prop.img || "https://placehold.co/600x400/eee/999?text=No+Image"} alt={prop.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  <button className="absolute top-3 right-3 text-white/90 hover:text-red-500 transition-colors" onClick={(e) => e.stopPropagation()}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">{prop.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{prop.location || prop.city}</p>
                    <p className="mt-2"><span className="font-bold">${prop.price}</span> <span className="text-slate-500 font-normal">night</span></p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm font-medium">{prop.rating || "New"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-16">
            <p className="text-slate-600 dark:text-slate-400">Continue exploring amazing nests</p>
            <button onClick={() => navigate('/search')} className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-10 rounded-xl hover:scale-105 transition-transform">
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
