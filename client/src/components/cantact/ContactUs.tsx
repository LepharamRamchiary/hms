import { useState } from "react";

const contactInfo = [
  {
    icon: "📍",
    title: "Our Location",
    lines: ["123 Health Avenue, MedCity", "Guwahati, Assam – 781001"],
    action: { label: "Get Directions", href: "https://maps.google.com" },
    color: "from-blue-100 to-indigo-100",
    accent: "text-blue-600",
  },
  {
    icon: "📞",
    title: "Phone Numbers",
    lines: ["+91 98765 43210 (General)", "+91 98765 43211 (Emergency)"],
    action: { label: "Call Now", href: "tel:+919876543210" },
    color: "from-emerald-100 to-teal-100",
    accent: "text-emerald-600",
  },
  {
    icon: "📧",
    title: "Email Us",
    lines: ["info@hms.com (General)", "support@hms.com (Support)"],
    action: { label: "Send Email", href: "mailto:info@hms.com" },
    color: "from-violet-100 to-purple-100",
    accent: "text-violet-600",
  },
  {
    icon: "🕐",
    title: "Working Hours",
    lines: ["Mon – Sat: 8:00 AM – 8:00 PM", "Emergency: 24 / 7"],
    action: { label: "Book Appointment", href: "/login" },
    color: "from-amber-100 to-orange-100",
    accent: "text-amber-600",
  },
];

