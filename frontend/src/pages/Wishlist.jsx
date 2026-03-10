import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-10 w-full">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Wishlists</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="group cursor-pointer">
            <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden p-2 grid grid-cols-2 grid-rows-2 gap-2 mb-3 shadow hover:shadow-lg transition-shadow">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy74GjufROuwPPKFk8IaQJA7MZMiOLfQRzsyWdH9rstVEL87Rnz58_iMNG-cSxTDy3V8XXGd8eka9bfvjXgpl2MBOKf9h39uruK1iIQKs0NQZBZc0lmcy7_3Vhm_U5X6E-2DckzwaHG8DrgEx6OPKbLrH2KqpEZ2aDS5HvqaRON30kpwlPb-6Mct4qOSJrd1kafT5oZPe2ssI0aq3SHigQDtdgVGMbZqSqeFDQjPupg_GeZHElWejBQ9-uqCIaG0Ji6jtSEJPP5jxA" className="w-full h-full object-cover rounded-tl-xl" alt="" />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhLz5FQv2gMWOrOG-VQHnSgf19EB0KBY6XglxSDLFHEAkt9SHnoDlfMv4mFXdB5rgKy1ElksR6EwJMU-bWbLAaCx8QAB5sozpz8bUVhNbytCj5q-Jzu1vit1INH0RXuvQzUYODD7TuGCLvWViagb1SNa_-w-6R04kh0oyyqHnUvPdurtJJmVZHrSeaXr-cP21Mne3mGlEQ1pLSkN8ThLxLyAnknYXquqiF0io3g8UAPP2476b6uX5Ot88HwOdQ9yTZSWctil9cezjb" className="w-full h-full object-cover rounded-tr-xl" alt="" />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl2MqaQhNDPIO1oeYOV5hMelFjRm4SWmykmOfLhWdT8JKROyZ2KGimERtVZ1taDjsM7UtihbRbPehs2JvJR-KJns_9lR-_WXwLAXYTFgKtjcP_gs9Y-mSfmp4_2jjbIHyumL3jZxYojN0SAMA8ZxpK8L6I5b6_WllTNITe1A42ntXH6PY_SNNxudnm-r_JgeCMn9M0poHiR-EIx5ar5Utyg7A91QQX0bXRyITqLYulhrrm_x9CL4MI9G9mlD59macL9dCei89-ek0o" className="w-full h-full object-cover rounded-bl-xl" alt="" />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClprEo8Pxg9TBHpdJVJ7q4mL6Pq1Khu0Jw53soxXw1fi2KIqiZB1GfQ0oFkhqVAu-2y5-3vcm4G__M6VQL9lQqYAGqd3mhOnY08n3Kx-VOj9RoGu94xyegnsSX2LoEyIqYZjGPXn1rLbi8uCfb2PrOIFWKEj5uYc4iIC6niDTQmvvJM6zdQqr0GOuaATU0CO3DIZF92YhNoMsDJoum5QogqsYXkYUPRAs0bbLluxezVQNhsUWUNDafuHPJ7_zNB1abX5UkdSlK7F_f" className="w-full h-full object-cover rounded-br-xl" alt="" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Summer Trip 2026</h3>
            <p className="text-slate-500">4 saved</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden p-2 grid grid-cols-2 grid-rows-2 gap-2 mb-3 shadow hover:shadow-lg transition-shadow">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiwfD6jm2C3zViuo-TxSZovsUF9s9KElBtyIRdzodpQEEoOIbNwD-lDaWl3vclswbECCTWkh_Tazs352xhjr1GwM1Df5y8_TJwxwW8rkHBOGjTR5MDz9TbTE3OChyN906Bs7vOtZo242YhowJEXBn_H7yoIXr-Vp1Vgs1eFj5Tzx2g-1a1lIV2q8M52VzbIDItSxAwvu0t7nKl_d9MIcu4bauD9v_AvJh3gEz9YXu5tzs9GTBE5FK88sylMZLOSuKNBuHNbGK9eJIH" className="col-span-2 row-span-2 w-full h-full object-cover rounded-xl" alt="" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Cabin weekend</h3>
            <p className="text-slate-500">1 saved</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
