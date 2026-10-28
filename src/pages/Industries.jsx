import { ArrowUpRight, Building2, Factory, Home, Store, Landmark, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { industries } from "../data";

const icons = [Building2, Home, Store, Factory];
const extra = [
  {title:"Healthcare & Care Environments",text:"Support that respects the people, services and sensitive environments at the heart of care.",icon:HeartPulse},
  {title:"Public & Community Spaces",text:"Practical planning to help public-facing environments remain accessible, prepared and welcoming.",icon:Landmark}
];

export default function Industries() {
  return <>
    <section className="page-hero page-hero-industries"><div className="container"><span className="eyebrow eyebrow-light">INDUSTRIES WE SUPPORT</span><h1>Context matters.<br/><em>So does confidence.</em></h1><p>Every sector has its own rhythm, responsibilities and risks. Our approach starts by understanding yours.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Industries</span></div></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="BUILT FOR YOUR ENVIRONMENT" title={<>One size never fits all.</>} text="We adapt the conversation, planning and delivery to the environment you're responsible for."/><div className="industry-detail-grid">{industries.map((item,i)=>{const Icon=icons[i];return <article key={item.title} className="industry-detail-card"><span className="industry-icon"><Icon size={24}/></span><span className="industry-detail-no">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/contact" className="text-link">Discuss your environment <ArrowUpRight size={16}/></Link></article>})}{extra.map((item,i)=>{const Icon=item.icon;return <article key={item.title} className="industry-detail-card"><span className="industry-icon"><Icon size={24}/></span><span className="industry-detail-no">0{i+5}</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/contact" className="text-link">Discuss your environment <ArrowUpRight size={16}/></Link></article>})}</div></div></section>
    <section className="feature-section industry-feature"><div className="feature-photo"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85" alt="Commercial buildings" loading="lazy"/></div><div className="feature-content"><span className="eyebrow eyebrow-light">START WITH THE CONTEXT</span><h2>Your environment is the starting point.</h2><p>Tell us about your operation, your priorities and the challenges you want to address. We’ll work with you to explore a proportionate way forward.</p><Button to="/contact" variant="light">Start a conversation</Button></div></section>
  </>;
}
