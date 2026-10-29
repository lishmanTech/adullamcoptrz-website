import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="ADULLAM COPTRZ home">
      <span className="brand-mark"><ShieldCheck size={24} strokeWidth={1.8} /></span>
      <span className="brand-copy">
        <strong>ADULLAM <span>COPTRZ</span></strong>
        <small>Drone Technology. Geospatial Intelligence. Strategic Security.</small>
      </span>
    </Link>
  );
}
