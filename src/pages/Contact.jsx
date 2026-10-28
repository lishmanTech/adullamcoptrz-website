import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return <>
    <section className="page-hero page-hero-contact"><div className="container"><span className="eyebrow eyebrow-light">CONTACT FORTRESSPOINT</span><h1>Let's talk about<br/><em>what matters.</em></h1><p>Tell us what you're looking to protect, improve or understand. We'll help you find a useful next step.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Contact</span></div></div></section>
    <section className="section-pad contact-page"><div className="container contact-layout"><div className="contact-sidebar"><span className="eyebrow">START A CONVERSATION</span><h2>We're here to <em>listen.</em></h2><p>Share a little about your needs and the right person can follow up with you.</p><div className="contact-detail"><span><Mail size={19}/></span><div><small>EMAIL US</small><a href="mailto:hello@fortresspoint.example">hello@fortresspoint.example</a></div></div><div className="contact-detail"><span><Phone size={19}/></span><div><small>CALL OUR TEAM</small><a href="tel:+2348000000000">+234 (0) 800 000 0000</a></div></div><div className="contact-detail"><span><MapPin size={19}/></span><div><small>OUR LOCATION</small><p>Nigeria</p></div></div><div className="contact-detail"><span><Clock3 size={19}/></span><div><small>RESPONSE TIMES</small><p>We'll respond as soon as we can during business hours.</p></div></div><div className="contact-note">For urgent emergencies, contact your local emergency services.</div></div><div className="contact-form-wrap"><div className="form-heading"><h3>Send an enquiry</h3><p>Complete the form below and we'll take it from there.</p></div><ContactForm/></div></div></section>
  </>;
}
