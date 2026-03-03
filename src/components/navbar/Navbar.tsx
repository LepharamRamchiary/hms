// Navbar.jsx - Responsive version
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/hms_logo.png";
import Doctor from "../../assets/new.png";

const floatingCards = [
  { id: 1, icon: "📞", style: "top-[12%] right-[22%]", delay: "0s" },
  { id: 2, icon: "🎥", style: "top-[28%] right-[8%]", delay: "0.3s" },
  { id: 3, icon: "✉️", style: "top-[48%] right-[18%]", delay: "0.6s" },
];

const navLinks = [
  { label: "About a PHP", href: "#" },
  { label: "What a Tee", href: "#" },
  { label: "All About", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Before & After", href: "#" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
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
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatX {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(8px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 16px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .float-card { animation: floatY 3s ease-in-out infinite; }
        .blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: floatY 6s ease-in-out infinite;
        }
        .nav-animate { animation: slideDown 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-slide-left { animation: slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-slide-right { animation: slideInRight 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .review-card {
          animation: scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.9s both,
                     floatY 4s ease-in-out 1.5s infinite;
        }
        .doc-card {
          animation: scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) 1s both,
                     floatX 5s ease-in-out 1.5s infinite;
        }
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
        .social-link { transition: color 0.2s, transform 0.2s; }
        .social-link:hover { color: #2563eb; transform: translateY(-2px); }
        .mobile-menu { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease; }
        .mobile-menu.open { transform: translateX(0); opacity: 1; }
        .mobile-menu.closed { transform: translateX(-100%); opacity: 0; }
        .glass-nav { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
        .dot-pattern {
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px;
        }
        /* Hide floating icon cards on tablet/mobile to avoid overflow clutter */
        @media (max-width: 1023px) { .float-card { display: none; } }
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
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
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
            <button
              onClick={handleLogin}
              className="nav-link px-4 py-2 text-sm"
            >
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
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#334155"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu fixed inset-0 z-[100] flex flex-col bg-white/95 backdrop-blur-xl px-6 py-8 gap-6 md:hidden ${open ? "open" : "closed pointer-events-none"}`}
      >
        <div className="flex justify-between items-center">
          <span
            className="text-slate-800 font-bold text-xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            health<span style={{ color: "#2563eb" }}>care</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#334155"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
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
            onClick={() => {
              setOpen(false);
              handleLogin();
            }}
            className="btn-primary text-white py-3 rounded-full font-semibold text-sm"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              setOpen(false);
              handleLogin();
            }}
            className="btn-secondary bg-white text-slate-700 py-3 rounded-full font-semibold text-sm"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center pt-16"
        style={{
          background:
            "linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%)",
        }}
      >
        <div
          className="absolute blob"
          style={{
            width: "clamp(200px,50vw,520px)",
            height: "clamp(200px,50vw,520px)",
            background:
              "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.15) 100%)",
            top: "2%",
            right: "-8%",
            zIndex: 0,
          }}
        />
        <div
          className="absolute blob"
          style={{
            width: "clamp(120px,30vw,320px)",
            height: "clamp(120px,30vw,320px)",
            background:
              "radial-gradient(circle, rgba(167,243,208,0.2) 0%, rgba(147,197,253,0.1) 100%)",
            bottom: "8%",
            left: "3%",
            zIndex: 0,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute inset-0 opacity-20 dot-pattern"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <div
            className={`flex flex-col gap-5 sm:gap-6 ${loaded ? "animate-slide-left" : "opacity-0"}`}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit"
              style={{
                background: "rgba(37,99,235,0.08)",
                color: "#2563eb",
                border: "1px solid rgba(37,99,235,0.15)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-blue-500 inline-block"
                style={{ animation: "pulse-ring 2s infinite" }}
              />
              Ser Trusted Doctors
            </div>

            <h1
              className="font-bold text-slate-800 leading-[1.1]"
              style={{
                fontSize: "clamp(1.9rem, 5vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">Your Health</span>

              <span className="block text-slate-700">Our Priority</span>

              <span
                className="block"
                style={{
                  fontSize: "clamp(1.3rem, 3.5vw, 2.25rem)",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Book a Doctor in Seconds.
              </span>
            </h1>
            <p
              className="text-slate-500 leading-relaxed max-w-md"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.95rem, 2vw, 1.125rem)",
              }}
            >
              Our skilled doctor offer tremendous experience with wide range of
              diseases to serve the needs of our patients.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <button className="btn-primary text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  +
                </span>
                Book Now
              </button>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 pt-1 flex-wrap">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                Follow
              </span>
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="social-link text-sm font-medium text-slate-500"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative flex justify-center items-end ${loaded ? "animate-slide-right" : "opacity-0"}`}
            style={{ minHeight: "clamp(260px,50vw,520px)" }}
          >
            <div
              className="absolute"
              style={{
                width: "clamp(220px,70%,440px)",
                height: "clamp(220px,70%,440px)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 40% 40%, rgba(147,197,253,0.45) 0%, rgba(219,234,254,0.3) 60%, transparent 100%)",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />

            <div
              className="relative z-10 flex items-end justify-center"
              style={{
                height: "clamp(240px,48vw,460px)",
                width: "clamp(160px,34vw,320px)",
              }}
            >
              <img
                src={Doctor}
                alt="doctor"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            {floatingCards.map((card) => (
              <div
                key={card.id}
                className={`absolute ${card.style} float-card z-20`}
                style={{ animationDelay: card.delay }}
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-xl"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
                >
                  {card.icon}
                </div>
              </div>
            ))}

            <div
              className="review-card absolute z-20"
              style={{ bottom: "8%", right: "2%" }}
            >
              <div
                className="bg-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex flex-col items-center gap-1"
                style={{
                  boxShadow: "0 12px 40px rgba(37,99,235,0.15)",
                  minWidth: 95,
                }}
              >
                <span className="text-xl sm:text-2xl font-bold text-slate-800">
                  1600+
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Reviews
                </span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="doc-card absolute z-20"
              style={{ bottom: "28%", left: "0%" }}
            >
              <div
                className="bg-white rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
                  minWidth: 140,
                }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #dbeafe, #ede9fe)",
                  }}
                >
                  👨‍⚕️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Dr. John</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-2.5 h-2.5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
