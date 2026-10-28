import { ArrowUpRight, HeartHandshake, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Careers() {
  return <>
    <section className="page-hero page-hero-careers"><div className="container"><span className="eyebrow eyebrow-light">CAREERS AT FORTRESSPOINT</span><h1>Bring your best.<br/><em>Build what matters.</em></h1><p>We believe strong teams are built through respect, continuous learning and a shared commitment to doing meaningful work.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Careers</span></div></div></section>
    <section className="section-pad"><div className="container careers-intro"><div><span className="eyebrow">PEOPLE MAKE THE DIFFERENCE</span><h2>Work with purpose.<br/><em>Grow with support.</em></h2></div><div><p>Security is a people business. It calls for judgement, professionalism, curiosity and care. We're interested in people who take pride in their work and want to keep learning.</p><p>There are no live vacancies listed here yet. Use the contact form to introduce yourself and our team can direct your enquiry appropriately.</p><Button to="/contact">Introduce yourself</Button></div></div></section>
    <section className="values-section section-pad"><div className="container"><div className="values-grid"><article><span><HeartHandshake/></span><h3>Respect</h3><p>We value the contribution, perspective and dignity of every person.</p></article><article><span><TrendingUp/></span><h3>Keep learning</h3><p>We encourage curiosity, reflection and professional development.</p></article><article><span><Users/></span><h3>Work together</h3><p>We share knowledge and support each other to deliver better outcomes.</p></article></div></div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow eyebrow-light">NO ROLE IN MIND?</span><h2>We'd still like to hear from you.</h2><p>Send us a brief introduction and tell us what kind of work interests you.</p></div><Button to="/contact" variant="light">Get in touch <ArrowUpRight size={16}/></Button></div></section>
  </>;
}
