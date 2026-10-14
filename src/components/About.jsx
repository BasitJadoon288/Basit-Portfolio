import { profile } from '../data/portfolio';
import Section from './Section';
import Reveal from './Reveal';
import './About.css';

const details = [
  ['Name', profile.name],
  ['Location', profile.location],
  ['Email', profile.email],
  ['Phone', profile.phone],
  ['Degree', profile.degree],
];

export default function About() {
  return (
    <Section id="about" alt title="About" highlight="Me" subtitle="A quick introduction">
      <div className="about__grid">
        <Reveal className="about__text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal as="ul" className="about__info card">
          {details.map(([label, value]) => (
            <li key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
