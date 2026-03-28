import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/hms_logo.png";

const navLinks = [
  { label: "Doctors", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Our Staff", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "Cantact Us", href: "#" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLogin = () => navigate("/login");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { font-family: 'Sora', 'DM Sans', sans-serif; box-sizing: border-box; }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-animate { animation: slideDown 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(37,99,235,0.45); }
        .btn-secondary { transition: all 0.3s ease; border: 2px solid rgba(37,99,235,0.2); }
        .btn-secondary:hover { background: rgba(37,99,235,0.06); border-color: rgba(37,99,235,0.4); transform: translateY(-2px); }
        .nav-link {
          position: relative; transition: color 0.2s ease;
          color: #475569; font-size: 0.8rem; font-weight: 500;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          border-radius: 2px; transition: width 0.3s ease;
        }
        .nav-link:hover { color: #2563eb; }
        .nav-link:hover::after { width: 100%; }
        .mobile-menu { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease; }
        .mobile-menu.open { transform: translateX(0); opacity: 1; }
        .mobile-menu.closed { transform: translateX(-100%); opacity: 0; }
        .glass-nav { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 nav-animate ${
          scrolled
            ? "bg-white/80 shadow-lg shadow-blue-100/40 border-b border-blue-50"
            : "bg-white/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center">
              <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span
              className="text-slate-800 font-bold text-lg tracking-tight hidden sm:block"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              health<span style={{ color: "#2563eb" }}>care</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={handleLogin} className="nav-link px-4 py-2 text-sm">
              Sign In
            </button>
            <button
              onClick={handleLogin}
              className="btn-primary text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              Sign Up
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-xl hover:bg-blue-50 transition active:scale-90"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu fixed inset-0 z-[100] flex flex-col bg-white/95 backdrop-blur-xl px-6 py-8 gap-6 md:hidden ${
          open ? "open" : "closed pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-slate-800 font-bold text-xl" style={{ fontFamily: "'Sora', sans-serif" }}>
            health<span style={{ color: "#2563eb" }}>care</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-2 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-700 font-medium text-base hover:text-blue-600 transition border-b border-slate-100 pb-4"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <button
            onClick={() => { setOpen(false); handleLogin(); }}
            className="btn-primary text-white py-3 rounded-full font-semibold text-sm"
          >
            Sign Up
          </button>
          <button
            onClick={() => { setOpen(false); handleLogin(); }}
            className="btn-secondary bg-white text-slate-700 py-3 rounded-full font-semibold text-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};