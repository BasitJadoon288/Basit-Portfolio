import { skills } from '../data/portfolio';
import Section from './Section';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <Section id="skills" title="Technical" highlight="Skills" subtitle="Technologies I work with">
      <div className="grid" style={{ '--min': '240px' }}>
        {skills.map(({ icon, title, items }) => (
          <Reveal key={title} className="card">
            <h3>
              {icon} {title}
            </h3>
            <div className="tags">
              {items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
