import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="FortressPoint home">
      <span className="brand-mark"><ShieldCheck size={24} strokeWidth={1.8} /></span>
      <span className="brand-copy">
        <strong>FORTRESS<span>POINT</span></strong>
        <small>SECURITY & RISK SOLUTIONS</small>
      </span>
    </Link>
  );
}
