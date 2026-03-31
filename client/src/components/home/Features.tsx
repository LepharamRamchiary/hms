export function Features() {
  const userFeatures = [
    {
      icon: "🎫",
      title: "Book Token Online",
      desc: "Reserve your slot from home in seconds. No queues, no waiting — just pick a time and show up.",
      color: "#2563eb",
      bg: "rgba(37,99,235,0.08)",
      step: "01",
    },
    {
      icon: "👨‍⚕️",
      title: "Select Doctor, Date & Time",
      desc: "Browse available doctors by specialization, check their live schedules, and pick a slot that works for you.",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.08)",
      step: "02",
    },
    {
      icon: "📋",
      title: "View Appointment History",
      desc: "See every past and upcoming visit in one place — date, doctor, diagnosis, and status at a glance.",
      color: "#0891b2",
      bg: "rgba(8,145,178,0.08)",
      step: "03",
    },
    {
      icon: "📥",
      title: "Download Prescription",
      desc: "Your prescriptions are saved digitally after every visit. Download or share them anytime, from any device.",
      color: "#059669",
      bg: "rgba(5,150,105,0.08)",
      step: "04",
    },
  ];

  const steps = [
    {
      icon: "🔐", color: "#2563eb", bg: "rgba(37,99,235,0.10)",
      step: "01", title: "Login to Your Account",
      desc: "Sign in with your phone or email. Profile and records load instantly.",
    },
    {
      icon: "👨‍⚕️", color: "#7c3aed", bg: "rgba(124,58,237,0.10)",
      step: "02", title: "Select Doctor & Slot",
      desc: "Filter by specialty, see live availability, pick the time that fits you.",
    },
    {
      icon: "🎫", color: "#0891b2", bg: "rgba(8,145,178,0.10)",
      step: "03", title: "Get Your Token",
      desc: "Digital token issued instantly. Track live queue — arrive just in time.",
    },
    {
      icon: "📥", color: "#059669", bg: "rgba(5,150,105,0.10)",
      step: "04", title: "Download Prescription",
      desc: "After your visit, prescription is ready to download or share with any pharmacy.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .feat-section * { font-family: 'Sora', 'DM Sans', sans-serif; box-sizing: border-box; }

        @keyframes feat-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes feat-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes feat-blobFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-18px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes arrowSlide {
          0%,100% { opacity: .4; transform: translateX(0); }
          50%      { opacity: 1;  transform: translateX(5px); }
        }

        /* ── background — exact hero match ── */
        .feat-section {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%);
        }
        .feat-blob {
          position: absolute; pointer-events: none; z-index: 0;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: feat-blobFloat 6s ease-in-out infinite;
        }
        .feat-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px; opacity: 0.2;
        }

        /* badge */
        .feat-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 18px; border-radius: 999px;
          font-size: 0.78rem; font-weight: 600;
          background: rgba(37,99,235,0.08); color: #2563eb;
          border: 1px solid rgba(37,99,235,0.15);
        }
        .feat-bdot {
          width: 8px; height: 8px; border-radius: 50%; background: #2563eb;
          animation: pulse-ring 2s infinite; display: inline-block;
        }
        .feat-gtext {
          background: linear-gradient(135deg, #1e3a8a, #2563eb 40%, #7c3aed);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: feat-shimmer 4s linear infinite;
        }

        /* ── Feature cards row ── */
        .feat-cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 56px;
        }
        .feat-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border-radius: 22px; padding: 26px 20px;
          box-shadow: 0 4px 20px rgba(37,99,235,0.07);
          transition: transform .28s, box-shadow .28s;
          animation: feat-fadeUp .6s cubic-bezier(.16,1,.3,1) both;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; gap: 12px;
        }
        .feat-card:hover { transform: translateY(-6px); box-shadow: 0 18px 44px rgba(37,99,235,.13); }
        .feat-card-bar { position: absolute; top:0;left:0;right:0;height:3px;border-radius:22px 22px 0 0; }
        .feat-watermark {
          position: absolute; top:12px; right:16px;
          font-size:2.6rem; font-weight:800; opacity:.06; color:#1e293b;
          pointer-events:none; user-select:none; line-height:1;
        }
        .feat-ficon {
          width:50px; height:50px; border-radius:16px;
          display:flex; align-items:center; justify-content:center; font-size:1.4rem;
        }
        .feat-ftitle { font-size:.9rem; font-weight:700; }
        .feat-fdesc  { font-size:.76rem; color:#64748b; line-height:1.6; font-family:'DM Sans',sans-serif; }
        .feat-ftag {
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 12px; border-radius:999px;
          font-size:.68rem; font-weight:600; margin-top:auto; width:fit-content;
        }

        /* ── How It Works panel ── */
        .feat-hiw {
          background: rgba(255,255,255,0.62);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(37,99,235,0.10);
          border-radius: 28px; padding: 40px 32px;
          box-shadow: 0 8px 32px rgba(37,99,235,.08);
          margin-bottom: 56px;
        }

        /* single horizontal row: card → arrow → card → arrow → card → arrow → card */
        .hiw-row {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          gap: 0;
          width: 100%;
        }

        /* each step card */
        .hiw-card {
          flex: 1;
          min-width: 0;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 12px; padding: 24px 14px;
          background: rgba(255,255,255,0.88);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(37,99,235,0.08);
          transition: transform .28s, box-shadow .28s;
          animation: feat-fadeUp .6s cubic-bezier(.16,1,.3,1) both;
          position: relative; overflow: hidden;
        }
        .hiw-card:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(37,99,235,.13); }
        .hiw-top-bar {
          position: absolute; top:0; left:0; right:0; height:3px;
          border-radius: 20px 20px 0 0;
        }

        /* circle */
        .hiw-circle {
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.45rem; position: relative; flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(37,99,235,.16);
          transition: transform .25s;
        }
        .hiw-card:hover .hiw-circle { transform: scale(1.1) rotate(-6deg); }
        .hiw-stepnum {
          position: absolute; top: -6px; right: -6px;
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #fff; font-size: .6rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #fff; box-shadow: 0 2px 8px rgba(37,99,235,.3);
        }
        .hiw-title { font-size: .86rem; font-weight: 700; line-height: 1.3; }
        .hiw-desc  { font-size: .73rem; color: #64748b; line-height: 1.55; font-family: 'DM Sans', sans-serif; }

        /* arrow between cards */
        .hiw-arrow {
          flex-shrink: 0;
          width: 32px;
          display: flex; align-items: center; justify-content: center;
          align-self: center;
        }
        .hiw-arrow svg { animation: arrowSlide 1.7s ease-in-out infinite; }

        /* ── stat strip ── */
        .feat-stats {
          border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg, #1e3a8a, #2563eb 50%, #7c3aed);
          box-shadow: 0 16px 48px rgba(37,99,235,.28);
          display: flex; flex-wrap: wrap;
        }
        .feat-stat {
          flex:1; min-width:130px; padding:22px 16px;
          display:flex; flex-direction:column; align-items:center; gap:3px; position:relative;
        }
        .feat-stat+.feat-stat::before {
          content:''; position:absolute; left:0; top:18%; bottom:18%;
          width:1px; background:rgba(255,255,255,.15);
        }
        .feat-stat-num   { font-size:1.65rem; font-weight:800; color:#fff; }
        .feat-stat-label { font-size:.72rem; font-weight:500; color:rgba(255,255,255,.62); text-align:center; }

        /* ── Responsive ── */
        /* Tablet: 2 cols */
        @media (max-width: 1024px) {
          .feat-cards-row { grid-template-columns: repeat(2, 1fr); }
          .hiw-row { flex-wrap: wrap; gap: 12px; }
          .hiw-arrow { display: none; }
          .hiw-card { flex: 0 0 calc(50% - 6px); min-width: calc(50% - 6px); }
        }
        /* Mobile: 1 col */
        @media (max-width: 560px) {
          .feat-cards-row { grid-template-columns: 1fr; }
          .hiw-card { flex: 0 0 100%; min-width: 100%; }
          .feat-hiw { padding: 28px 16px; }
          .feat-stat+.feat-stat::before { display:none; }
          .feat-stat { border-top:1px solid rgba(255,255,255,.1); }
          .feat-stat:first-child { border-top:none; }
        }
      `}</style>

      <section className="feat-section py-2 sm:py-4">

        {/* blobs — same as hero */}
        <div className="feat-blob" style={{
          width:"clamp(200px,50vw,520px)", height:"clamp(200px,50vw,520px)",
          background:"radial-gradient(circle,rgba(147,197,253,.35),rgba(196,181,253,.15))",
          top:"2%", right:"-8%",
        }}/>
        <div className="feat-blob" style={{
          width:"clamp(120px,30vw,320px)", height:"clamp(120px,30vw,320px)",
          background:"radial-gradient(circle,rgba(167,243,208,.2),rgba(147,197,253,.1))",
          bottom:"8%", left:"2%", animationDelay:"2s",
        }}/>
        <div className="feat-dots"/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <div className="feat-badge mx-auto mb-4">
              <span className="feat-bdot"/>Patient Features
            </div>
            <h2 className="font-bold leading-tight mb-4"
              style={{fontSize:"clamp(1.7rem,4.5vw,3rem)",letterSpacing:"-0.02em",color:"#1e293b"}}>
              Everything a Patient <span className="feat-gtext">Can Do</span>
            </h2>
            <p style={{color:"#64748b",fontSize:"clamp(.88rem,2vw,1rem)",maxWidth:500,margin:"0 auto",fontFamily:"'DM Sans',sans-serif",lineHeight:1.65}}>
              From booking a token to downloading your prescription — manage your entire hospital experience from your phone.
            </p>
          </div>

          {/* ── 4 Feature Cards — one row ── */}
          <div className="feat-cards-row">
            {userFeatures.map((f, i) => (
              <div key={f.title} className="feat-card" style={{animationDelay:`${i*.1}s`, border:`1.5px solid ${f.color}22`}}>
                <div className="feat-card-bar" style={{background:`linear-gradient(90deg,${f.color},${f.color}55)`}}/>
                <div className="feat-watermark">{f.step}</div>
                <div className="feat-ficon" style={{background:f.bg}}>{f.icon}</div>
                <div>
                  <div className="feat-ftitle" style={{color:f.color}}>{f.title}</div>
                  <div className="feat-fdesc" style={{marginTop:6}}>{f.desc}</div>
                </div>
                <div className="feat-ftag" style={{background:f.bg, color:f.color, border:`1px solid ${f.color}30`}}>
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" r="5" fill={f.color} opacity=".3"/>
                    <circle cx="5" cy="5" r="2.5" fill={f.color}/>
                  </svg>
                  For Patients
                </div>
              </div>
            ))}
          </div>

          {/* ── How It Works — all 4 steps in one row ── */}
          <div className="feat-hiw">
            <div className="text-center mb-10">
              <div className="feat-badge mx-auto mb-3"
                style={{background:"rgba(124,58,237,.07)", color:"#7c3aed", borderColor:"rgba(124,58,237,.18)"}}>
                <span className="feat-bdot" style={{background:"#7c3aed", animation:"none"}}/>
                Step by Step
              </div>
              <h3 className="font-bold"
                style={{fontSize:"clamp(1.2rem,3vw,1.75rem)", color:"#1e293b", letterSpacing:"-0.01em"}}>
                How It Works for a Patient
              </h3>
              <p style={{color:"#64748b", fontSize:".85rem", marginTop:6, fontFamily:"'DM Sans',sans-serif"}}>
                From login to leaving the hospital — your entire journey in 4 steps.
              </p>
            </div>

            {/* single row: card → arrow → card → arrow → card → arrow → card */}
            <div className="hiw-row">
              {steps.map((s, i) => (
                <>
                  {/* Step card */}
                  <div key={s.title} className="hiw-card"
                    style={{animationDelay:`${i*.12}s`, border:`1.5px solid ${s.color}22`}}>
                    <div className="hiw-top-bar"
                      style={{background:`linear-gradient(90deg,${s.color},${s.color}55)`}}/>
                    <div className="hiw-circle" style={{background:s.bg}}>
                      {s.icon}
                      <div className="hiw-stepnum">{s.step}</div>
                    </div>
                    <div className="hiw-title" style={{color:s.color}}>{s.title}</div>
                    <div className="hiw-desc">{s.desc}</div>
                  </div>

                  {/* Arrow between cards (not after last) */}
                  {i < steps.length - 1 && (
                    <div className="hiw-arrow">
                      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                        <path d="M2 8h22M18 3l7 5-7 5"
                          stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}