const departments = [
  "General Enquiry",
  "Appointment Booking",
  "Emergency",
  "Billing & Insurance",
  "Feedback & Complaints",
  "Careers",
  "Other",
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment online via our patient portal, call our helpline, or walk in to the front desk. Same-day slots are available for urgent cases.",
  },
  {
    q: "What documents do I need to bring?",
    a: "Please bring a valid photo ID, any previous medical records, insurance card (if applicable), and your appointment confirmation number.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes, we are partnered with 40+ insurance providers. Our billing desk will help verify your coverage before the consultation.",
  },
  {
    q: "Is emergency care available 24/7?",
    a: "Absolutely. Our Emergency Department operates around the clock with a full team of specialists and critical care nurses.",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

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
          from { opacity: 0; transform: scale(0.91); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.7); }
          70%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }

        .font-sora { font-family: 'Sora', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }
        .blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; animation: floatY 6s ease-in-out infinite; }
        .dot-pattern { background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px); background-size: 28px 28px; }
        .animate-slide-up { animation: slideInUp 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-scale-in { animation: scaleIn   0.55s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-fade-in  { animation: fadeIn    0.5s ease both; }
        .animate-pop-in   { animation: popIn     0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-float    { animation: floatY 5s ease-in-out infinite; }

        .input-field {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          font-size: 0.85rem;
          color: #334155;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .input-field:focus {
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .input-field.error { border-color: #f87171; background: #fff5f5; }
        textarea.input-field { resize: none; }
      `}</style>

      <div className="font-sora min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100 text-slate-800">
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            padding:
              "clamp(80px,12vw,130px) clamp(20px,6vw,80px) clamp(60px,8vw,80px)",
            minHeight: "44vh",
          }}
        >
          <div
            className="blob absolute"
            style={{
              width: "clamp(200px,44vw,500px)",
              height: "clamp(200px,44vw,500px)",
              background:
                "radial-gradient(circle,rgba(147,197,253,0.35) 0%,rgba(196,181,253,0.15) 100%)",
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
                "radial-gradient(circle,rgba(167,243,208,0.25) 0%,rgba(147,197,253,0.1) 100%)",
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
              fontSize: "clamp(70px,15vw,190px)",
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
            CONTACT
          </div>

          <div className="relative z-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-600 text-xs font-semibold tracking-[0.1em] uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping inline-block opacity-75" />
              Get In Touch
            </div>

            <h1
              className="font-bold text-slate-800 mb-4"
              style={{
                fontSize: "clamp(2rem,6vw,4.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              We're Here{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                For You
              </span>
            </h1>

            <p
              className="font-dm text-slate-500 mx-auto leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.8vw,1.1rem)", maxWidth: 500 }}
            >
              Have a question, need to book an appointment, or just want to
              reach out? Our team is ready to help you — every day of the week.
            </p>
          </div>
        </section>

        {/* ── CONTACT INFO CARDS ── */}
        <section
          style={{ padding: "0 clamp(20px,6vw,48px) clamp(40px,6vw,72px)" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 flex flex-col gap-3 animate-scale-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(37,99,235,0.13)]"
                style={{
                  boxShadow: "0 4px 20px rgba(37,99,235,0.07)",
                  border: "1px solid rgba(37,99,235,0.08)",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${info.color}`}
                >
                  {info.icon}
                </div>

                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1.5">
                    {info.title}
                  </div>
                  {info.lines.map((line, j) => (
                    <div
                      key={j}
                      className="font-dm text-xs text-slate-500 leading-relaxed"
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2 border-t border-slate-100">
                  <a
                    href={info.action.href}
                    className={`font-dm text-xs font-semibold ${info.accent} flex items-center gap-1 hover:gap-2 transition-all duration-200`}
                  >
                    {info.action.label}
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FORM + MAP ── */}
        <section
          style={{ padding: "clamp(32px,5vw,56px) clamp(20px,6vw,48px)" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* ── CONTACT FORM ── */}
            <div
              className="bg-white rounded-3xl p-7 animate-scale-in"
              style={{
                boxShadow: "0 8px 40px rgba(37,99,235,0.09)",
                border: "1px solid rgba(37,99,235,0.08)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 animate-pop-in text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-4xl">
                    ✅
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl">
                    Message Sent!
                  </h3>
                  <p className="font-dm text-sm text-slate-500 max-w-xs">
                    Thanks for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        department: "",
                        message: "",
                      });
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-2">
                      <span className="inline-block w-5 h-px bg-blue-600" />
                      Send a Message
                    </div>
                    <h2 className="font-bold text-slate-800 text-xl">
                      How can we help?
                    </h2>
                    <p className="font-dm text-xs text-slate-400 mt-1">
                      Fill in the form and we'll get back to you shortly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-dm text-xs font-semibold text-slate-600">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className={`input-field ${errors.name ? "error" : ""}`}
                        />
                        {errors.name && (
                          <span className="font-dm text-[10px] text-rose-500">
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-dm text-xs font-semibold text-slate-600">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 00000 00000"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-dm text-xs font-semibold text-slate-600">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={`input-field ${errors.email ? "error" : ""}`}
                      />
                      {errors.email && (
                        <span className="font-dm text-[10px] text-rose-500">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Department */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-dm text-xs font-semibold text-slate-600">
                        Department / Topic
                      </label>
                      <select
                        value={form.department}
                        onChange={(e) =>
                          setForm({ ...form, department: e.target.value })
                        }
                        className="input-field"
                      >
                        <option value="">Select a topic…</option>
                        {departments.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-dm text-xs font-semibold text-slate-600">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us how we can help you…"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`input-field ${errors.message ? "error" : ""}`}
                      />
                      {errors.message && (
                        <span className="font-dm text-[10px] text-rose-500">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                      style={{ boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}
                    >
                      Send Message →
                    </button>

                    <p className="font-dm text-[10px] text-slate-400 text-center">
                      We typically respond within{" "}
                      <span className="font-semibold text-slate-500">
                        24 hours
                      </span>{" "}
                      on business days.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* ── MAP + QUICK LINKS ── */}
            <div
              className="flex flex-col gap-5 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Map embed placeholder */}
              <div
                className="w-full rounded-3xl overflow-hidden relative"
                style={{
                  height: "clamp(220px,35vw,340px)",
                  boxShadow: "0 8px 40px rgba(37,99,235,0.12)",
                  border: "1px solid rgba(37,99,235,0.1)",
                }}
              >
                <iframe
                  title="HMS Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57318.79814601088!2d91.68628!3d26.14455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5913e2d79a99%3A0x3a9e39f0a7ccf2ee!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Map overlay badge */}
                <div
                  className="absolute bottom-3 left-3 bg-white rounded-xl px-3 py-2 flex items-center gap-2"
                  style={{ boxShadow: "0 4px 16px rgba(37,99,235,0.15)" }}
                >
                  <span className="text-lg">📍</span>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">
                      HMS Hospital
                    </div>
                    <div className="font-dm text-[10px] text-slate-500">
                      Guwahati, Assam
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "📅",
                    label: "Book Appointment",
                    sub: "Available 24/7 online",
                    href: "/login",
                    bg: "from-blue-600 to-blue-700",
                    text: "text-white",
                    sub2: "text-white/70",
                  },
                  {
                    icon: "🚑",
                    label: "Emergency Line",
                    sub: "+91 98765 43211",
                    href: "tel:+919876543211",
                    bg: "from-rose-500 to-rose-600",
                    text: "text-white",
                    sub2: "text-white/70",
                  },
                  {
                    icon: "💬",
                    label: "Live Chat",
                    sub: "Avg. response < 2 min",
                    href: "#",
                    bg: "from-white to-white",
                    text: "text-slate-800",
                    sub2: "text-slate-400",
                    border: true,
                  },
                  {
                    icon: "📋",
                    label: "Patient Portal",
                    sub: "Manage your records",
                    href: "/login",
                    bg: "from-white to-white",
                    text: "text-slate-800",
                    sub2: "text-slate-400",
                    border: true,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className={`rounded-2xl p-4 flex flex-col gap-1.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-gradient-to-br ${item.bg} ${item.border ? "border border-slate-200" : ""}`}
                    style={{
                      boxShadow: item.border
                        ? "0 4px 16px rgba(37,99,235,0.06)"
                        : "0 6px 24px rgba(37,99,235,0.25)",
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className={`font-bold text-sm ${item.text}`}>
                      {item.label}
                    </div>
                    <div className={`font-dm text-[10px] ${item.sub2}`}>
                      {item.sub}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div
                className="bg-white rounded-2xl p-5 flex items-center justify-between"
                style={{
                  boxShadow: "0 4px 20px rgba(37,99,235,0.07)",
                  border: "1px solid rgba(37,99,235,0.08)",
                }}
              >
                <span className="font-dm text-xs font-semibold text-slate-500">
                  Follow us on
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { name: "Facebook", icon: "f", color: "bg-blue-600" },
                    {
                      name: "Instagram",
                      icon: "ig",
                      color: "bg-gradient-to-br from-pink-500 to-violet-600",
                    },
                    { name: "Twitter / X", icon: "x", color: "bg-slate-800" },
                    { name: "YouTube", icon: "▶", color: "bg-rose-500" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      title={s.name}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-white text-[10px] font-bold ${s.color} transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          style={{ padding: "clamp(32px,5vw,64px) clamp(20px,6vw,48px)" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
                <span className="inline-block w-6 h-px bg-blue-600" />
                FAQ
                <span className="inline-block w-6 h-px bg-blue-600" />
              </div>
              <h2
                className="font-bold text-slate-800"
                style={{
                  fontSize: "clamp(1.5rem,3.5vw,2.4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Common{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden animate-scale-in transition-all duration-200"
                  style={{
                    boxShadow: "0 4px 16px rgba(37,99,235,0.07)",
                    border: "1px solid rgba(37,99,235,0.08)",
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-slate-800 text-sm">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? "bg-blue-600 text-white rotate-180" : "bg-blue-50 text-blue-600"}`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
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
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}
                  >
                    <p className="font-dm text-sm text-slate-500 leading-relaxed px-5 pb-4">
                      {faq.a}
                    </p>
                  </div>
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
            Ready to visit us?
          </h2>
          <p
            className="font-dm mb-8 mx-auto text-white/70"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1rem)", maxWidth: 420 }}
          >
            Book your appointment online in under 2 minutes or call us directly
            — we're always ready to help.
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
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              📞 Call Us Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
