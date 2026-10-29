import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

const nav = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topline"><div className="container topline-inner"><span>Security built around people.</span><div><a href="mailto:info@adullamcoptrz.com">info@adullamcoptrz.com</a><span className="topline-dot" /> <span>Available for new enquiries</span></div></div></div>
      <div className="container nav-inner">
        <Logo />
        <button className="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Main navigation">
          {nav.map(item => item.dropdown ? (
            <div className="nav-dropdown" key={item.label}>
              <button className="nav-link dropdown-trigger" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Services <ChevronDown size={14} /></button>
              {servicesOpen && <div className="dropdown-menu"><Link onClick={() => {setOpen(false); setServicesOpen(false)}} to="/services">All services</Link><Link onClick={() => {setOpen(false); setServicesOpen(false)}} to="/services/manned-security">Manned security</Link><Link onClick={() => {setOpen(false); setServicesOpen(false)}} to="/services/electronic-security">Electronic security</Link><Link onClick={() => {setOpen(false); setServicesOpen(false)}} to="/services/risk-advisory">Risk advisory</Link></div>}
            </div>
          ) : <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)} className={({isActive}) => `nav-link ${isActive ? "nav-active" : ""}`}>{item.label}</NavLink>)}
          <Button to="/contact" className="nav-cta">Talk to our team</Button>
        </nav>
      </div>
    </header>
  );
}
