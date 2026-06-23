import { useState, useRef } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Inquiry form for the Contact page. Submissions are captured by Netlify Forms:
 * a matching hidden static <form name="contact"> lives in public/index.html so
 * Netlify's build registers the form, and this React form POSTs urlencoded data
 * to "/" via AJAX (no page nav). Owner gets them by email once a notification is
 * configured in the Netlify dashboard. Honeypot (bot-field) handles spam.
 */

const INQUIRY_OPTIONS = [
  "Full-time role",
  "Contract or freelance project",
  "Remote opportunity",
  "Speaking or advisory",
  "Just saying hi",
];

const BLANK = { full_name: "", email: "", inquiry_type: "", company: "", message: "", "bot-field": "" };

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const fieldClass = (hasError) =>
  `w-full rounded-xl bg-[#100210]/55 border px-4 py-3 text-[15px] text-[#F4F3FA] placeholder:text-[#6F6885] outline-none transition-colors focus:ring-2 focus:ring-[#075EFD]/30 ${
    hasError ? "border-[#F5379B] focus:border-[#F5379B]" : "border-white/50 focus:border-[#075EFD]"
  }`;

export default function ContactForm() {
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const successRef = useRef(null);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.full_name.trim()) next.full_name = "Please enter your name.";
    if (!form.email.trim()) next.email = "I’ll need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "That email doesn’t look right. Try name@company.com.";
    if (!form.inquiry_type) next.inquiry_type = "Pick the closest option.";
    if (!form.company.trim()) next.company = "Let me know who you're with.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("success");
      setForm(BLANK);
      setTimeout(() => successRef.current?.focus(), 0);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        data-testid="contact-form-success"
        className="dark-card rounded-3xl border border-white/10 p-8 md:p-10 outline-none flex flex-col items-center text-center justify-center min-h-[420px]"
      >
        <span className="h-14 w-14 rounded-2xl bg-[#F5379B] grid place-items-center text-white mb-5">
          <CheckCircle2 size={26} />
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-black mb-2">Message sent.</h3>
        <p className="text-[#A29CB4] max-w-xs">
          Thanks for reaching out. I reply within 24 hours on weekdays.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#5B9BFF] hover:text-[#2E78FF] transition-colors"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      data-testid="contact-form"
      className="dark-card rounded-3xl border border-white/10 p-6 md:p-8"
    >
      {/* Netlify needs these in the POST body */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty if you’re human:
          <input name="bot-field" value={form["bot-field"]} onChange={update} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="mb-6">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-3">send a message</p>
        <h2 className="font-display text-2xl md:text-3xl font-black leading-tight">
          Tell me what you’re <span className="italic font-light">working on.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-1.5">
            Your name <span className="text-[#F5379B]">*</span>
          </label>
          <input
            id="cf-name"
            name="full_name"
            type="text"
            value={form.full_name}
            onChange={update}
            required
            autoComplete="name"
            placeholder="Jane Doe"
            aria-required="true"
            aria-invalid={!!errors.full_name}
            aria-describedby={errors.full_name ? "cf-name-err" : undefined}
            className={fieldClass(errors.full_name)}
          />
          {errors.full_name && <p id="cf-name-err" className="mt-1.5 text-xs text-[#F5379B]">{errors.full_name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-1.5">
            Email <span className="text-[#F5379B]">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            inputMode="email"
            value={form.email}
            onChange={update}
            required
            autoComplete="email"
            placeholder="name@company.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={fieldClass(errors.email)}
          />
          {errors.email && <p id="cf-email-err" className="mt-1.5 text-xs text-[#F5379B]">{errors.email}</p>}
        </div>

        {/* Inquiry type */}
        <div>
          <label htmlFor="cf-inquiry" className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-1.5">
            What’s this about? <span className="text-[#F5379B]">*</span>
          </label>
          <div className="relative">
            <select
              id="cf-inquiry"
              name="inquiry_type"
              value={form.inquiry_type}
              onChange={update}
              required
              aria-required="true"
              aria-invalid={!!errors.inquiry_type}
              aria-describedby={errors.inquiry_type ? "cf-inquiry-err" : undefined}
              className={`${fieldClass(errors.inquiry_type)} appearance-none pr-10 ${form.inquiry_type ? "" : "text-[#6F6885]"}`}
            >
              <option value="" disabled>
                Select one…
              </option>
              {INQUIRY_OPTIONS.map((o) => (
                <option key={o} value={o} className="text-[#1A1326]">
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A29CB4]" />
          </div>
          {errors.inquiry_type && <p id="cf-inquiry-err" className="mt-1.5 text-xs text-[#F5379B]">{errors.inquiry_type}</p>}
        </div>

        {/* Company (required) */}
        <div>
          <label htmlFor="cf-company" className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-1.5">
            Company or team <span className="text-[#F5379B]">*</span>
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            value={form.company}
            onChange={update}
            required
            autoComplete="organization"
            placeholder="Acme Inc."
            aria-required="true"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "cf-company-err" : undefined}
            className={fieldClass(errors.company)}
          />
          {errors.company && <p id="cf-company-err" className="mt-1.5 text-xs text-[#F5379B]">{errors.company}</p>}
        </div>
      </div>

      {/* Message - full width below the 2-column grid */}
      <div className="mt-5">
        <label htmlFor="cf-message" className="block text-[10px] font-mono uppercase tracking-widest text-[#A29CB4] mb-1.5">
          Message <span className="text-[#6F6885]">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="A few lines about the role or project. Links and timeline help too."
          className={`${fieldClass(false)} resize-y min-h-[120px]`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 text-sm text-[#F5379B]">
          Something went wrong sending that. Please email me directly at Abdulfarazkhan@outlook.com.
        </p>
      )}

      <div className="mt-7 flex sm:justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          data-testid="contact-form-submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-[#C71E73] font-semibold text-sm hover:bg-[#C71E73] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && <Send size={16} />}
        </button>
      </div>
    </form>
  );
}
