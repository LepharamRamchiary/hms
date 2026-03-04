export const ProblemSolution = () => {
  const problems = [
    {
      icon: "🎫",
      title: "Standing in Queue for Token",
      desc: "Patients wake up early, travel to hospital, and stand in long queues just to get a paper token — only to wait 3–4 more hours to see a doctor.",
    },
    {
      icon: "📄",
      title: "Lost Paper Records",
      desc: "Old prescriptions, lab reports, and medical history stored in files that get torn, lost or misplaced. Every visit feels like starting from zero.",
    },
    {
      icon: "💸",
      title: "Wrong Bills & Manual Errors",
      desc: "Staff manually calculate charges for medicines, tests, and consultations. Mistakes cause overcharging, patient disputes, and wasted time.",
    },
    {
      icon: "😤",
      title: "No Idea Who's Available",
      desc: "Patients don't know which doctor is on duty, what their timings are, or how many people are ahead — leading to confusion and frustration.",
    },
  ];

  const solutions = [
    {
      icon: "📅",
      title: "Book Token Online — Before You Leave Home",
      desc: "Patient books a slot from their phone. They arrive at the exact time, skip the queue entirely, and see the doctor without wasting a single hour.",
      color: "#2563eb",
      bg: "rgba(37,99,235,0.08)",
    },
    {
      icon: "🗂️",
      title: "All Records Saved Digitally Forever",
      desc: "Every prescription, test report, and visit history is stored securely online. Doctor can see the full history in seconds — no files, no searching.",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.08)",
    },
    {
      icon: "🧾",
      title: "Auto-Generated Bills — Zero Errors",
      desc: "System calculates the bill automatically based on services used. Patient gets a clear invoice instantly. No manual math, no disputes.",
      color: "#0891b2",
      bg: "rgba(8,145,178,0.08)",
    },
    {
      icon: "🛡️",
      title: "Live Doctor Availability & Dashboards",
      desc: "Patients see real-time doctor schedules. Admin manages everything from one dashboard. Receptionist handles check-ins digitally. Everyone knows their role.",
      color: "#059669",
      bg: "rgba(5,150,105,0.08)",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ps-section * { font-family: 'Sora', 'DM Sans', sans-serif; box-sizing: border-box; }

        @keyframes ps-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ps-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes ps-arrowBounce {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(6px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes ps-blobFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }

        /* seamless — exact same gradient as hero */
        .ps-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%);
        }

        /* same blob style as hero */
        .ps-blob {
          position: absolute; pointer-events: none; z-index: 0;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: ps-blobFloat 6s ease-in-out infinite;
        }

        /* same dot pattern as hero */
        .ps-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.2;
        }

        .ps-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 18px; border-radius: 999px;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.02em;
          background: rgba(37,99,235,0.08); color: #2563eb;
          border: 1px solid rgba(37,99,235,0.15);
        }
        .ps-badge-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #2563eb;
          animation: pulse-ring 2s infinite;
          display: inline-block;
        }

        .ps-gradient-text {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 40%, #7c3aed 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: ps-shimmer 4s linear infinite;
        }

        .ps-col-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 12px;
          font-size: 0.82rem; font-weight: 700;
          margin-bottom: 18px;
        }
        .ps-col-label.problem {
          background: rgba(239,68,68,0.08); color: #dc2626;
          border: 1px solid rgba(239,68,68,0.18);
        }
        .ps-col-label.solution {
          background: rgba(37,99,235,0.08); color: #2563eb;
          border: 1px solid rgba(37,99,235,0.18);
        }

        /* glassmorphism cards to blend into the bg */
        .ps-problem-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(239,68,68,0.13);
          border-radius: 20px; padding: 20px 18px;
          display: flex; gap: 14px; align-items: flex-start;
          box-shadow: 0 4px 20px rgba(239,68,68,0.06), 0 1px 4px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: ps-fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .ps-problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(239,68,68,0.12);
        }
        .ps-problem-icon {
          width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
          background: rgba(239,68,68,0.08);
          display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
        }
        .ps-p-title { font-size: 0.88rem; font-weight: 700; color: #1e293b; margin-bottom: 5px; }
        .ps-p-desc  { font-size: 0.78rem; color: #64748b; line-height: 1.55; font-family: 'DM Sans', sans-serif; }

        .ps-solution-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 20px; padding: 20px 18px;
          display: flex; gap: 14px; align-items: flex-start;
          box-shadow: 0 4px 20px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: ps-fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
          position: relative; overflow: hidden;
        }
        .ps-solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(37,99,235,0.13);
        }
        .ps-s-icon {
          width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
        }
        .ps-s-title { font-size: 0.88rem; font-weight: 700; margin-bottom: 5px; }
        .ps-s-desc  { font-size: 0.78rem; color: #64748b; line-height: 1.55; font-family: 'DM Sans', sans-serif; }

        .ps-arrow {
          width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
          animation: ps-arrowBounce 1.8s ease-in-out infinite;
        }
        .ps-vline {
          width: 1px; flex: 1;
          background: linear-gradient(to bottom, transparent, rgba(37,99,235,0.22) 40%, rgba(124,58,237,0.22) 60%, transparent);
        }

        .ps-stats {
          border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #7c3aed 100%);
          box-shadow: 0 16px 48px rgba(37,99,235,0.28);
          display: flex; flex-wrap: wrap;
        }
        .ps-stat {
          flex: 1; min-width: 130px; padding: 22px 16px;
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          position: relative;
        }
        .ps-stat + .ps-stat::before {
          content: ''; position: absolute; left: 0; top: 18%; bottom: 18%;
          width: 1px; background: rgba(255,255,255,0.15);
        }
        .ps-stat-num   { font-size: 1.65rem; font-weight: 800; color: #fff; }
        .ps-stat-label { font-size: 0.72rem; font-weight: 500; color: rgba(255,255,255,0.62); text-align: center; }

        @media (max-width: 768px) {
          .ps-stat + .ps-stat::before { display: none; }
          .ps-stat { border-top: 1px solid rgba(255,255,255,0.1); }
          .ps-stat:first-child { border-top: none; }
        }
      `}</style>

      <section className="ps-section py-20 sm:py-28">

        {/* exact same blobs as hero */}
        <div
          className="ps-blob"
          style={{
            width: "clamp(200px,50vw,520px)",
            height: "clamp(200px,50vw,520px)",
            background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.15) 100%)",
            top: "2%", right: "-8%",
          }}
        />
        <div
          className="ps-blob"
          style={{
            width: "clamp(120px,30vw,320px)",
            height: "clamp(120px,30vw,320px)",
            background: "radial-gradient(circle, rgba(167,243,208,0.2) 0%, rgba(147,197,253,0.1) 100%)",
            bottom: "8%", left: "3%",
            animationDelay: "2s",
          }}
        />
        <div className="ps-dots" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="ps-badge mx-auto mb-4">
              <span className="ps-badge-dot" />
              Real Hospital Problems — Real Fixes
            </div>
            <h2
              className="font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.7rem,4.5vw,3rem)", letterSpacing: "-0.02em", color: "#1e293b" }}
            >
              What Goes Wrong &{" "}
              <span className="ps-gradient-text">How We Fix It</span>
            </h2>
            <p style={{
              color: "#64748b", fontSize: "clamp(0.88rem,2vw,1rem)",
              maxWidth: 500, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65,
            }}>
              Every problem below is something real patients and staff face daily.
              Our system eliminates each one — completely.
            </p>
          </div>

          {/* Two columns + arrow */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-0 mb-14">

            {/* PROBLEMS */}
            <div className="flex-1 w-full lg:pr-6">
              <div className="ps-col-label problem">💢 What Patients Suffer</div>
              <div className="flex flex-col gap-4">
                {problems.map((p, i) => (
                  <div key={p.title} className="ps-problem-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="ps-problem-icon">{p.icon}</div>
                    <div>
                      <div className="ps-p-title">{p.title}</div>
                      <div className="ps-p-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow desktop */}
            <div className="hidden lg:flex flex-col items-center self-stretch px-4 gap-2">
              <div className="ps-vline" />
              <div className="ps-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ps-vline" />
            </div>

            {/* Arrow mobile */}
            <div className="flex lg:hidden justify-center w-full py-1">
              <div className="ps-arrow" style={{ transform: "rotate(90deg)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="flex-1 w-full lg:pl-6">
              <div className="ps-col-label solution">✅ How Our System Solves It</div>
              <div className="flex flex-col gap-4">
                {solutions.map((s, i) => (
                  <div
                    key={s.title}
                    className="ps-solution-card"
                    style={{ animationDelay: `${i * 0.1 + 0.12}s`, border: `1.5px solid ${s.color}22` }}
                  >
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: `linear-gradient(90deg, ${s.color}, ${s.color}66)`,
                      borderRadius: "20px 20px 0 0",
                    }} />
                    <div className="ps-s-icon" style={{ background: s.bg }}>{s.icon}</div>
                    <div>
                      <div className="ps-s-title" style={{ color: s.color }}>{s.title}</div>
                      <div className="ps-s-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="ps-stats">
            {[
              { num: "4hrs",  label: "Saved per\nPatient Visit" },
              { num: "100%",  label: "Paperless\nRecords" },
              { num: "0",     label: "Billing\nMistakes" },
              { num: "3x",    label: "Faster\nCheck-in" },
            ].map((s) => (
              <div key={s.label} className="ps-stat">
                <span className="ps-stat-num">{s.num}</span>
                <span className="ps-stat-label" style={{ whiteSpace: "pre-line" }}>{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};