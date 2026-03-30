import { useState } from "react";

const doctors = [
  {
    name: "Dr. Ananya Sharma",
    role: "Chief Medical Officer",
    specialty: "General Medicine",
    experience: "18 yrs exp.",
    available: true,
    emoji: "👩‍⚕️",
    rating: 4.9,
    reviews: 312,
    tags: ["Mon–Fri", "9am–5pm"],
  },
  {
    name: "Dr. Rahul Verma",
    role: "Senior Cardiologist",
    specialty: "Cardiology",
    experience: "14 yrs exp.",
    available: true,
    emoji: "👨‍⚕️",
    rating: 4.8,
    reviews: 278,
    tags: ["Mon–Thu", "10am–4pm"],
  },
  {
    name: "Dr. Priya Nair",
    role: "Lead Neurologist",
    specialty: "Neurology",
    experience: "12 yrs exp.",
    available: false,
    emoji: "👩‍⚕️",
    rating: 4.9,
    reviews: 195,
    tags: ["Tue–Sat", "11am–6pm"],
  },
  {
    name: "Dr. Amir Khan",
    role: "Paediatric Specialist",
    specialty: "Paediatrics",
    experience: "10 yrs exp.",
    available: true,
    emoji: "👨‍⚕️",
    rating: 4.7,
    reviews: 241,
    tags: ["Wed–Sun", "8am–3pm"],
  },
  {
    name: "Dr. Meera Pillai",
    role: "Orthopaedic Surgeon",
    specialty: "Orthopaedics",
    experience: "16 yrs exp.",
    available: true,
    emoji: "👩‍⚕️",
    rating: 4.8,
    reviews: 189,
    tags: ["Mon–Fri", "9am–4pm"],
  },
  {
    name: "Dr. Sanjay Gupta",
    role: "Dermatology Consultant",
    specialty: "Dermatology",
    experience: "11 yrs exp.",
    available: false,
    emoji: "👨‍⚕️",
    rating: 4.6,
    reviews: 163,
    tags: ["Thu–Mon", "10am–5pm"],
  },
  {
    name: "Dr. Fatima Begum",
    role: "Gynaecologist",
    specialty: "Gynaecology",
    experience: "15 yrs exp.",
    available: true,
    emoji: "👩‍⚕️",
    rating: 4.9,
    reviews: 307,
    tags: ["Mon–Sat", "9am–6pm"],
  },
  {
    name: "Dr. Vikram Reddy",
    role: "ENT Specialist",
    specialty: "ENT",
    experience: "9 yrs exp.",
    available: true,
    emoji: "👨‍⚕️",
    rating: 4.7,
    reviews: 142,
    tags: ["Tue–Fri", "11am–5pm"],
  },
  {
    name: "Dr. Roshni Das",
    role: "Ophthalmologist",
    specialty: "Ophthalmology",
    experience: "13 yrs exp.",
    available: true,
    emoji: "👩‍⚕️",
    rating: 4.8,
    reviews: 210,
    tags: ["Mon–Wed", "10am–4pm"],
  },
  {
    name: "Dr. Arjun Menon",
    role: "Psychiatrist",
    specialty: "Psychiatry",
    experience: "17 yrs exp.",
    available: false,
    emoji: "👨‍⚕️",
    rating: 4.9,
    reviews: 256,
    tags: ["Thu–Sat", "2pm–7pm"],
  },
  {
    name: "Dr. Sunita Rao",
    role: "Diabetologist",
    specialty: "Endocrinology",
    experience: "14 yrs exp.",
    available: true,
    emoji: "👩‍⚕️",
    rating: 4.7,
    reviews: 178,
    tags: ["Tue–Sat", "9am–3pm"],
  },
  {
    name: "Dr. Kabir Sheikh",
    role: "Pulmonologist",
    specialty: "Pulmonology",
    experience: "11 yrs exp.",
    available: true,
    emoji: "👨‍⚕️",
    rating: 4.6,
    reviews: 134,
    tags: ["Mon–Fri", "11am–6pm"],
  },
];

