import { useState } from 'react';
import { profile, stats } from '../data/portfolio';
import useTypewriter from '../hooks/useTypewriter';
import Reveal from './Reveal';
import Counter from './Counter';
import './Hero.css';

export default function Hero() {
  const typed = useTypewriter(profile.typedWords);
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="badge">
              <i /> Open to opportunities
            </div>
            <h1>
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <h2>
              I build {typed}
              <span className="hero__cursor">|</span>
            </h2>
            <p>{profile.summary}</p>
            <div className="hero__buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href={profile.cv} download className="btn btn-outline">
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <Reveal className="hero__avatar">
            {photoFailed ? (
              <span>MB</span>
            ) : (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </Reveal>
        </div>

        <div className="hero__stats">
          {stats.map(({ value, label }) => (
            <Reveal key={label} className="stat">
              <Counter target={value} />
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}