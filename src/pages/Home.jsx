import { ArrowDownRight, ArrowUpRight, Check, Play, ShieldCheck, Eye, Compass, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services, industries, insights } from "../data";

const industryIcons = [ShieldCheck, Eye, Compass, Handshake];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-line"/> SECURITY. CLARITY. CONFIDENCE.</span>
          <h1>Protect what<br/> <em>moves you.</em></h1>
          <p>Thoughtful security and risk solutions for the people, places and ambitions that matter most.</p>
          <div className="hero-actions"><Button to="/contact" variant="light">Talk to our team</Button><Link to="/services" className="hero-text-link">Explore our solutions <ArrowUpRight size={17}/></Link></div>
        </div>
        <div className="hero-bottom"><span><span className="live-dot"/> Built around people. Ready for what’s next.</span><a href="#intro">Discover ADULLAM COPTRZ <ArrowDownRight size={16}/></a></div>
      </div>
      <div className="hero-index"><span>01</span><i/><span>04</span></div>
    </section>

    <section className="intro-section section-pad" id="intro">
      <div className="container intro-grid">
        <div className="intro-label"><span className="eyebrow">A MORE CONSIDERED APPROACH</span><div className="intro-stamp"><ShieldCheck size={28}/><span>PEOPLE<br/>FIRST</span></div></div>
        <div className="intro-copy"><h2>Security should do more than protect. It should <em>make progress possible.</em></h2><p>Every organisation faces its own challenges. We bring people, practical thinking and modern technology together to help you see risk clearly, act with confidence and create safer everyday experiences.</p><Button to="/about" variant="outline">Get to know us</Button></div>
        <div className="intro-stat"><strong>01<span> / 03</span></strong><p>One connected approach to people, places and risk.</p><div className="stat-rule"><span/></div><span className="stat-caption">OUR POINT OF VIEW</span></div>
      </div>
    </section>

    <section className="services-section section-pad">
      <div className="container">
        <div className="section-topline"><SectionHeading eyebrow="WHAT WE DO" title={<>Confidence, built into<br/><em>the details.</em></>} text="A connected range of solutions, shaped around your people, your environment and your goals."/><Button to="/services" variant="outline">View all services</Button></div>
        <div className="services-grid">{services.slice(0, 3).map(service => <ServiceCard key={service.number} service={service}/>)}</div>
      </div>
    </section>

    <section className="feature-section">
      <div className="feature-photo"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90" alt="Modern commercial buildings representing the places we help protect" loading="lazy"/><div className="photo-caption"><span>01 — BUILT AROUND YOUR WORLD</span><span>People · Places · Possibility</span></div></div>
      <div className="feature-content"><span className="eyebrow eyebrow-light">MORE THAN A CHECKLIST</span><h2>Understand the risk.<br/><em>See the bigger picture.</em></h2><p>Good security is not one-size-fits-all. It starts by listening, understanding the context and designing a response that works in the real world.</p><ul className="check-list"><li><Check size={17}/> Practical recommendations, not unnecessary complexity</li><li><Check size={17}/> People and technology working together</li><li><Check size={17}/> Clear communication and accountable delivery</li></ul><Button to="/about" variant="light">Our approach</Button></div>
    </section>

    <section className="industries-section section-pad">
      <div className="container">
        <SectionHeading eyebrow="WHO WE SUPPORT" title={<>Different environments.<br/><em>Shared peace of mind.</em></>} text="Our approach adapts to the realities of your sector, with solutions that support your people and your operation."/>
        <div className="industries-grid">{industries.map((item, i) => {const Icon = industryIcons[i]; return <Link to="/industries" className="industry-card" key={item.title}><span className="industry-icon"><Icon size={22}/></span><h3>{item.title}</h3><p>{item.text}</p><span className="industry-arrow"><ArrowUpRight size={18}/></span></Link>})}</div>
      </div>
    </section>

    <section className="principles-section">
      <div className="container principles-grid"><div><span className="eyebrow eyebrow-light">THE ADULLAM COPTRZ DIFFERENCE</span><h2>Trust is built in<br/><em>the way we work.</em></h2><p>We believe the best outcomes come from thoughtful preparation, respectful partnerships and a commitment to doing the fundamentals well.</p><Button to="/about" variant="light">Our values</Button></div><div className="principles-list"><div><span>01</span><div><h3>Listen first</h3><p>Understand the people, pressures and priorities behind every brief.</p></div></div><div><span>02</span><div><h3>Think practically</h3><p>Build solutions that make sense for the real environment, not just the plan.</p></div></div><div><span>03</span><div><h3>Stay accountable</h3><p>Communicate clearly, review what matters and keep improving.</p></div></div></div></div>
    </section>

    <section className="insights-section section-pad"><div className="container"><div className="section-topline"><SectionHeading eyebrow="THINKING AHEAD" title={<>Perspectives for a<br/><em>changing world.</em></>} text="Ideas and practical guidance to help you make informed decisions about security and risk."/><Button to="/insights" variant="outline">Visit our insights</Button></div><div className="insights-grid">{insights.map(item => <Link to="/insights" className="insight-card" key={item.title}><div className="insight-image"><img src={item.image} alt="" loading="lazy"/><span>{item.category}</span></div><div className="insight-meta">{item.date}<span>{item.read}</span></div><h3>{item.title}</h3><span className="text-link">Read article <ArrowUpRight size={16}/></span></Link>)}</div></div></section>
  </>;
}
