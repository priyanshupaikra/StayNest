import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import api from '../api';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [metrics, setMetrics] = useState({ earnings: 0, bookings: 0, rating: "0.00" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Fetch properties to get maybe total earnings or rating (mocking slightly)
        await api.get('properties/my-listings/');


        // Fetch user bookings
        const bookingsResponse = await api.get('bookings/');
        const userBookings = bookingsResponse.data;

        // Calculate metrics
        let totalEarnings = 0;
        let upcomingBookings = 0;

        userBookings.forEach(booking => {
           // For simplicity, just sum total price as earnings if we assume we are host for all properties
           // Alternatively we can use user bookings as user bookings
           totalEarnings += parseFloat(booking.total_price) || 0;
           upcomingBookings += 1; // Assuming all bookings are upcoming
        });

        setMetrics({
          earnings: totalEarnings.toFixed(2),
          bookings: upcomingBookings,
          rating: "4.95" // Just a placeholder, would require reviews API
        });

        // Generate some activities based on bookings
        const generatedActivities = userBookings.slice(0, 5).map(b => ({
          title: `Booking at ${b.property_title}`,
          date: new Date(b.created_at).toLocaleDateString(),
          amount: `$${b.total_price}`
        }));

        setActivities(generatedActivities);

      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-10 w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                J
              </div>
              <div>
                <h2 className="font-bold text-slate-900 dark:text-slate-100">Jane Doe</h2>
                <p className="text-sm text-slate-500">Host Account</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">dashboard</span> Dashboard
              </Link>
              <Link to="/my-properties" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">home</span> My Properties
              </Link>
              <Link to="/add-property" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">add_circle</span> Add Property
              </Link>
              <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors">
                <span className="material-symbols-outlined text-sm">favorite</span> Wishlists
              </Link>
              <button className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors mt-8">
                <span className="material-symbols-outlined text-sm">logout</span> Logout
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content Areas */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Welcome back, Jane</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4 text-slate-500">
                <span className="font-medium text-sm">Monthly Earnings</span>
                <span className="material-symbols-outlined">payments</span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">${metrics.earnings}</p>
              <p className="text-sm text-slate-500 mt-2 font-medium flex items-center gap-1">
                No earnings yet
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4 text-slate-500">
                <span className="font-medium text-sm">Upcoming Bookings</span>
                <span className="material-symbols-outlined">event</span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{metrics.bookings}</p>
              <p className="text-sm text-slate-500 mt-2">No upcoming guests</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4 text-slate-500">
                <span className="font-medium text-sm">Overall Rating</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{metrics.rating}</p>
              <p className="text-sm text-slate-500 mt-2">Based on 0 reviews</p>
            </div>
          </div>

          {/* Recent Activity */}
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Recent Activity</h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="divide-y divide-slate-100 dark:divide-slate-700 border-b border-slate-100 dark:border-slate-700">
              
              {loading ? (
                <div className="p-8 text-center text-slate-500">
                   <span className="material-symbols-outlined animate-spin text-2xl">refresh</span>
                </div>
              ) : activities.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                   <p>No recent activity. All caught up!</p>
                </div>
              ) : activities.map((act, i) => (
                <div key={i} className="flex items-center justify-between gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{act.title}</p>
                    <p className="text-sm text-slate-500">{act.date}</p>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">
                    {act.amount}
                  </div>
                </div>
              ))}

            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-3 text-center">
               <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">View all activity</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
