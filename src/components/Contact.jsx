import { useState } from 'react';
import { profile } from '../data/portfolio';
import Section from './Section';
import Reveal from './Reveal';
import './Contact.css';

const contactLinks = [
  { icon: '✉️', label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
  { icon: '📞', label: 'Phone', text: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: '💼', label: 'LinkedIn', text: profile.linkedinLabel, href: profile.linkedin, external: true },
  // GitHub card only shows when profile.github is filled in
  ...(profile.github
    ? [{ icon: '🐙', label: 'GitHub', text: profile.github.replace('https://', ''), href: profile.github, external: true }]
    : []),
];

const emptyForm = { name: '', email: '', message: '' };

const STATUS_MESSAGES = {
  success: 'Message sent! I will get back to you soon.',
  error: 'Something went wrong. Please try again or email me directly.',
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Request failed');

      setForm(emptyForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      title="Get In"
      highlight="Touch"
      subtitle="Have a project or opportunity in mind? Let's talk."
    >
      <div className="contact__grid">
        <Reveal className="contact__links">
          {contactLinks.map(({ icon, label, text, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="contact__icon">{icon}</div>
              <div>
                <small>{label}</small>
                {text}
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal as="form" className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Write your message..." value={form.message} onChange={handleChange} />

          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {STATUS_MESSAGES[status] && (
            <p className={`contact__status contact__status--${status}`} role="status">
              {STATUS_MESSAGES[status]}
            </p>
          )}
        </Reveal>
      </div>
    </Section>
  );
}