import { education, certifications } from '../data/portfolio';
import Section from './Section';
import Reveal from './Reveal';
import './Education.css';

function EduCard({ heading, items }) {
  return (
    <Reveal className="card">
      <h3>{heading}</h3>
      {items.map(({ title, place, date }) => (
        <div key={`${title}-${date}`} className="edu-item">
          <b>{title}</b>
          <span>{place}</span>
          <small>{date}</small>
        </div>
      ))}
    </Reveal>
  );
}

export default function Education() {
  return (
    <Section
      id="education"
      alt
      title="Education &"
      highlight="Certifications"
      subtitle="Academic background and training"
    >
      <div className="grid" style={{ '--min': '300px' }}>
        <EduCard heading="🎓 Education" items={education} />
        <EduCard heading="📜 Certifications" items={certifications} />
      </div>
    </Section>
  );
}
