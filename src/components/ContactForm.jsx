import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const initial = { name: "", email: "", phone: "", organisation: "", service: "", message: "", consent: false };

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function update(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Tell us briefly how we can help.";
    if (!form.consent) next.consent = "Please confirm we can contact you about this enquiry.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    try {
      // API-ready: set VITE_API_BASE_URL and connect your backend endpoint.
      const base = import.meta.env.VITE_API_BASE_URL;
      if (base) {
        const response = await fetch(`${base.replace(/\/$/, "")}/api/enquiries`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
        if (!response.ok) throw new Error("The enquiry could not be sent. Please try again.");
      } else {
        // Demo mode: no data leaves the browser until an API URL is configured.
        await new Promise(resolve => setTimeout(resolve, 450));
      }
      setSubmitted(true);
      setForm(initial);
    } catch (error) {
      setErrors({ form: error.message || "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  }

  if (submitted) return <div className="form-success"><CheckCircle2 size={38}/><h3>Thank you for reaching out.</h3><p>Your form passed validation. {import.meta.env.VITE_API_BASE_URL ? "Your enquiry has been submitted." : "Demo mode is active, so no enquiry was sent to a server yet."}</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry</button></div>;

  return <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={handleSubmit} noValidate>
    {errors.form && <div className="form-error form-error-wide">{errors.form}</div>}
    <div className="form-grid">
      <label>Full name <span>*</span><input name="name" value={form.name} onChange={update} placeholder="Your full name" autoComplete="name"/>{errors.name && <small className="field-error">{errors.name}</small>}</label>
      <label>Work email <span>*</span><input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email"/>{errors.email && <small className="field-error">{errors.email}</small>}</label>
      {!compact && <label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+234 ..." autoComplete="tel"/></label>}
      {!compact && <label>Organisation<input name="organisation" value={form.organisation} onChange={update} placeholder="Company or organisation"/></label>}
      <label className="form-wide">What can we help with?
        <select name="service" value={form.service} onChange={update}><option value="">Select a solution (optional)</option><option>Manned Security</option><option>Electronic Security</option><option>Risk Advisory</option><option>Secure Mobility</option><option>Workplace Solutions</option><option>Security Training</option><option>Other / not sure yet</option></select>
      </label>
      <label className="form-wide">Tell us about your needs <span>*</span><textarea name="message" rows="4" value={form.message} onChange={update} placeholder="A few details will help us direct your enquiry." />{errors.message && <small className="field-error">{errors.message}</small>}</label>
      <label className="consent form-wide"><input type="checkbox" name="consent" checked={form.consent} onChange={update}/><span>I agree to be contacted about this enquiry and understand my information will be handled according to the privacy policy.</span></label>
      {errors.consent && <small className="field-error form-wide">{errors.consent}</small>}
    </div>
    <button type="submit" className="button button-primary" disabled={sending}>{sending ? "Sending..." : "Send enquiry"} <Send size={16}/></button>
    <p className="form-note">Fields marked * are required. Your details are only used to respond to your enquiry.</p>
  </form>;
}
