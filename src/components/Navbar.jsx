import { useState } from 'react';
import { navLinks } from '../data/portfolio';
import useActiveSection from '../hooks/useActiveSection';
import './Navbar.css';

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="navbar">
      <nav className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          Muhammad Basit Khan
          {/* <span>.dev</span> */}
        </a>

        <div className={`navbar__links ${open ? 'open' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>

        <button
          className="icon-btn navbar__menu"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
