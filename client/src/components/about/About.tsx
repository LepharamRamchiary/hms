import { useEffect, useState } from "react";

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "200+", label: "Specialist Doctors" },
  { value: "50K+", label: "Patients Served" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: "🩺",
    title: "Patient First",
    desc: "Every decision we make starts with the question: what is best for the patient? Care, dignity, and compassion are non-negotiable.",
  },
  {
    icon: "🔬",
    title: "Medical Excellence",
    desc: "We uphold the highest clinical standards through continuous learning, advanced technology, and evidence-based practices.",
  },
  {
    icon: "🤝",
    title: "Trusted Partnership",
    desc: "We build lasting relationships with patients and their families — transparent, honest, and always available when it matters most.",
  },
  {
    icon: "🌱",
    title: "Continuous Growth",
    desc: "Healthcare evolves rapidly. We invest in our people, our systems, and our infrastructure to stay ahead for our patients.",
  },
];

const team = [
  { name: "Dr. Ananya Sharma", role: "Chief Medical Officer", emoji: "👩‍⚕️" },
  { name: "Dr. Rahul Verma", role: "Head of Cardiology", emoji: "👨‍⚕️" },
  { name: "Dr. Priya Nair", role: "Head of Neurology", emoji: "👩‍⚕️" },
  { name: "Dr. Amir Khan", role: "Head of Paediatrics", emoji: "👨‍⚕️" },
];

