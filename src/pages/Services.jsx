import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export function ServicesPage() {
  return <>
    <section className="page-hero page-hero-services"><div className="container"><span className="eyebrow eyebrow-light">OUR SOLUTIONS</span><h1>Security that fits<br/><em>your world.</em></h1><p>Connected expertise, practical delivery and thoughtful technology — shaped around what matters to you.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Services</span></div></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="HOW WE HELP" title={<>The right support.<br/><em>At the right moments.</em></>} text="Explore our services, each designed to solve real challenges and work as part of a wider approach."/><div className="services-grid services-grid-all">{services.map(service => <ServiceCard key={service.number} service={service}/>)}</div></div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow eyebrow-light">NOT SURE WHERE TO START?</span><h2>Let's understand your priorities.</h2><p>Talk to our team about your environment and we'll help you identify a sensible next step.</p></div><Button to="/contact" variant="light">Discuss your needs</Button></div></section>
  </>;
}

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.title.toLowerCase().replaceAll(" ", "-") === slug) || services.find(s => slug?.includes(s.title.toLowerCase().split(" ")[0])) || services[0];
  return <>
    <section className="detail-hero"><div className="container detail-hero-grid"><div><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/services">Services</Link><span>/</span><span>{service.title}</span></div><span className="eyebrow">OUR SOLUTIONS · {service.number}</span><h1>{service.title}<br/><em>with purpose.</em></h1><p>{service.description}</p><Button to="/contact">Discuss this solution</Button></div><div className="detail-hero-image"><img src={service.image} alt={service.title}/><span>FORTRESSPOINT / SOLUTIONS</span></div></div></section>
    <section className="section-pad detail-body"><div className="container detail-body-grid"><div><span className="eyebrow">A PRACTICAL APPROACH</span><h2>Designed around the way <em>you work.</em></h2><p>We start by understanding your priorities, the people involved and the environment you operate in. From there, we help shape a proportionate solution with clear responsibilities and room to improve over time.</p><p>Every engagement is different. We work with you to define the right scope, establish useful measures and make sure the approach is practical for the people who use it every day.</p></div><div className="detail-features"><h3>How we can support you</h3>{service.features.map(feature => <div key={feature}><Check size={17}/>{feature}</div>)}</div></div></section>
    <section className="related-section section-pad"><div className="container"><SectionHeading eyebrow="CONNECTED EXPERTISE" title="A wider view of security" text="Explore other ways we can support your organisation."/><div className="services-grid">{services.filter(s => s.title !== service.title).slice(0,3).map(s => <ServiceCard key={s.number} service={s}/>)}</div></div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow eyebrow-light">YOUR NEXT STEP</span><h2>Let's talk about what you need.</h2><p>A straightforward conversation is a good place to begin.</p></div><Button to="/contact" variant="light">Contact our team</Button></div></section>
  </>;
}
