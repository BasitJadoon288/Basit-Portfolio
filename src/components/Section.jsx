import Reveal from './Reveal';

export default function Section({ id, alt = false, title, highlight, subtitle, children }) {
  return (
    <section id={id} className={alt ? 'alt' : ''}>
      <div className="container">
        <Reveal as="h2" className="section-title">
          {title} <span className="gradient-text">{highlight}</span>
        </Reveal>
        <Reveal as="p" className="section-sub">
          {subtitle}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
