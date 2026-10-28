import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { insights } from "../data";

export default function Insights() {
  return <>
    <section className="page-hero page-hero-insights"><div className="container"><span className="eyebrow eyebrow-light">INSIGHTS & IDEAS</span><h1>Better questions.<br/><em>Clearer decisions.</em></h1><p>Thoughtful perspectives and practical guidance on security, risk and the environments we share.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Insights</span></div></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="LATEST THINKING" title={<>A little perspective goes<br/><em>a long way.</em></>} text="Explore our latest guides and ideas. These sample articles are placeholders ready to be replaced with approved editorial content."/><div className="insights-grid insights-grid-page">{insights.map((item,i)=><article className="insight-card" key={item.title}><div className="insight-image"><img src={item.image} alt="" loading="lazy"/><span>{item.category}</span></div><div className="insight-meta">{item.date}<span><Clock3 size={13}/>{item.read}</span></div><h3>{item.title}</h3><p className="insight-excerpt">A practical look at the questions, habits and decisions that can help teams take a more considered approach.</p><Link to="/contact" className="text-link">Discuss this topic <ArrowUpRight size={16}/></Link></article>)}</div></div></section>
  </>;
}