const StarIcon = () => (
  <svg
    className="w-3 h-3 text-amber-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function About() {
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
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 16px rgba(37,99,235,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        .font-sora { font-family: 'Sora', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }

        .blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; animation: floatY 6s ease-in-out infinite; }
        .dot-pattern { background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px); background-size: 28px 28px; }

        .animate-slide-left { animation: slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-slide-up   { animation: slideInUp  0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-scale-in   { animation: scaleIn    0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-float      { animation: floatY 4s ease-in-out infinite; }
        .pulse-ring         { animation: pulse-ring 2s infinite; }
      `}</style>

      <div className="font-sora min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100 text-slate-800">
        {/* ── HERO BANNER ── */}
        <section
          className="relative overflow-hidden flex items-center bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100"
          style={{
            padding:
              "clamp(80px,12vw,140px) clamp(20px,6vw,80px) clamp(60px,8vw,100px)",
            minHeight: "52vh",
          }}
        >
          {/* Blobs */}
          <div
            className="blob absolute"
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
            className="blob absolute"
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
            className="dot-pattern absolute inset-0 opacity-20"
            style={{ zIndex: 0 }}
          />

          {/* Decorative watermark */}
          <div
            className="absolute select-none pointer-events-none"
            style={{
              right: "-1%",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "clamp(100px,18vw,220px)",
              fontWeight: 800,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(37,99,235,0.06)",
              lineHeight: 1,
              zIndex: 0,
            }}
          >
            HMS
          </div>

          {/* Hero content */}
          <div
            className={`relative z-10 max-w-2xl ${loaded ? "animate-slide-left" : "opacity-0"}`}
          >
            <h1
              className="font-bold text-slate-800 mb-5"
              style={{
                fontSize: "clamp(2.2rem,6vw,4.8rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              <span className="block">Your Health,</span>
              <span className="block text-slate-700">Our Story.</span>
              <span
                className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                style={{ fontSize: "clamp(1.3rem,3.5vw,2.5rem)" }}
              >
                15 Years of Trusted Care.
              </span>
            </h1>

            <p
              className="font-dm text-slate-500 leading-relaxed mb-8"
              style={{ fontSize: "clamp(0.95rem,2vw,1.125rem)", maxWidth: 480 }}
            >
              For over 15 years, we've been at the forefront of modern medicine
              — combining compassionate care with cutting-edge technology to
              serve every patient who walks through our doors.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                Follow
              </span>
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm font-medium text-slate-500 transition-all duration-200 hover:text-blue-600 hover:-translate-y-0.5"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section
          className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-[0_8px_32px_rgba(37,99,235,0.3)]"
          style={{ padding: "clamp(24px,4vw,40px) clamp(20px,6vw,80px)" }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="font-bold text-white"
                  style={{
                    fontSize: "clamp(1.8rem,4vw,2.8rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
                <div className="font-dm text-xs font-medium mt-1 tracking-wide text-white/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MISSION ── */}
        <section
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(56px,8vw,100px) clamp(20px,6vw,48px)" }}
        >
          {/* Section tag */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
            <span className="inline-block w-6 h-px bg-blue-600" />
            Our Mission
          </div>

          <h2
            className="font-bold text-slate-800"
            style={{
              fontSize: "clamp(1.8rem,4vw,3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Why we{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              exist
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-10">
            {/* Visual card */}
            <div
              className="animate-float animate-scale-in relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-indigo-50 to-indigo-100 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 24px 64px rgba(37,99,235,0.15)",
                animationDelay: "0.2s",
              }}
            >
              <div
                className="blob absolute"
                style={{
                  width: "55%",
                  height: "55%",
                  background:
                    "radial-gradient(circle, rgba(147,197,253,0.5) 0%, rgba(196,181,253,0.2) 100%)",
                  top: "10%",
                  left: "10%",
                }}
              />
              <div
                className="blob absolute"
                style={{
                  width: "40%",
                  height: "40%",
                  background:
                    "radial-gradient(circle, rgba(196,181,253,0.4) 0%, transparent 70%)",
                  bottom: "10%",
                  right: "10%",
                  animationDelay: "2s",
                }}
              />
              {/* <span
                className="relative z-10 select-none font-bold leading-none"
                style={{ fontSize: "clamp(80px,14vw,140px)", color: "rgba(37,99,235,0.12)" }}
              >
                ♥
              </span> */}
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&auto=format&fit=crop&q=60"
                alt="image"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />

              {/* Est. badge */}
              <div
                className="absolute bottom-4 right-4 bg-white rounded-2xl px-4 py-2 flex flex-col items-center min-w-[80px]"
                style={{ boxShadow: "0 12px 40px rgba(37,99,235,0.15)" }}
              >
                <span className="text-xl font-bold text-slate-800">Est.</span>
                <span className="font-dm text-xs text-slate-500 font-medium">
                  2009
                </span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div
              className="flex flex-col gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p
                className="font-dm text-slate-500 leading-[1.8]"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.05rem)" }}
              >
                We founded this hospital with a single belief: that every
                person, regardless of background, deserves access to world-class
                medical care. That belief hasn't changed — it's the foundation
                of everything we do.
              </p>
              <p
                className="font-dm text-slate-500 leading-[1.8]"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.05rem)" }}
              >
                Our Hospital Management System was built to eliminate the
                friction between patients and the care they need — reducing wait
                times, streamlining communication, and putting the right
                information in the right hands at the right moment.
              </p>
              <blockquote
                className="mt-2 pl-5 text-slate-700 italic border-l-[3px] border-blue-600 leading-[1.65]"
                style={{ fontSize: "clamp(1rem,1.8vw,1.18rem)" }}
              >
                "Medicine is not just science — it's the art of understanding
                another person's pain and responding with skill, speed, and
                humanity."
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section
          className="bg-gradient-to-br from-indigo-50 to-blue-50"
          style={{ padding: "clamp(48px,8vw,100px) clamp(20px,6vw,48px)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
              <span className="inline-block w-6 h-px bg-blue-600" />
              Our Values
            </div>

            <h2
              className="font-bold text-slate-800 mb-10"
              style={{
                fontSize: "clamp(1.8rem,4vw,3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              What we stand{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                for
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-blue-50 p-6 cursor-default animate-scale-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(37,99,235,0.13)]"
                  style={{
                    boxShadow: "0 4px 20px rgba(37,99,235,0.07)",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br from-blue-100 to-violet-100">
                    {v.icon}
                  </div>
                  <div className="font-semibold text-slate-800 text-sm mb-2">
                    {v.title}
                  </div>
                  <p className="font-dm text-xs leading-relaxed text-slate-500">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(48px,8vw,100px) clamp(20px,6vw,48px)" }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
            <span className="inline-block w-6 h-px bg-blue-600" />
            Our People
          </div>

          <h2
            className="font-bold text-slate-800 mb-10"
            style={{
              fontSize: "clamp(1.8rem,4vw,3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              team
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center cursor-default animate-scale-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(37,99,235,0.14)]"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.09)",
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 bg-gradient-to-br from-blue-100 to-violet-100">
                  {member.emoji}
                </div>
                <div className="font-bold text-slate-800 text-xs mb-1">
                  {member.name}
                </div>
                <div className="font-dm text-xs font-medium text-blue-600 mb-2">
                  {member.role}
                </div>
                <div className="flex gap-0.5 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section
          className="text-center bg-gradient-to-r from-blue-600 to-blue-700"
          style={{
            padding: "clamp(40px,6vw,80px) clamp(20px,6vw,80px)",
            boxShadow: "0 -8px 40px rgba(37,99,235,0.18)",
          }}
        >
          <h2
            className="font-bold text-white mb-3"
            style={{
              fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to experience better care?
          </h2>
          <p
            className="font-dm mb-8 mx-auto text-white/70"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", maxWidth: 440 }}
          >
            Book your appointment today and let our team take care of the rest.
          </p>

          <a
            href="/login"
            className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-7 py-3.5 rounded-full text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
          >
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white bg-gradient-to-br from-blue-600 to-blue-700">
              +
            </span>
            Book Appointment
          </a>
        </section>
      </div>
    </>
  );
}