const specialties = [
  "All",
  "General Medicine",
  "Cardiology",
  "Neurology",
  "Paediatrics",
  "Orthopaedics",
  "Dermatology",
  "Gynaecology",
  "ENT",
  "Ophthalmology",
  "Psychiatry",
  "Endocrinology",
  "Pulmonology",
];

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = doctors.filter((d) => {
    const matchSpec = activeFilter === "All" || d.specialty === activeFilter;
    const matchAvail = !availableOnly || d.available;
    const matchSearch =
      search.trim() === "" ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase()) ||
      d.role.toLowerCase().includes(search.toLowerCase());
    return matchSpec && matchAvail && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
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
        .animate-slide-up  { animation: slideInUp 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-scale-in  { animation: scaleIn   0.55s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-fade-in   { animation: fadeIn    0.5s ease both; }
      `}</style>

      <div className="font-sora min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100 text-slate-800">
        {/* ── HERO BANNER ── */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            padding:
              "clamp(80px,12vw,130px) clamp(20px,6vw,80px) clamp(60px,8vw,90px)",
            minHeight: "46vh",
          }}
        >
          {/* Blobs */}
          <div
            className="blob absolute"
            style={{
              width: "clamp(180px,40vw,480px)",
              height: "clamp(180px,40vw,480px)",
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
              width: "clamp(100px,25vw,280px)",
              height: "clamp(100px,25vw,280px)",
              background:
                "radial-gradient(circle, rgba(167,243,208,0.2) 0%, rgba(147,197,253,0.1) 100%)",
              bottom: "5%",
              left: "2%",
              zIndex: 0,
              animationDelay: "2s",
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
              fontSize: "clamp(90px,18vw,210px)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(37,99,235,0.05)",
              lineHeight: 1,
              zIndex: 0,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            DOCTORS
          </div>

          <div className="relative z-10 animate-slide-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-600 text-xs font-semibold tracking-[0.1em] uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping inline-block opacity-75" />
              Our Medical Team
            </div>

            <h1
              className="font-bold text-slate-800 mb-4"
              style={{
                fontSize: "clamp(2rem,6vw,4.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              Expert Doctors,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Exceptional Care
              </span>
            </h1>

            <p
              className="font-dm text-slate-500 mx-auto leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.8vw,1.1rem)", maxWidth: 520 }}
            >
              Browse our 200+ specialist doctors across all disciplines. Filter
              by specialty, check availability, and book your appointment
              instantly.
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              {[
                { value: "200+", label: "Specialists" },
                { value: "12+", label: "Departments" },
                { value: "98%", label: "Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className="font-bold text-blue-600"
                    style={{
                      fontSize: "clamp(1.4rem,3vw,2rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="font-dm text-xs text-slate-400 tracking-wide uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTERS & SEARCH BAR ── */}
        <section
          className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100"
          style={{
            boxShadow: "0 4px 24px rgba(37,99,235,0.06)",
            padding: "clamp(14px,2vw,20px) clamp(20px,6vw,48px)",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
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
                placeholder="Search doctor, specialty…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="font-dm w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
              />
            </div>

            {/* Available toggle */}
            <button
              onClick={() => setAvailableOnly((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 shrink-0
                ${availableOnly ? "bg-emerald-500 text-white border-emerald-500 shadow-[0_4px_14px_rgba(52,211,153,0.35)]" : "bg-white text-slate-500 border-slate-200 hover:border-emerald-300 hover:text-emerald-600"}`}
            >
              <span
                className={`w-2 h-2 rounded-full ${availableOnly ? "bg-white" : "bg-emerald-400"}`}
              />
              Available Today
            </button>
          </div>

          {/* Specialty pills */}
          <div className="max-w-7xl mx-auto mt-3 flex flex-wrap gap-2">
            {specialties.map((sp) => (
              <button
                key={sp}
                onClick={() => setActiveFilter(sp)}
                className={`px-3.5 py-1 rounded-full text-[11px] font-semibold border transition-all duration-200 cursor-pointer
                  ${
                    activeFilter === sp
                      ? "bg-blue-600 text-white border-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                      : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
              >
                {sp}
              </button>
            ))}
          </div>
        </section>

        {/* ── DOCTOR CARDS ── */}
        <section
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(36px,5vw,64px) clamp(20px,6vw,48px)" }}
        >
          {/* Result count */}
          <p className="font-dm text-xs text-slate-400 mb-6">
            Showing{" "}
            <span className="font-semibold text-blue-600">
              {filtered.length}
            </span>{" "}
            doctor{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-blue-600">
                  {activeFilter}
                </span>
              </>
            )}
            {availableOnly && (
              <>
                {" "}
                ·{" "}
                <span className="text-emerald-500 font-semibold">
                  Available only
                </span>
              </>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400 font-dm text-sm gap-3 animate-fade-in">
              <span className="text-5xl">🔍</span>
              <p>No doctors found matching your filters.</p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setAvailableOnly(false);
                  setSearch("");
                }}
                className="mt-2 text-blue-600 text-xs font-semibold underline underline-offset-2"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((doc, i) => (
                <div
                  key={doc.name}
                  className="bg-white rounded-2xl p-5 flex flex-col gap-3 animate-scale-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(37,99,235,0.14)]"
                  style={{
                    boxShadow: "0 4px 20px rgba(37,99,235,0.07)",
                    border: "1px solid rgba(37,99,235,0.07)",
                    animationDelay: `${i * 0.06}s`,
                  }}
                >
                  {/* Avatar + availability dot */}
                  <div className="relative w-fit mx-auto">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br from-blue-100 to-violet-100">
                      {doc.emoji}
                    </div>
                    <span
                      className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow ${doc.available ? "bg-emerald-400" : "bg-slate-300"}`}
                      title={doc.available ? "Available today" : "Unavailable"}
                    />
                  </div>

                  {/* Name & role */}
                  <div className="text-center">
                    <div className="font-bold text-slate-800 text-sm leading-tight">
                      {doc.name}
                    </div>
                    <div className="font-dm text-xs text-blue-600 font-medium mt-0.5">
                      {doc.role}
                    </div>
                  </div>

                  {/* Specialty badge */}
                  <div className="flex justify-center">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 tracking-wide">
                      {doc.specialty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className={`w-3 h-3 ${j < Math.round(doc.rating) ? "text-amber-400" : "text-slate-200"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-dm text-[10px] text-slate-400">
                      {doc.rating} ({doc.reviews} reviews)
                    </span>
                  </div>

                  {/* Info tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    <span className="font-dm text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                      {doc.experience}
                    </span>
                    {doc.tags.map((t) => (
                      <span
                        key={t}
                        className="font-dm text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100 mt-1" />

                  {/* Availability label + Book btn */}
                  <div className="flex items-center justify-between gap-2 pt-0.5">
                    <span
                      className={`font-dm text-[10px] font-semibold flex items-center gap-1 ${doc.available ? "text-emerald-500" : "text-slate-400"}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full inline-block ${doc.available ? "bg-emerald-400" : "bg-slate-300"}`}
                      />
                      {doc.available ? "Available today" : "Unavailable"}
                    </span>

                    <a
                      href="/login"
                      className={`px-4 py-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200
                        ${
                          doc.available
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-[0_6px_18px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                            : "bg-slate-100 text-slate-400 pointer-events-none cursor-not-allowed"
                        }`}
                    >
                      {doc.available ? "Book Now" : "Unavailable"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            Can't find your doctor?
          </h2>
          <p
            className="font-dm mb-8 mx-auto text-white/70"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", maxWidth: 420 }}
          >
            Our support team is here to help you find the right specialist and
            schedule your visit.
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
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
