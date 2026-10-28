import { ArrowUpRight, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div><span className="eyebrow eyebrow-light">LET'S START A CONVERSATION</span><h2>Make confidence<br/><em>part of the plan.</em></h2></div>
        <Button to="/contact" variant="light">Talk to our team</Button>
      </div>
      <div className="footer-main container">
        <div className="footer-about"><Logo light/><p>Practical security and risk solutions designed to help people, places and businesses move forward with confidence.</p><div className="socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={17}/></a><a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={17}/></a></div></div>
        <div className="footer-col"><h4>Explore</h4><a href="/about">About us</a><a href="/services">Our services</a><a href="/industries">Industries</a><a href="/insights">Insights</a><a href="/careers">Careers</a></div>
        <div className="footer-col"><h4>Solutions</h4><a href="/services/manned-security">Manned security</a><a href="/services/electronic-security">Electronic security</a><a href="/services/risk-advisory">Risk advisory</a><a href="/services/secure-mobility">Secure mobility</a><a href="/services/security-training">Security training</a></div>
        <div className="footer-col footer-contact"><h4>Get in touch</h4><p><Mail size={16}/> hello@fortresspoint.example</p><p><Phone size={16}/> +234 (0) 800 000 0000</p><p><MapPin size={16}/> Nigeria</p><a className="footer-link" href="/contact">Contact our team <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} FortressPoint. All rights reserved.</span><div><a href="/privacy">Privacy policy</a><a href="/terms">Terms of use</a></div><span>Security. Clarity. Confidence.</span></div>
    </footer>
  );
}
