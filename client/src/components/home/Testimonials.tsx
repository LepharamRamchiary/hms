export function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "I used to wake up at 5am just to get a hospital token. Now I book it from my phone the night before and walk in at my exact time. This system is a blessing.",
    },
    {
      name: "Rahul Verma",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "All my prescriptions and reports are saved digitally. My doctor could see my full history from last year in seconds. No more carrying old files everywhere.",
    },
    {
      name: "Dr. Anjali Mehta",
      role: "General Physician",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "The doctor dashboard is incredibly smooth. I see my patient queue, their history, and write prescriptions digitally — all from one screen. Zero paperwork.",
    },
    {
      name: "Suresh Kumar",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "The billing used to be a nightmare — wrong charges every time. Now the bill generates automatically and it's always accurate. I got a clear invoice on my phone instantly.",
    },
    {
      name: "Meera Nair",
      role: "Receptionist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "Managing check-ins used to take hours. With the receptionist dashboard I can see all appointments, mark arrivals, and handle billing in minutes. My job is so much easier now.",
    },
    {
      name: "Amit Patel",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "I live 40km from the hospital. Before this system I'd travel and still wait 4 hours. Now I book online, track my token position live, and arrive at exactly the right time.",
    },
    {
      name: "Dr. Sanjay Rao",
      role: "Specialist",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "Patient history, prescriptions, lab reports — everything is one click away. I can focus entirely on the patient instead of hunting through paper files.",
    },
    {
      name: "Kavitha Reddy",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=60&h=60&auto=format&fit=crop",
      rating: 5,
      text: "Downloaded my prescription right after the consultation. Shared it with the pharmacy on WhatsApp. Never had to print or carry a paper slip again.",
    },
  ];

  // duplicate for seamless loop
  const row1 = [...reviews.slice(0, 4), ...reviews.slice(0, 4)];
  const row2 = [...reviews.slice(4), ...reviews.slice(4)];

  const StarRating = ({ count }: { count: number }) => (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );

  type Review = { name: string; role: string; avatar: string; rating: number; text: string };
  const Card = ({ r }: { r: Review }) => (
    <div className="tm-card">
      <div className="tm-card-top">
        <img src={r.avatar} alt={r.name} className="tm-avatar" />
        <div>
          <div className="tm-name">{r.name}</div>
          <div className="tm-role">{r.role}</div>
        </div>
        <div className="tm-quote-icon">"</div>
      </div>
      <StarRating count={r.rating} />
      <p className="tm-text">{r.text}</p>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .tm-section * { font-family: 'Sora', 'DM Sans', sans-serif; box-sizing: border-box; }

        @keyframes tm-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes tm-blobFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-18px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── background — exact hero match ── */
        .tm-section {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #e8f4ff 100%);
        }
        .tm-blob {
          position: absolute; pointer-events: none; z-index: 0;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: tm-blobFloat 6s ease-in-out infinite;
        }
        .tm-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
          background-size: 28px 28px; opacity: 0.2;
        }

        /* badge */
        .tm-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 18px; border-radius: 999px;
          font-size: 0.78rem; font-weight: 600;
          background: rgba(37,99,235,0.08); color: #2563eb;
          border: 1px solid rgba(37,99,235,0.15);
        }
        .tm-bdot {
          width: 8px; height: 8px; border-radius: 50%; background: #2563eb;
          animation: pulse-ring 2s infinite; display: inline-block;
        }
        .tm-gtext {
          background: linear-gradient(135deg, #1e3a8a, #2563eb 40%, #7c3aed);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: tm-shimmer 4s linear infinite;
        }

        /* ── marquee wrapper ── */
        .tm-marquee-wrap {
          overflow: hidden;
          width: 100%;
          /* fade edges */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .tm-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          will-change: transform;
        }
        .tm-marquee-track.go-left  { animation: marquee-left  38s linear infinite; }
        .tm-marquee-track.go-right { animation: marquee-right 38s linear infinite; }
        .tm-marquee-wrap:hover .tm-marquee-track { animation-play-state: paused; }

        /* ── single review card ── */
        .tm-card {
          width: 300px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(37,99,235,0.10);
          border-radius: 20px;
          padding: 22px 20px;
          display: flex; flex-direction: column; gap: 10px;
          box-shadow: 0 4px 20px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.03);
          transition: transform .25s, box-shadow .25s;
          cursor: default;
        }
        .tm-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(37,99,235,0.13);
          border-color: rgba(37,99,235,0.22);
        }
        .tm-card-top {
          display: flex; align-items: center; gap: 12px; position: relative;
        }
        .tm-avatar {
          width: 44px; height: 44px; border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(37,99,235,0.15);
          flex-shrink: 0;
        }
        .tm-name  { font-size: .88rem; font-weight: 700; color: #1e293b; }
        .tm-role  { font-size: .72rem; color: #2563eb; font-weight: 500; }
        .tm-quote-icon {
          position: absolute; right: 0; top: -4px;
          font-size: 2.8rem; font-weight: 800; color: #2563eb;
          opacity: 0.10; line-height: 1; pointer-events: none;
          font-family: Georgia, serif;
        }
        .tm-text {
          font-size: .78rem; color: #475569; line-height: 1.6;
          font-family: 'DM Sans', sans-serif;
          margin: 0;
        }

        /* ── bottom stat strip ── */
        .tm-stats {
          border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg, #1e3a8a, #2563eb 50%, #7c3aed);
          box-shadow: 0 16px 48px rgba(37,99,235,.28);
          display: flex; flex-wrap: wrap;
        }
        .tm-stat {
          flex:1; min-width:130px; padding:22px 16px;
          display:flex; flex-direction:column; align-items:center; gap:3px; position:relative;
        }
        .tm-stat+.tm-stat::before {
          content:''; position:absolute; left:0; top:18%; bottom:18%;
          width:1px; background:rgba(255,255,255,.15);
        }
        .tm-stat-num   { font-size:1.65rem; font-weight:800; color:#fff; }
        .tm-stat-label { font-size:.72rem; font-weight:500; color:rgba(255,255,255,.62); text-align:center; }

        @media (max-width: 560px) {
          .tm-stat+.tm-stat::before { display: none; }
          .tm-stat { border-top: 1px solid rgba(255,255,255,.1); }
          .tm-stat:first-child { border-top: none; }
          .tm-card { width: 260px; }
        }
      `}</style>

      <section className="tm-section py-2 sm:py-4">

        {/* blobs */}
        <div className="tm-blob" style={{
          width:"clamp(200px,50vw,520px)", height:"clamp(200px,50vw,520px)",
          background:"radial-gradient(circle,rgba(147,197,253,.35),rgba(196,181,253,.15))",
          top:"2%", left:"-8%",
        }}/>
        <div className="tm-blob" style={{
          width:"clamp(120px,30vw,320px)", height:"clamp(120px,30vw,320px)",
          background:"radial-gradient(circle,rgba(167,243,208,.2),rgba(147,197,253,.1))",
          bottom:"8%", right:"2%", animationDelay:"2s",
        }}/>
        <div className="tm-dots"/>

        <div className="relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-14 px-4">
            <div className="tm-badge mx-auto mb-4">
              <span className="tm-bdot"/>Patient Stories
            </div>
            <h2 className="font-bold leading-tight mb-4"
              style={{fontSize:"clamp(1.7rem,4.5vw,3rem)", letterSpacing:"-0.02em", color:"#1e293b"}}>
              What Our Patients{" "}
              <span className="tm-gtext">Are Saying</span>
            </h2>
            <p style={{color:"#64748b", fontSize:"clamp(.88rem,2vw,1rem)", maxWidth:480, margin:"0 auto", fontFamily:"'DM Sans',sans-serif", lineHeight:1.65}}>
              Real stories from real patients and staff — see how the system changed their hospital experience.
            </p>
          </div>

          {/* ── Row 1 — scrolls LEFT ── */}
          <div className="tm-marquee-wrap mb-5">
            <div className="tm-marquee-track go-left">
              {row1.map((r, i) => <Card key={i} r={r} />)}
            </div>
          </div>

          {/* ── Row 2 — scrolls RIGHT ── */}
          <div className="tm-marquee-wrap mb-16">
            <div className="tm-marquee-track go-right">
              {row2.map((r, i) => <Card key={i} r={r} />)}
            </div>
          </div>


        </div>
      </section>
    </>
  );
}