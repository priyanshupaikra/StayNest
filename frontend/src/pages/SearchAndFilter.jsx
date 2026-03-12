import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const SearchAndFilter = () => {
  const [properties, setProperties] = useState([]); // Empty currently, mapped dynamically when user inputs data

  return (
    <div className="min-h-screen flex flex-col h-screen overflow-hidden">
      <Navbar />

      <main className="flex-1 flex overflow-hidden">
        {/* Left List/Filters Column */}
        <div className="w-full lg:w-3/5 xl:w-1/2 overflow-y-auto px-4 md:px-6 py-6 border-r border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark">
          
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Over 1,000 places in Malibu</h1>
            <button className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-semibold">
               <span className="material-symbols-outlined text-sm">tune</span>
               Filters
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
            <button className="border border-slate-300 dark:border-slate-600 rounded-full px-4 py-1.5 text-sm whitespace-nowrap hover:border-slate-900 dark:hover:border-slate-100 transition-colors">Price</button>
            <button className="border border-slate-300 dark:border-slate-600 rounded-full px-4 py-1.5 text-sm whitespace-nowrap hover:border-slate-900 dark:hover:border-slate-100 transition-colors">Type of place</button>
            <button className="border border-slate-300 dark:border-slate-600 rounded-full px-4 py-1.5 text-sm whitespace-nowrap hover:border-slate-900 dark:hover:border-slate-100 transition-colors">Free cancellation</button>
            <button className="border border-slate-300 dark:border-slate-600 rounded-full px-4 py-1.5 text-sm whitespace-nowrap hover:border-slate-900 dark:hover:border-slate-100 transition-colors">Wifi</button>
            <button className="border border-slate-300 dark:border-slate-600 rounded-full px-4 py-1.5 text-sm whitespace-nowrap hover:border-slate-900 dark:hover:border-slate-100 transition-colors">Pool</button>
          </div>

          <p className="text-slate-500 text-sm mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
            Review COVID-19 travel restrictions before you book. <a href="#" className="underline">Learn more</a>
          </p>

          <div className="space-y-6">
            {properties.length === 0 ? (
              <div className="py-16 text-center text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">No properties found</h3>
                <p>Try adjusting your search filters or map area.</p>
              </div>
            ) : properties.map((prop) => (
              <div key={prop.id} className="flex flex-col sm:flex-row gap-4 border-b border-slate-200 dark:border-slate-700 pb-6 group cursor-pointer">
                <Link to="/property/1" className="w-full sm:w-72 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0 relative block">
                  <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute top-3 right-3 text-white/90 hover:text-red-500 transition-colors z-10" onClick={(e) => e.preventDefault()}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                  </button>
                </Link>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-slate-500">Entire home in City</p>
                      <div className="flex items-center gap-1 text-sm font-semibold">
                        <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        {prop.rating}
                      </div>
                    </div>
                    <Link to="/property/1"><h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">{prop.title}</h3></Link>
                    <div className="w-8 border-b-2 border-slate-200 dark:border-slate-700 mt-3 mb-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{prop.details}</p>
                  </div>
                  <div className="text-right mt-4 sm:mt-0">
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{prop.price} <span className="text-sm font-normal text-slate-500">/ night</span></p>
                    <p className="text-slate-500 text-sm underline decoration-slate-300 mt-1">Total $1,200</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Map Column Placeholder */}
        <div className="hidden lg:block w-2/5 xl:w-1/2 relative bg-slate-200 dark:bg-slate-800">
           {/* Replace this div with a real map component like react-map-gl or similar */}
           <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Malibu,CA&zoom=11&size=1000x1000&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:water|element:geometry|color:0x17263c')] bg-cover bg-center">
             <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-lg p-2 bg-white rounded-full">map</span>
                <p className="font-bold mt-2 text-slate-900 bg-white/80 px-4 py-1 rounded-full drop-shadow">Mapbox / Google Maps Placeholder</p>
             </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default SearchAndFilter;
