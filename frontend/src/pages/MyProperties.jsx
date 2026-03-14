import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import api from '../api';

const MyProperties = () => {
  const [properties, setProperties] = useState([]); // Empty currently
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch properties belonging to the logged-in user
    const fetchMyProperties = async () => {
      try {
        setLoading(true);
        const response = await api.get('properties/my-listings/'); 
        setProperties(response.data);
      } catch (err) {
        console.error('Failed to fetch user properties', err);
        setError('Could not load your properties.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMyProperties();
  }, []);
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
                  {loading ? (
                    <tr>
                       <td colSpan="5" className="p-10 text-center text-primary">
                          <span className="material-symbols-outlined text-4xl animate-spin">refresh</span>
                       </td>
                    </tr>
                  ) : error ? (
                    <tr>
                       <td colSpan="5" className="p-10 text-center text-red-500">
                          <p>{error}</p>
                       </td>
                    </tr>
                  ) : properties.length === 0 ? (
                    <tr>
                       <td colSpan="5" className="p-10 text-center text-slate-500">
                          <span className="material-symbols-outlined text-4xl mb-2 opacity-50">holiday_village</span>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">No properties listed</p>
                          <p className="text-sm">You haven't added any properties yet. Click "Create new listing" to get started.</p>
                       </td>
                    </tr>
                  ) : properties.map(prop => (
                    <tr key={prop.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <img src={prop.image_url || prop.img || "https://placehold.co/100"} alt={prop.title} className="w-16 h-12 object-cover rounded-md shrink-0" />
                          <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">{prop.title}</p>
                            <p className="text-xs text-slate-500">{prop.property_type || "Property"} · {prop.bedrooms || 0} beds</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">{prop.city || prop.location}</td>
                      <td className="p-4 text-sm font-semibold text-slate-900 dark:text-slate-100">${prop.price}/n</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${prop.is_active !== false ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>
                          {prop.is_active !== false ? "Active" : "Draft"}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                         <button className="text-slate-400 hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-sm">edit</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-500 flex justify-between items-center bg-slate-50 dark:bg-slate-800/80">
              <p>Showing {properties.length} properties</p>
              <div className="flex gap-2">
                <button className={`px-3 py-1 border border-slate-300 dark:border-slate-600 rounded ${properties.length === 0 ? 'cursor-not-allowed opacity-50' : ''}`}>Prev</button>
                <button className={`px-3 py-1 border border-slate-300 dark:border-slate-600 rounded ${properties.length === 0 ? 'cursor-not-allowed opacity-50' : ''}`}>Next</button>
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
