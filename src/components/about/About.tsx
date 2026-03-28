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
  { name: "Dr. Ananya Sharma", role: "Chief Medical Officer",  emoji: "👩‍⚕️" },
  { name: "Dr. Rahul Verma",   role: "Head of Cardiology",     emoji: "👨‍⚕️" },
  { name: "Dr. Priya Nair",    role: "Head of Neurology",      emoji: "👩‍⚕️" },
  { name: "Dr. Amir Khan",     role: "Head of Paediatrics",    emoji: "👨‍⚕️" },
];

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

        .about-root {
          font-family: 'Sora', sans-serif;
          background: linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%);
          color: #1e293b;
          overflow-x: hidden;
        }
        .blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: floatY 6s ease-in-out infinite;
        }
        .dot-pattern {
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .animate-slide-left { animation: slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-slide-up   { animation: slideInUp  0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-scale-in   { animation: scaleIn    0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-float      { animation: floatY 4s ease-in-out infinite; }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.45);
        }

        .float-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.09);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .float-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(37,99,235,0.14);
        }

        .value-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(37,99,235,0.07);
          border: 1px solid rgba(37,99,235,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(37,99,235,0.13);
        }

        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(37,99,235,0.08);
          color: #2563eb;
          border: 1px solid rgba(37,99,235,0.15);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #2563eb;
          animation: pulse-ring 2s infinite;
          display: inline-block;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 12px;
        }
        .section-tag::before {
          content: '';
          width: 24px; height: 1.5px;
          background: #2563eb;
          display: inline-block;
        }

        .mission-visual {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(37,99,235,0.15);
          transition: transform 0.4s ease;
          background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
          border: 1px solid rgba(37,99,235,0.12);
        }
        .mission-visual:hover { transform: scale(1.02); }

        .social-link {
          transition: color 0.2s, transform 0.2s;
        }
        .social-link:hover {
          color: #2563eb;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="about-root min-h-screen">

        {/* ── HERO BANNER ── */}
        <section
          className="relative overflow-hidden flex items-center"
          style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%)",
            padding: "clamp(80px,12vw,140px) clamp(20px,6vw,80px) clamp(60px,8vw,100px)",
            minHeight: "52vh",
          }}
        >
          {/* Blobs — exact same as Hero */}
          <div className="absolute blob" style={{ width: "clamp(200px,50vw,520px)", height: "clamp(200px,50vw,520px)", background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.15) 100%)", top: "2%", right: "-8%", zIndex: 0 }} />
          <div className="absolute blob" style={{ width: "clamp(120px,30vw,320px)", height: "clamp(120px,30vw,320px)", background: "radial-gradient(circle, rgba(167,243,208,0.2) 0%, rgba(147,197,253,0.1) 100%)", bottom: "8%", left: "3%", zIndex: 0, animationDelay: "2s" }} />
          <div className="absolute inset-0 opacity-20 dot-pattern" style={{ zIndex: 0 }} />

          {/* Decorative text */}
          <div
            className="absolute select-none pointer-events-none"
            style={{ right: "-1%", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(100px,18vw,220px)", fontWeight: 800, color: "transparent", WebkitTextStroke: "1.5px rgba(37,99,235,0.06)", lineHeight: 1, zIndex: 0 }}
          >
            HMS
          </div>

          <div className={`relative z-10 max-w-2xl ${loaded ? "animate-slide-left" : "opacity-0"}`}>
            {/* Eyebrow badge — identical to Hero's "Ser Trusted Doctors" pill */}
            <div className="eyebrow-badge mb-6">
              <span className="eyebrow-dot" />
              About Us
            </div>

            <h1
              className="font-bold text-slate-800 mb-5"
              style={{ fontSize: "clamp(2.2rem,6vw,4.8rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
            >
              <span className="block">Your Health,</span>
              <span className="block text-slate-700">Our Story.</span>
              <span className="block gradient-text" style={{ fontSize: "clamp(1.3rem,3.5vw,2.5rem)" }}>
                15 Years of Trusted Care.
              </span>
            </h1>

            <p
              className="text-slate-500 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.95rem,2vw,1.125rem)", maxWidth: 480 }}
            >
              For over 15 years, we've been at the forefront of modern medicine —
              combining compassionate care with cutting-edge technology to serve
              every patient who walks through our doors.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Follow</span>
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <a key={s} href="#" className="social-link text-sm font-medium text-slate-500">{s}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAR — same blue gradient as Hero btn-primary ── */}
        <section
          style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", padding: "clamp(24px,4vw,40px) clamp(20px,6vw,80px)", boxShadow: "0 8px 32px rgba(37,99,235,0.3)" }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="font-bold text-white" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="text-xs font-medium mt-1 tracking-wide" style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="max-w-7xl mx-auto" style={{ padding: "clamp(56px,8vw,100px) clamp(20px,6vw,48px)" }}>
          <span className="section-tag">Our Mission</span>
          <h2 className="font-bold text-slate-800" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Why we <span className="gradient-text">exist</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-10">
            {/* Visual card — same family as hero floating white cards */}
            <div
              className="mission-visual animate-float animate-scale-in relative"
              style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "0.2s" }}
            >
              <div className="absolute blob" style={{ width: "55%", height: "55%", background: "radial-gradient(circle, rgba(147,197,253,0.5) 0%, rgba(196,181,253,0.2) 100%)", top: "10%", left: "10%" }} />
              <div className="absolute blob" style={{ width: "40%", height: "40%", background: "radial-gradient(circle, rgba(196,181,253,0.4) 0%, transparent 70%)", bottom: "10%", right: "10%", animationDelay: "2s" }} />
              <span className="relative z-10 select-none" style={{ fontSize: "clamp(80px,14vw,140px)", color: "rgba(37,99,235,0.12)", fontWeight: 800, lineHeight: 1 }}>♥</span>
              {/* Est. badge — same style as Hero review card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl px-4 py-2 flex flex-col items-center" style={{ boxShadow: "0 12px 40px rgba(37,99,235,0.15)", minWidth: 80 }}>
                <span className="text-xl font-bold text-slate-800">Est.</span>
                <span className="text-xs text-slate-500 font-medium">2009</span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.8 }}>
                We founded this hospital with a single belief: that every person, regardless of background, deserves access to world-class medical care. That belief hasn't changed — it's the foundation of everything we do.
              </p>
              <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.8 }}>
                Our Hospital Management System was built to eliminate the friction between patients and the care they need — reducing wait times, streamlining communication, and putting the right information in the right hands at the right moment.
              </p>
              <blockquote className="mt-2 pl-5 text-slate-700 italic" style={{ borderLeft: "3px solid #2563eb", fontSize: "clamp(1rem,1.8vw,1.18rem)", lineHeight: 1.65 }}>
                "Medicine is not just science — it's the art of understanding another person's pain and responding with skill, speed, and humanity."
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0f7ff 100%)", padding: "clamp(48px,8vw,100px) clamp(20px,6vw,48px)" }}>
          <div className="max-w-7xl mx-auto">
            <span className="section-tag">Our Values</span>
            <h2 className="font-bold text-slate-800 mb-10" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              What we stand <span className="gradient-text">for</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <div key={i} className="value-card p-6 cursor-default animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Same gradient avatar container as Hero's Dr. John card */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}>
                    {v.icon}
                  </div>
                  <div className="font-semibold text-slate-800 text-sm mb-2">{v.title}</div>
                  <p className="text-xs leading-relaxed text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="max-w-7xl mx-auto" style={{ padding: "clamp(48px,8vw,100px) clamp(20px,6vw,48px)" }}>
          <span className="section-tag">Our People</span>
          <h2 className="font-bold text-slate-800 mb-10" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Meet the <span className="gradient-text">team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <div key={i} className="float-card p-6 text-center cursor-default animate-scale-in" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                {/* Same avatar style as Hero's Dr. John floating card */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}>
                  {member.emoji}
                </div>
                <div className="font-bold text-slate-800 text-xs mb-1">{member.name}</div>
                <div className="text-xs font-medium text-blue-600 mb-2">{member.role}</div>
                {/* Stars — same as Hero review card */}
                <div className="flex gap-0.5 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section
          className="text-center"
          style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", padding: "clamp(40px,6vw,80px) clamp(20px,6vw,80px)", boxShadow: "0 -8px 40px rgba(37,99,235,0.18)" }}
        >
          <h2 className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)", letterSpacing: "-0.02em" }}>
            Ready to experience better care?
          </h2>
          <p className="mb-8 mx-auto" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.9rem,1.5vw,1rem)", maxWidth: 440 }}>
            Book your appointment today and let our team take care of the rest.
          </p>
          {/* Same rounded-full white-bg button as the Hero "Book Now" btn */}
          <a
            href="/login"
            className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-7 py-3.5 rounded-full"
            style={{ color: "#2563eb", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
          >
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}>+</span>
            Book Appointment
          </a>
        </section>

      </div>
    </>
  );
}