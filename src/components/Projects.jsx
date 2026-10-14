import { projects } from '../data/portfolio';
import Section from './Section';
import Reveal from './Reveal';
import './Projects.css';

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured"
      highlight="Projects"
      subtitle="Things I've built and contributed to"
    >
      <div className="grid" style={{ '--min': '320px' }}>
        {projects.map(({ type, title, description, points, tech }) => (
          <Reveal key={title} className="card project">
            <div className="project__type">{type}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="bullet-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="tags">
              {tech.map((item) => (
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
