

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-primary/10 pt-16 pb-10 px-4 md:px-10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">Support</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a className="hover:underline" href="#">Help Centre</a></li>
              <li><a className="hover:underline" href="#">StayCover</a></li>
              <li><a className="hover:underline" href="#">Anti-discrimination</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">Hosting</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a className="hover:underline" href="#">StayNest your home</a></li>
              <li><a className="hover:underline" href="#">StayCover for Hosts</a></li>
              <li><a className="hover:underline" href="#">Hosting resources</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">StayNest</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a className="hover:underline" href="#">Newsroom</a></li>
              <li><a className="hover:underline" href="#">New features</a></li>
              <li><a className="hover:underline" href="#">Careers</a></li>
              <li><a className="hover:underline" href="#">Investors</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span>© {new Date().getFullYear()} StayNest, Inc.</span>
            <span className="hidden md:inline">·</span>
            <a className="hover:underline" href="#">Privacy</a>
            <span className="hidden md:inline">·</span>
            <a className="hover:underline" href="#">Terms</a>
            <span className="hidden md:inline">·</span>
            <a className="hover:underline" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
