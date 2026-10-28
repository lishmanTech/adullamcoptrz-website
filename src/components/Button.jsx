import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Button({ children, to, variant = "primary", className = "", type = "button", onClick }) {
  const content = <>{children}<ArrowUpRight size={17} strokeWidth={1.8} /></>;
  const classes = `button button-${variant} ${className}`;
  if (to) return <Link to={to} className={classes}>{content}</Link>;
  return <button type={type} onClick={onClick} className={classes}>{content}</button>;
}
