import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wishlist = () => {
  const [wishlists] = useState([]); // Empty currently

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-10 w-full">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Wishlists</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlists.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-50">favorite_border</span>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">No Wishlists created yet</h3>
              <p>As you search, tap the heart icon to save your favorite homes.</p>
            </div>
          ) : wishlists.map((list) => (
             <div key={list.id} className="group cursor-pointer">
                {/* Dynamically render wishlist items here later */}
             </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
