export function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .about-section * { font-family: 'Sora', 'DM Sans', sans-serif; box-sizing: border-box; }

        @keyframes about-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes about-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes about-blobFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }

        /* ── seamless hero background ── */
        .about-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%);
        }

        /* blobs matching hero */
        .about-blob {
          position: absolute; pointer-events: none; z-index: 0;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: about-blobFloat 6s ease-in-out infinite;
        }

        /* dot grid matching hero */
        .about-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.2;
        }

        /* badge */
        .about-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 18px; border-radius: 999px;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.02em;
          background: rgba(37,99,235,0.08); color: #2563eb;
          border: 1px solid rgba(37,99,235,0.15);
          margin-bottom: 16px;
        }
        .about-badge-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #2563eb;
          animation: pulse-ring 2s infinite; display: inline-block;
        }

        .about-gradient-text {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 40%, #7c3aed 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: about-shimmer 4s linear infinite;
        }

        /* trust pill */
        .about-trust-pill {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 6px 16px 6px 6px; border-radius: 999px;
          background: rgba(255,255,255,0.80);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(37,99,235,0.12);
          box-shadow: 0 4px 16px rgba(37,99,235,0.08);
          font-size: 0.8rem; font-weight: 500; color: #475569;
          margin-bottom: 20px;
        }
        .about-avatar-stack { display: flex; }
        .about-avatar {
          width: 30px; height: 30px; border-radius: 50%;
          border: 2px solid white; object-fit: cover;
          margin-left: -8px;
        }
        .about-avatar:first-child { margin-left: 0; }

        /* image card */
        .about-img-wrap {
          position: relative;
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(37,99,235,0.15), 0 4px 16px rgba(0,0,0,0.06);
          animation: about-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
          flex-shrink: 0;
        }
        .about-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        /* floating stat badge on image */
        .about-img-badge {
          position: absolute; bottom: 18px; left: 18px;
          background: rgba(255,255,255,0.90);
          backdrop-filter: blur(12px);
          border-radius: 16px; padding: 10px 16px;
          box-shadow: 0 8px 28px rgba(37,99,235,0.15);
          display: flex; align-items: center; gap: 10px;
        }
        .about-img-badge-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, #dbeafe, #ede9fe);
          display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
        }
        .about-img-badge-num  { font-size: 1rem; font-weight: 800; color: #1e293b; line-height: 1; }
        .about-img-badge-label { font-size: 0.68rem; color: #64748b; font-family: 'DM Sans', sans-serif; }

        /* feature cards */
        .about-feature {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px;
          background: rgba(255,255,255,0.70);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(37,99,235,0.10);
          border-radius: 18px;
          box-shadow: 0 4px 18px rgba(37,99,235,0.06), 0 1px 4px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: about-fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .about-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(37,99,235,0.12);
        }
        .about-feature-icon {
          width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
        }
        .about-feature-title { font-size: 0.9rem; font-weight: 700; color: #1e293b; margin-bottom: 3px; }
        .about-feature-desc  { font-size: 0.78rem; color: #64748b; line-height: 1.5; font-family: 'DM Sans', sans-serif; }

        /* responsive */
        @media (max-width: 1023px) {
          .about-layout { flex-direction: column !important; align-items: center !important; }
          .about-img-wrap { width: 100% !important; max-width: 480px !important; height: 300px !important; }
        }
        @media (max-width: 480px) {
          .about-img-wrap { height: 240px !important; }
        }
      `}</style>

      <section className="about-section py-20 sm:py-28">

        {/* blobs — same as hero */}
        <div className="about-blob" style={{
          width: "clamp(200px,50vw,520px)", height: "clamp(200px,50vw,520px)",
          background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.15) 100%)",
          top: "2%", left: "-8%",
        }} />
        <div className="about-blob" style={{
          width: "clamp(120px,30vw,320px)", height: "clamp(120px,30vw,320px)",
          background: "radial-gradient(circle, rgba(167,243,208,0.2) 0%, rgba(147,197,253,0.1) 100%)",
          bottom: "6%", right: "3%", animationDelay: "2s",
        }} />
        <div className="about-dots" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* ── Top header ── */}
          <div className="text-center mb-14">
            <div className="about-badge mx-auto">
              <span className="about-badge-dot" />
              About Our Platform
            </div>

            {/* trust pill */}
            <div className="about-trust-pill mx-auto w-fit">
              <div className="about-avatar-stack">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop",
                ].map((src, i) => (
                  <img key={i} src={src} alt="user" className="about-avatar" />
                ))}
              </div>
              Trusted by <strong style={{ color: "#2563eb", marginLeft: 4 }}>10,000+</strong>&nbsp;patients
            </div>

            <h2
              className="font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.7rem,4.5vw,3rem)", letterSpacing: "-0.02em", color: "#1e293b" }}
            >
              Built for <span className="about-gradient-text">Modern Healthcare</span>
            </h2>
            <p style={{
              color: "#64748b", fontSize: "clamp(0.88rem,2vw,1rem)",
              maxWidth: 520, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65,
            }}>
              A complete hospital management solution designed for speed, accuracy, and ease — from the front desk to the doctor's room.
            </p>
          </div>

          {/* ── Image + Features layout ── */}
          <div className="about-layout flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

            {/* Image */}
            <div
              className="about-img-wrap"
              style={{ width: "clamp(280px,42%,460px)", height: "clamp(320px,52vw,520px)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                alt="Hospital management"
              />
              {/* floating badge */}
              <div className="about-img-badge">
                <div className="about-img-badge-icon">🏥</div>
                <div>
                  <div className="about-img-badge-num">10,000+</div>
                  <div className="about-img-badge-label">Patients Served</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 w-full flex flex-col gap-4">
              <div style={{ marginBottom: 8 }}>
                <h3
                  className="font-bold"
                  style={{ fontSize: "clamp(1.3rem,3vw,2rem)", color: "#1e293b", letterSpacing: "-0.01em" }}
                >
                  Everything Your Hospital Needs
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", marginTop: 6, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                  Designed to replace every paper-based, manual process with a fast, reliable digital workflow.
                </p>
              </div>

              {[
                {
                  icon: "⚡",
                  bg: "rgba(37,99,235,0.08)", color: "#2563eb",
                  title: "Lightning-Fast Performance",
                  desc: "Pages load instantly. Appointments, records, and billing respond in real time — no lag, no wait.",
                },
                {
                  icon: "🎨",
                  bg: "rgba(124,58,237,0.08)", color: "#7c3aed",
                  title: "Clean, Intuitive Interface",
                  desc: "Designed for doctors, receptionists, and admins — anyone can use it on day one without training.",
                },
                {
                  icon: "🔒",
                  bg: "rgba(8,145,178,0.08)", color: "#0891b2",
                  title: "Secure Patient Data",
                  desc: "Every record is encrypted and access-controlled by role — only the right people see the right data.",
                },
                {
                  icon: "🧩",
                  bg: "rgba(5,150,105,0.08)", color: "#059669",
                  title: "Role-Based Access — Admin, Doctor, Patient",
                  desc: "Three tailored dashboards. Admin manages all. Doctor sees patient history. Patient tracks appointments.",
                },
              ].map((f, i) => (
                <div key={f.title} className="about-feature" style={{ animationDelay: `${i * 0.1}s`, borderColor: `${f.color}22` }}>
                  <div className="about-feature-icon" style={{ background: f.bg }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="about-feature-title" style={{ color: f.color }}>{f.title}</div>
                    <div className="about-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}