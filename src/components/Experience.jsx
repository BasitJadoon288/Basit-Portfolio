import { experience } from '../data/portfolio';
import Section from './Section';
import Reveal from './Reveal';
import './Experience.css';

export default function Experience() {
  return (
    <Section id="experience" alt title="Work" highlight="Experience" subtitle="Where I've worked">
      <div className="timeline">
        {experience.map(({ role, company, period, points }) => (
          <Reveal key={`${company}-${period}`} className="card timeline__item">
            <div className="timeline__head">
              <h3>{role}</h3>
              <span className="timeline__date">{period}</span>
            </div>
            <div className="timeline__company">{company}</div>
            <ul className="bullet-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
