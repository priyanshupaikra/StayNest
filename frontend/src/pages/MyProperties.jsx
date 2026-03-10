import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const MyProperties = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-10 w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav (Same as Dashboard) */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <nav className="space-y-2">
              <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">dashboard</span> Dashboard
              </Link>
              <Link to="/my-properties" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">home</span> My Properties
              </Link>
              <Link to="/add-property" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">add_circle</span> Add Property
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">My Properties</h1>
            <Link to="/add-property" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-xl shadow transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              Create new listing
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    <th className="p-4">Listing</th>
                    <th className="p-4 hidden md:table-cell">Location</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy74GjufROuwPPKFk8IaQJA7MZMiOLfQRzsyWdH9rstVEL87Rnz58_iMNG-cSxTDy3V8XXGd8eka9bfvjXgpl2MBOKf9h39uruK1iIQKs0NQZBZc0lmcy7_3Vhm_U5X6E-2DckzwaHG8DrgEx6OPKbLrH2KqpEZ2aDS5HvqaRON30kpwlPb-6Mct4qOSJrd1kafT5oZPe2ssI0aq3SHigQDtdgVGMbZqSqeFDQjPupg_GeZHElWejBQ9-uqCIaG0Ji6jtSEJPP5jxA" alt="Azure Bay" className="w-16 h-12 object-cover rounded-md shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">Azure Bay Retreat</p>
                          <p className="text-xs text-slate-500">Villa · 4 beds</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">Malibu, CA</td>
                    <td className="p-4 text-sm font-semibold text-slate-900 dark:text-slate-100">$850/n</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Active</span>
                    </td>
                    <td className="p-4 text-right">
                       <button className="text-slate-400 hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-sm">edit</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhLz5FQv2gMWOrOG-VQHnSgf19EB0KBY6XglxSDLFHEAkt9SHnoDlfMv4mFXdB5rgKy1ElksR6EwJMU-bWbLAaCx8QAB5sozpz8bUVhNbytCj5q-Jzu1vit1INH0RXuvQzUYODD7TuGCLvWViagb1SNa_-w-6R04kh0oyyqHnUvPdurtJJmVZHrSeaXr-cP21Mne3mGlEQ1pLSkN8ThLxLyAnknYXquqiF0io3g8UAPP2476b6uX5Ot88HwOdQ9yTZSWctil9cezjb" alt="Glass Cabin" className="w-16 h-12 object-cover rounded-md shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">The Glass Cabin</p>
                          <p className="text-xs text-slate-500">Cabin · 2 beds</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">Aspen, CO</td>
                    <td className="p-4 text-sm font-semibold text-slate-900 dark:text-slate-100">$420/n</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">Draft</span>
                    </td>
                    <td className="p-4 text-right">
                       <button className="text-slate-400 hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-sm">edit</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-500 flex justify-between items-center bg-slate-50 dark:bg-slate-800/80">
              <p>Showing 2 of 2 properties</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-slate-300 dark:border-slate-600 rounded cursor-not-allowed opacity-50">Prev</button>
                <button className="px-3 py-1 border border-slate-300 dark:border-slate-600 rounded cursor-not-allowed opacity-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyProperties;
