export default function SectionHeading({ eyebrow, title, text, centered = false, light = false }) {
  return <div className={`section-heading ${centered ? "text-center" : ""} ${light ? "section-heading-light" : ""}`}>
    {eyebrow && <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}
