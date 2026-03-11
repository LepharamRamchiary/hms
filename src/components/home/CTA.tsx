export function CTA() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .cta-section * { font-family: 'Sora', 'DM Sans', sans-serif; box-sizing: border-box; }

        @keyframes cta-blobFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-20px); }
        }
        @keyframes cta-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes cta-fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 18px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes btn-shine {
          0%   { left: -75%; }
          100% { left: 125%; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes float-card2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50%       { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── background — exact hero match ── */
        .cta-section {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%);
          padding: 80px 0 100px;
        }
        .cta-blob {
          position: absolute; pointer-events: none; z-index: 0;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: cta-blobFloat 6s ease-in-out infinite;
        }
        .cta-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px; opacity: 0.2;
        }

        /* ── glass card (main CTA box) ── */
        .cta-box {
          position: relative; z-index: 10;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid rgba(37,99,235,0.14);
          border-radius: 32px;
          padding: clamp(40px, 7vw, 80px) clamp(24px, 6vw, 80px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.6) inset,
            0 20px 60px rgba(37,99,235,0.12),
            0 4px 16px rgba(0,0,0,0.04);
          text-align: center;
          animation: cta-fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
          overflow: hidden;
        }

        /* inner glow rings */
        .cta-ring {
          position: absolute; border-radius: 50%; pointer-events: none;
          border: 1px solid rgba(37,99,235,0.08);
        }

        /* badge */
        .cta-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 18px; border-radius: 999px;
          font-size: 0.78rem; font-weight: 600;
          background: rgba(37,99,235,0.08); color: #2563eb;
          border: 1px solid rgba(37,99,235,0.15);
          margin-bottom: 24px;
        }
        .cta-bdot {
          width: 8px; height: 8px; border-radius: 50%; background: #2563eb;
          animation: pulse-ring 2s infinite; display: inline-block;
        }

        /* big heading */
        .cta-heading {
          font-size: clamp(1.9rem, 5.5vw, 4rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em; color: #0f172a;
          margin-bottom: 20px;
        }
        .cta-gradient {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 40%, #7c3aed 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: cta-shimmer 4s linear infinite;
        }

        .cta-sub {
          color: #64748b; font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-family: 'DM Sans', sans-serif; line-height: 1.65;
          max-width: 560px; margin: 0 auto 36px;
        }

        /* CTA button */
        .cta-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 40px; border-radius: 999px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #7c3aed 100%);
          color: #fff; font-size: 1rem; font-weight: 700;
          border: none; cursor: pointer;
          box-shadow: 0 10px 32px rgba(37,99,235,0.40), 0 2px 8px rgba(37,99,235,0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 18px 48px rgba(37,99,235,0.50), 0 4px 12px rgba(37,99,235,0.30);
        }
        .cta-btn:active { transform: translateY(0) scale(0.98); }
        /* shine sweep */
        .cta-btn::after {
          content: '';
          position: absolute; top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
          animation: btn-shine 2.8s ease-in-out infinite;
          pointer-events: none;
        }
        .cta-btn-icon {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .cta-btn:hover .cta-btn-icon { transform: translateX(4px); }

        /* secondary link */
        .cta-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #2563eb; font-size: 0.88rem; font-weight: 600;
          text-decoration: none; margin-top: 16px;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .cta-link:hover { gap: 10px; opacity: 0.8; }

        /* trust row */
        .cta-trust {
          display: flex; align-items: center; justify-content: center;
          gap: 24px; margin-top: 40px; flex-wrap: wrap;
        }
        .cta-trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; font-weight: 500; color: #64748b;
          font-family: 'DM Sans', sans-serif;
        }
        .cta-trust-icon {
          width: 28px; height: 28px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.95rem;
          background: rgba(37,99,235,0.07);
        }

        /* ── floating mini cards ── */
        .cta-float-left {
          position: absolute; left: -10px; top: 50%;
          transform: translateY(-60%) rotate(-2deg);
          animation: float-card 4s ease-in-out infinite;
          z-index: 5;
        }
        .cta-float-right {
          position: absolute; right: -10px; top: 50%;
          transform: translateY(-40%) rotate(2deg);
          animation: float-card2 4.5s ease-in-out 0.5s infinite;
          z-index: 5;
        }
        .cta-mini-card {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(37,99,235,0.12);
          border-radius: 18px; padding: 14px 18px;
          box-shadow: 0 8px 28px rgba(37,99,235,0.13);
          display: flex; align-items: center; gap: 10px;
          white-space: nowrap;
        }
        .cta-mini-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
        }
        .cta-mini-num   { font-size: 0.95rem; font-weight: 800; color: #1e293b; line-height: 1; }
        .cta-mini-label { font-size: 0.65rem; color: #64748b; font-family: 'DM Sans', sans-serif; }

        /* spinning ring decoration */
        .cta-spin-ring {
          position: absolute; border-radius: 50%; pointer-events: none;
          border: 1.5px dashed rgba(37,99,235,0.12);
          animation: spin-slow 18s linear infinite;
        }

        @media (max-width: 900px) {
          .cta-float-left, .cta-float-right { display: none; }
        }
        @media (max-width: 560px) {
          .cta-trust { gap: 14px; }
          .cta-box { border-radius: 24px; }
        }
      `}</style>

      <section className="cta-section">
        {/* blobs */}
        <div className="cta-blob" style={{
          width:"clamp(200px,50vw,520px)", height:"clamp(200px,50vw,520px)",
          background:"radial-gradient(circle,rgba(147,197,253,.35),rgba(196,181,253,.15))",
          top:"2%", right:"-8%",
        }}/>
        <div className="cta-blob" style={{
          width:"clamp(120px,30vw,320px)", height:"clamp(120px,30vw,320px)",
          background:"radial-gradient(circle,rgba(167,243,208,.2),rgba(147,197,253,.1))",
          bottom:"8%", left:"2%", animationDelay:"2s",
        }}/>
        <div className="cta-dots"/>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="cta-box">

            {/* spinning rings */}
            <div className="cta-spin-ring" style={{width:320, height:320, top:"50%", left:"50%", marginTop:-160, marginLeft:-160}}/>
            <div className="cta-spin-ring" style={{width:520, height:520, top:"50%", left:"50%", marginTop:-260, marginLeft:-260, animationDirection:"reverse", animationDuration:"28s"}}/>

            {/* inner glow */}
            <div className="cta-ring" style={{width:200, height:200, top:-80, right:-60, background:"radial-gradient(circle,rgba(124,58,237,0.08),transparent)", border:"none"}}/>
            <div className="cta-ring" style={{width:160, height:160, bottom:-60, left:-40, background:"radial-gradient(circle,rgba(37,99,235,0.08),transparent)", border:"none"}}/>

            {/* floating mini cards */}
            <div className="cta-float-left">
              <div className="cta-mini-card">
                <div className="cta-mini-icon" style={{background:"rgba(37,99,235,0.08)"}}>🎫</div>
                <div>
                  <div className="cta-mini-num">2.4K+</div>
                  <div className="cta-mini-label">Tokens Booked Today</div>
                </div>
              </div>
            </div>
            <div className="cta-float-right">
              <div className="cta-mini-card">
                <div className="cta-mini-icon" style={{background:"rgba(5,150,105,0.08)"}}>📥</div>
                <div>
                  <div className="cta-mini-num">98%</div>
                  <div className="cta-mini-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* badge */}
            <div className="cta-badge mx-auto" style={{width:"fit-content"}}>
              <span className="cta-bdot"/>
              Join 10,000+ Patients Already Using This
            </div>

            {/* heading */}
            <h2 className="cta-heading">
              Ready to Transform Your<br/>
              <span className="cta-gradient">Hospital Digitally?</span>
            </h2>

            {/* subtext */}
            <p className="cta-sub">
              No more paper tokens. No more lost records. No more billing errors.
              Get your hospital running on a fully digital system — today.
            </p>

            {/* buttons */}
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:0}}>
              <button className="cta-btn">
                <div className="cta-btn-icon">🚀</div>
                Get Started Now
              </button>
              <a href="#" className="cta-link">
                See how it works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* trust row */}
            <div className="cta-trust">
              {[
                { icon:"🔒", label:"Secure & Private" },
                { icon:"⚡", label:"Setup in Minutes" },
                { icon:"📱", label:"Works on Any Device" },
                { icon:"🆓", label:"Free to Get Started" },
              ].map(t => (
                <div key={t.label} className="cta-trust-item">
                  <div className="cta-trust-icon">{t.icon}</div>
                  {t.label}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}