import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddProperty = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step < 3 ? step + 1 : step);
  const prevStep = () => setStep(step > 1 ? step - 1 : step);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 md:px-10 py-10 w-full">
        
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
               {step === 1 && "Basic Information"}
               {step === 2 && "Photos & Amenities"}
               {step === 3 && "Pricing & Rules"}
            </h1>
            <span className="text-sm font-medium text-slate-500">Step {step} of 3</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
            <div className={`bg-primary h-2.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`}></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Tell us about your place</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                <input type="text" placeholder="Cozy Cabin in the Woods" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                <p className="text-xs text-slate-500 mt-1">Catch guests' attention with a listing title that highlights what makes your place special.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
                <textarea rows="4" placeholder="Describe the decor, light, neighborhood..." className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Property Type</label>
                  <select className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white">
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="cabin">Cabin</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Location</label>
                  <input type="text" placeholder="City, Country" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Guests</label>
                   <input type="number" min="1" defaultValue="2" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-primary dark:text-white" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bedrooms</label>
                   <input type="number" min="1" defaultValue="1" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-primary dark:text-white" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bathrooms</label>
                   <input type="number" min="0.5" step="0.5" defaultValue="1" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-primary dark:text-white" />
                 </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
               <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Make it stand out</h2>
               
               <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Upload Photos</label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-10 text-center hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer">
                     <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">cloud_upload</span>
                     <p className="font-semibold text-slate-700 dark:text-slate-200">Drag and drop your photos here</p>
                     <p className="text-sm text-slate-500 mt-1">or click to browse from your computer</p>
                     <p className="text-xs text-slate-400 mt-4">JPG, PNG, WebP up to 5MB</p>
                  </div>
               </div>

               <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Amenities available</label>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 cursor-pointer hover:border-primary transition-colors">
                      <input type="checkbox" className="text-primary rounded focus:ring-primary" />
                      <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"><span className="material-symbols-outlined text-sm">wifi</span> Wifi</span>
                    </label>
                    <label className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 cursor-pointer hover:border-primary transition-colors">
                      <input type="checkbox" className="text-primary rounded focus:ring-primary" />
                      <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"><span className="material-symbols-outlined text-sm">kitchen</span> Kitchen</span>
                    </label>
                    <label className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 cursor-pointer hover:border-primary transition-colors">
                      <input type="checkbox" className="text-primary rounded focus:ring-primary" />
                      <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"><span className="material-symbols-outlined text-sm">ac_unit</span> AC</span>
                    </label>
                    <label className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 cursor-pointer hover:border-primary transition-colors">
                      <input type="checkbox" className="text-primary rounded focus:ring-primary" />
                      <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"><span className="material-symbols-outlined text-sm">pool</span> Pool</span>
                    </label>
                 </div>
               </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Pricing & House rules</h2>
               
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nightly Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                  <input type="number" placeholder="150" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white font-bold text-lg" />
                </div>
                <p className="text-xs text-slate-500 mt-2">Set a competitive price based on similar listings in your area.</p>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Check-in / Check-out time</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-primary dark:text-white text-sm">
                      <option>Check-in: After 3:00 PM</option>
                      <option>Check-in: After 4:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-primary dark:text-white text-sm">
                      <option>Checkout: 11:00 AM</option>
                      <option>Checkout: 12:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Actions (Prev/Next) */}
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-6 py-2.5 rounded-xl font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                Back
              </button>
            ) : <div />}
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="bg-slate-900 border border-transparent dark:bg-white text-white dark:text-slate-900 px-8 py-2.5 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Next
              </button>
            ) : (
              <button 
                className="bg-primary text-white border border-transparent px-8 py-2.5 rounded-xl font-bold hover:bg-primary/90 hover:scale-105 shadow-md transition-all"
              >
                Publish Listing
              </button>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddProperty;
