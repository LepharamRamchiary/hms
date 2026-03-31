import { useEffect, useState } from "react";
import Doctor from "../../assets/new.png";

const floatingCards = [
  { id: 1, icon: "📞", style: "top-[10%] right-[35%]", delay: "0s"   },
  { id: 2, icon: "🎥", style: "top-[40%] left-[25%]",  delay: "0.3s" },
  { id: 3, icon: "✉️", style: "top-[40%] right-[10%]", delay: "0.6s" },
];

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .float-card { animation: floatY 3s ease-in-out infinite; }
        .blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: floatY 6s ease-in-out infinite;
        }
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
        .social-link { transition: color 0.2s, transform 0.2s; }
        .social-link:hover { color: #2563eb; transform: translateY(-2px); }
        .dot-pattern {
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px;
        }
        @media (max-width: 1023px) { .float-card { display: none; } }
      `}</style>

      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center pt-16"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%)",
        }}
      >
        {/* Blob 1 */}
        <div
          className="absolute blob"
          style={{
            width: "clamp(200px,50vw,520px)",
            height: "clamp(200px,50vw,520px)",
            background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.15) 100%)",
            top: "2%",
            right: "-8%",
            zIndex: 0,
          }}
        />
        {/* Blob 2 */}
        <div
          className="absolute blob"
          style={{
            width: "clamp(120px,30vw,320px)",
            height: "clamp(120px,30vw,320px)",
            background: "radial-gradient(circle, rgba(167,243,208,0.2) 0%, rgba(147,197,253,0.1) 100%)",
            bottom: "8%",
            left: "3%",
            zIndex: 0,
            animationDelay: "2s",
          }}
        />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-20 dot-pattern" style={{ zIndex: 0 }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div className={`flex flex-col gap-5 sm:gap-6 ${loaded ? "animate-slide-left" : "opacity-0"}`}>
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
              style={{ fontSize: "clamp(1.9rem, 5vw, 3.75rem)", letterSpacing: "-0.02em" }}
            >
              <span className="block">Your Health</span>
              <span className="block text-slate-700">Our Priority</span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(1.3rem, 3.5vw, 2.25rem)",
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
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
                <a key={s} href="#" className="social-link text-sm font-medium text-slate-500">
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
            {/* Circle bg */}
            <div
              className="absolute"
              style={{
                width: "clamp(220px,70%,440px)",
                height: "clamp(220px,70%,440px)",
                borderRadius: "50%",
                background: "radial-gradient(circle at 40% 40%, rgba(147,197,253,0.45) 0%, rgba(219,234,254,0.3) 60%, transparent 100%)",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />

            {/* Doctor image */}
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

            {/* Floating icon cards */}
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

            {/* Review card */}
            <div className="review-card absolute z-20" style={{ bottom: "8%", right: "2%" }}>
              <div
                className="bg-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex flex-col items-center gap-1"
                style={{ boxShadow: "0 12px 40px rgba(37,99,235,0.15)", minWidth: 95 }}
              >
                <span className="text-xl sm:text-2xl font-bold text-slate-800">1600+</span>
                <span className="text-xs text-slate-500 font-medium">Reviews</span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Dr. John card */}
            <div className="doc-card absolute z-20" style={{ bottom: "28%", left: "0%" }}>
              <div
                className="bg-white rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.10)", minWidth: 140 }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}
                >
                  👨‍⚕️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Dr. John</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
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