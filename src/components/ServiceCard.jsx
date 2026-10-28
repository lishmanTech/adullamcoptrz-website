import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Camera, Target, CarFront, Users, GraduationCap } from "lucide-react";
const icons = { shield: Shield, camera: Camera, target: Target, car: CarFront, users: Users, graduation: GraduationCap };
export default function ServiceCard({ service, compact = false }) {
  const Icon = icons[service.icon] || Shield;
  const slug = service.title.toLowerCase().replaceAll(" ", "-");
  return <article className={`service-card ${compact ? "service-card-compact" : ""}`}>
    <div className="service-card-top"><span className="service-icon"><Icon size={22} strokeWidth={1.6}/></span><span className="service-number">{service.number}</span></div>
    <h3>{service.title}</h3><p>{service.short}</p>
    <Link to={`/services/${slug}`} className="text-link">Explore solution <ArrowUpRight size={16}/></Link>
  </article>;
}
