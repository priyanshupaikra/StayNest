
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary shrink-0">
          <span className="material-symbols-outlined text-3xl font-bold">nest_eco_leaf</span>
          <h1 className="text-xl font-bold tracking-tight hidden sm:block">StayNest</h1>
        </Link>
        
        {/* Search Bar */}
        <div onClick={() => navigate('/search')} className="hidden lg:flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-2 px-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="px-4 border-r border-slate-200 dark:border-slate-700">
            <p className="text-xs font-bold uppercase text-slate-500">Location</p>
            <p className="text-sm text-slate-900 dark:text-slate-100">Where to?</p>
          </div>
          <div className="px-4 border-r border-slate-200 dark:border-slate-700">
            <p className="text-xs font-bold uppercase text-slate-500">Dates</p>
            <p className="text-sm text-slate-900 dark:text-slate-100">Add dates</p>
          </div>
          <div className="px-4 flex items-center gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-slate-500">Guests</p>
              <p className="text-sm text-slate-900 dark:text-slate-100">Add guests</p>
            </div>
            <div className="bg-primary text-white p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
          </div>
        </div>

        {/* Mobile Search Icon */}
        <div className="lg:hidden flex-1 max-w-xs">
          <div onClick={() => navigate('/search')} className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 shadow-sm cursor-pointer">
            <span className="material-symbols-outlined text-primary">search</span>
            <span className="text-sm text-slate-500">Search destinations</span>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-3">
          <Link to="/register" className="hidden md:block text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-full transition-colors">
            Become a host
          </Link>
          <Link to="/login" className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-full p-1 pl-3 hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-slate-800">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">menu</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
