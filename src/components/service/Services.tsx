import { useState } from "react";

const services = [
  {
    icon: "🫀",
    title: "Cardiology",
    category: "Specialist Care",
    desc: "Advanced diagnosis and treatment of heart conditions including ECG, echocardiography, angioplasty, and cardiac rehabilitation.",
    features: [
      "ECG & Stress Tests",
      "Echocardiography",
      "Angioplasty",
      "Cardiac Rehab",
    ],
    available: true,
    tag: "Most Booked",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    icon: "🧠",
    title: "Neurology",
    category: "Specialist Care",
    desc: "Comprehensive care for brain, spine, and nervous system disorders including epilepsy, stroke, Parkinson's, and migraines.",
    features: [
      "EEG & MRI",
      "Stroke Management",
      "Epilepsy Treatment",
      "Memory Clinic",
    ],
    available: true,
    tag: "Expert Team",
    tagColor: "bg-violet-100 text-violet-600",
  },
  {
    icon: "🦴",
    title: "Orthopaedics",
    category: "Surgical Care",
    desc: "Full spectrum orthopaedic services from fracture management to joint replacement, sports injuries, and spine surgery.",
    features: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Fracture Care",
    ],
    available: true,
    tag: "24/7 Emergency",
    tagColor: "bg-rose-100 text-rose-600",
  },
  {
    icon: "👶",
    title: "Paediatrics",
    category: "Family Care",
    desc: "Dedicated child health services from newborn care to adolescent medicine, vaccination programs, and developmental assessments.",
    features: [
      "Newborn Care",
      "Vaccination",
      "Developmental Assessment",
      "Nutrition Counselling",
    ],
    available: true,
    tag: "Child Friendly",
    tagColor: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: "🔬",
    title: "Diagnostics & Lab",
    category: "Diagnostic Services",
    desc: "State-of-the-art diagnostic lab with 500+ tests, radiology, MRI, CT scan, PET scan, and digital X-ray under one roof.",
    features: ["500+ Lab Tests", "MRI & CT Scan", "Digital X-Ray", "PET Scan"],
    available: true,
    tag: "Same Day Results",
    tagColor: "bg-amber-100 text-amber-600",
  },
  {
    icon: "🩺",
    title: "General Medicine",
    category: "Primary Care",
    desc: "Comprehensive outpatient consultations, health checkups, chronic disease management, and preventive care programs.",
    features: [
      "Health Checkups",
      "Chronic Disease Mgmt",
      "Preventive Care",
      "Vaccinations",
    ],
    available: true,
    tag: "Walk-in Welcome",
    tagColor: "bg-sky-100 text-sky-600",
  },
  {
    icon: "🌸",
    title: "Gynaecology & Obstetrics",
    category: "Women's Health",
    desc: "Complete women's healthcare from routine screenings, antenatal care, high-risk pregnancy management, and minimally invasive surgery.",
    features: [
      "Antenatal Care",
      "High-Risk Pregnancy",
      "Laparoscopy",
      "Fertility Counselling",
    ],
    available: true,
    tag: "Women's Care",
    tagColor: "bg-pink-100 text-pink-600",
  },
  {
    icon: "👁️",
    title: "Ophthalmology",
    category: "Specialist Care",
    desc: "Advanced eye care including cataract surgery, LASIK, glaucoma treatment, retina surgery, and paediatric ophthalmology.",
    features: [
      "Cataract Surgery",
      "LASIK",
      "Glaucoma Care",
      "Retina Treatment",
    ],
    available: true,
    tag: "Latest Tech",
    tagColor: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: "🧴",
    title: "Dermatology",
    category: "Specialist Care",
    desc: "Medical and cosmetic dermatology including acne, psoriasis, hair loss treatment, laser therapy, and skin cancer screening.",
    features: [
      "Laser Therapy",
      "Hair Loss Treatment",
      "Skin Cancer Screening",
      "Cosmetic Dermatology",
    ],
    available: false,
    tag: "Coming Soon",
    tagColor: "bg-slate-100 text-slate-500",
  },
  {
    icon: "🦷",
    title: "Dental Care",
    category: "Dental Services",
    desc: "Full-service dental care including preventive dentistry, orthodontics, implants, root canals, and cosmetic smile makeovers.",
    features: [
      "Dental Implants",
      "Orthodontics",
      "Root Canal",
      "Teeth Whitening",
    ],
    available: true,
    tag: "Pain-Free",
    tagColor: "bg-teal-100 text-teal-600",
  },
  {
    icon: "🫁",
    title: "Pulmonology",
    category: "Specialist Care",
    desc: "Expert care for respiratory diseases including asthma, COPD, sleep apnea, lung infections, and pulmonary rehabilitation.",
    features: [
      "Spirometry",
      "Sleep Study",
      "COPD Management",
      "Pulmonary Rehab",
    ],
    available: true,
    tag: "Breathing Clinic",
    tagColor: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: "🧘",
    title: "Psychiatry & Mental Health",
    category: "Mental Wellness",
    desc: "Confidential mental health services including therapy, counselling, stress management, depression care, and psychiatric evaluation.",
    features: [
      "Individual Therapy",
      "Stress Management",
      "Psychiatric Evaluation",
      "Group Sessions",
    ],
    available: true,
    tag: "Confidential",
    tagColor: "bg-purple-100 text-purple-600",
  },
];

