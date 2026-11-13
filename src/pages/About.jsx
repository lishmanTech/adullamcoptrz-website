import { ArrowUpRight, Compass, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function About() {
  return <>
    <section className="page-hero page-hero-about">
  <div className="container">
    <span className="eyebrow eyebrow-light">ABOUT ADULLAM COPTRZ</span>
    <h1>
      Our <em>Mission</em>
    </h1>
    <p>
      To deliver technology-driven visibility and intelligence through drones,
      GIS, and analytics, enabling organisations to anticipate threats, respond
      faster, and make informed security decisions.
    </p>
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      <span>/</span>
      <span>About us</span>
    </div>
  </div>
</section>
    <section className="section-pad"><div className="container about-intro-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Colleagues working together in a modern office"/><div className="image-note"><ShieldCheck size={24}/><span>Thoughtful by design.<br/><strong>Practical by nature.</strong></span></div></div><div className="about-copy"><SectionHeading eyebrow="WHO WE ARE" title={<>Making security a source of <em>confidence.</em></>}/><p>ADULLAM COPTRZ is a concept for a modern security and risk solutions partner. Our approach brings people, process and technology together to help organisations understand risk and make better-informed decisions.</p><p>We value clear communication, proportionate solutions and partnerships built on trust. We don't believe in complexity for its own sake; we believe in doing the right things well.</p><Button to="/services" variant="outline">Explore our services</Button></div></div></section>
    <section className="values-section section-pad">
  <div className="container">
    <SectionHeading
      eyebrow="WHO WE ARE"
      title={<>Technology, intelligence<br /><em>and security.</em></>}
      text="Adullam Coptrz operates at the intersection of unmanned aerial systems, Geographic Information Systems (GIS), and security analytics. We provide technology-driven solutions that improve situational awareness, strengthen security operations, and support evidence-based decision-making."
    />

    <div className="values-intro">
      <p>
        Our approach combines advanced aerial technology, geospatial analysis,
        and responsible data management to help institutions address complex
        security, infrastructure, and humanitarian challenges across Nigeria
        and beyond.
      </p>
    </div>
  </div>
</section>
   <section className="about-quote">
  <div className="container">
    <span className="quote-mark">“</span>
    <h2>Our Vision</h2>
    <blockquote>
      To become a leading African provider of drone-enabled geospatial<br />
      intelligence and security solutions, strengthening national resilience,<br />
      protecting lives, and safeguarding economic assets.
    </blockquote>
    <p>OUR VISION</p>
  </div>
</section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow eyebrow-light">LET'S WORK TOGETHER</span><h2>Good partnerships start with a conversation.</h2></div><Button to="/contact" variant="light">Get in touch</Button></div></section>
  </>;
}