const categories = [
  "All",
  "Specialist Care",
  "Surgical Care",
  "Family Care",
  "Diagnostic Services",
  "Primary Care",
  "Women's Health",
  "Mental Wellness",
  "Dental Services",
];

const highlights = [
  { icon: "🏥", value: "50+", label: "Services Offered" },
  { icon: "👨‍⚕️", value: "200+", label: "Specialist Doctors" },
  { icon: "⚡", value: "24/7", label: "Emergency Care" },
  { icon: "🌟", value: "98%", label: "Patient Satisfaction" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filtered = services.filter((s) => {
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    const matchSearch =
      search.trim() === "" ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase()) ||
      s.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.90); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .font-sora { font-family: 'Sora', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }
        .blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; animation: floatY 6s ease-in-out infinite; }
        .dot-pattern { background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px); background-size: 28px 28px; }
        .animate-slide-up { animation: slideInUp 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-scale-in { animation: scaleIn   0.55s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-fade-in  { animation: fadeIn    0.5s ease both; }
        .animate-float    { animation: floatY 5s ease-in-out infinite; }
      `}</style>

      <div className="font-sora min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100 text-slate-800">
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            padding:
              "clamp(80px,12vw,130px) clamp(20px,6vw,80px) clamp(60px,8vw,90px)",
            minHeight: "50vh",
          }}
        >
          {/* Blobs */}
          <div
            className="blob absolute"
            style={{
              width: "clamp(200px,44vw,500px)",
              height: "clamp(200px,44vw,500px)",
              background:
                "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.15) 100%)",
              top: "-5%",
              right: "-6%",
              zIndex: 0,
            }}
          />
          <div
            className="blob absolute"
            style={{
              width: "clamp(120px,28vw,300px)",
              height: "clamp(120px,28vw,300px)",
              background:
                "radial-gradient(circle, rgba(167,243,208,0.25) 0%, rgba(147,197,253,0.1) 100%)",
              bottom: "5%",
              left: "2%",
              zIndex: 0,
              animationDelay: "2s",
            }}
          />
          <div
            className="blob absolute"
            style={{
              width: "clamp(80px,18vw,200px)",
              height: "clamp(80px,18vw,200px)",
              background:
                "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)",
              top: "20%",
              left: "8%",
              zIndex: 0,
              animationDelay: "3.5s",
            }}
          />
          <div
            className="dot-pattern absolute inset-0 opacity-20"
            style={{ zIndex: 0 }}
          />

          {/* Watermark */}
          <div
            className="absolute select-none pointer-events-none font-bold"
            style={{
              fontSize: "clamp(80px,16vw,200px)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(37,99,235,0.05)",
              lineHeight: 1,
              zIndex: 0,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              whiteSpace: "nowrap",
            }}
          >
            SERVICES
          </div>

          <div className="relative z-10 animate-slide-up">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-600 text-xs font-semibold tracking-[0.1em] uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping inline-block opacity-75" />
              What We Offer
            </div>

            <h1
              className="font-bold text-slate-800 mb-4"
              style={{
                fontSize: "clamp(2rem,6vw,4.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              World-Class Care, <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Every Specialty
              </span>
            </h1>

            <p
              className="font-dm text-slate-500 mx-auto leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.8vw,1.1rem)", maxWidth: 520 }}
            >
              From routine checkups to complex surgeries — our 50+ services span
              every medical discipline, delivered by expert specialists under
              one roof.
            </p>
          </div>

          {/* Highlight stats row */}
          <div
            className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-10 animate-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-2xl px-5 py-3 border border-white"
                style={{ boxShadow: "0 4px 20px rgba(37,99,235,0.09)" }}
              >
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <div className="font-bold text-slate-800 text-lg leading-tight">
                    {h.value}
                  </div>
                  <div className="font-dm text-[10px] text-slate-400 tracking-wide uppercase">
                    {h.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STICKY FILTER BAR ── */}
        <section
          className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-100"
          style={{
            boxShadow: "0 4px 24px rgba(37,99,235,0.07)",
            padding: "clamp(12px,2vw,18px) clamp(20px,6vw,48px)",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-3 md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-xs">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search services…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="font-dm w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-lg leading-none"
                >
                  ×
                </button>
              )}
            </div>

            {/* Result count badge */}
            <span className="font-dm text-xs text-slate-400 shrink-0">
              <span className="font-semibold text-blue-600">
                {filtered.length}
              </span>{" "}
              service{filtered.length !== 1 ? "s" : ""} found
            </span>
          </div>

          {/* Category pills */}
          <div className="max-w-7xl mx-auto mt-3 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1 rounded-full text-[11px] font-semibold border transition-all duration-200 cursor-pointer
                  ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                      : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(36px,5vw,64px) clamp(20px,6vw,48px)" }}
        >
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400 font-dm text-sm gap-3 animate-fade-in">
              <span className="text-5xl">🔍</span>
              <p>No services match your search.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearch("");
                }}
                className="mt-2 text-blue-600 text-xs font-semibold underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((svc, i) => {
                const isExpanded = expandedCard === svc.title;
                return (
                  <div
                    key={svc.title}
                    className={`bg-white rounded-2xl flex flex-col gap-4 animate-scale-in transition-all duration-300 overflow-hidden
                      ${svc.available ? "hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(37,99,235,0.13)]" : "opacity-80"}
                    `}
                    style={{
                      boxShadow: "0 4px 20px rgba(37,99,235,0.07)",
                      border: "1px solid rgba(37,99,235,0.08)",
                      animationDelay: `${i * 0.06}s`,
                    }}
                  >
                    {/* Card top — coloured strip */}
                    <div
                      className="h-1.5 w-full rounded-t-2xl"
                      style={{
                        background: svc.available
                          ? "linear-gradient(90deg,#2563eb,#7c3aed)"
                          : "#e2e8f0",
                      }}
                    />

                    <div className="px-5 pb-5 flex flex-col gap-4 flex-1">
                      {/* Icon + tag row */}
                      <div className="flex items-start justify-between">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl animate-float"
                          style={{
                            background:
                              "linear-gradient(135deg,#dbeafe,#ede9fe)",
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${4 + (i % 3)}s`,
                          }}
                        >
                          {svc.icon}
                        </div>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${svc.tagColor}`}
                        >
                          {svc.tag}
                        </span>
                      </div>

                      {/* Category label */}
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-4 h-px bg-blue-300" />
                        <span className="font-dm text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-400">
                          {svc.category}
                        </span>
                      </div>

                      {/* Title & desc */}
                      <div>
                        <h3 className="font-bold text-slate-800 text-base mb-1.5">
                          {svc.title}
                        </h3>
                        <p className="font-dm text-xs text-slate-500 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>

                      {/* Feature list — toggleable */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <ul className="flex flex-col gap-1.5 pt-1">
                          {svc.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 font-dm text-xs text-slate-600"
                            >
                              <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                                <svg
                                  className="w-2.5 h-2.5 text-blue-500"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-slate-100" />

                      {/* Footer row */}
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() =>
                            setExpandedCard(isExpanded ? null : svc.title)
                          }
                          className="font-dm text-[11px] font-semibold text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
                        >
                          {isExpanded ? "Show less" : "View features"}
                          <svg
                            className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        <a
                          href={svc.available ? "/login" : undefined}
                          className={`px-4 py-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200
                            ${
                              svc.available
                                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-[0_6px_18px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                                : "bg-slate-100 text-slate-400 pointer-events-none cursor-not-allowed"
                            }`}
                        >
                          {svc.available ? "Book Now" : "Coming Soon"}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── WHY CHOOSE US STRIP ── */}
        <section
          className="bg-white border-y border-slate-100"
          style={{ padding: "clamp(40px,6vw,72px) clamp(20px,6vw,48px)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
                <span className="inline-block w-6 h-px bg-blue-600" />
                Why Choose Us
                <span className="inline-block w-6 h-px bg-blue-600" />
              </div>
              <h2
                className="font-bold text-slate-800"
                style={{
                  fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Healthcare that{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  puts you first
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: "⚡",
                  title: "Fast Appointments",
                  desc: "Same-day and next-day slots available across all departments.",
                },
                {
                  icon: "🔒",
                  title: "Private & Secure",
                  desc: "Your health records are encrypted and always under your control.",
                },
                {
                  icon: "🌐",
                  title: "Telemedicine",
                  desc: "Consult top specialists from anywhere — video and chat based.",
                },
                {
                  icon: "💳",
                  title: "Cashless Insurance",
                  desc: "Partnered with 40+ insurers for seamless cashless treatment.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 animate-scale-in transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-blue-100">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">
                    {item.title}
                  </div>
                  <p className="font-dm text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
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
            Not sure which service you need?
          </h2>
          <p
            className="font-dm mb-8 mx-auto text-white/70"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", maxWidth: 440 }}
          >
            Talk to our care coordinators — they'll guide you to the right
            specialist and the right treatment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/login"
              className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-7 py-3.5 rounded-full text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white bg-gradient-to-br from-blue-600 to-blue-700">
                +
              </span>
              Book Appointment
            </a>
            <a
              href="/doctors"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              Browse Doctors
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
