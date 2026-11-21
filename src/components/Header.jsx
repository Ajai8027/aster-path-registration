import { useEffect, useRef, useState } from 'react';
import logoUrl from '../assets/aster_path_logo.svg';
import './Header.css';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Register now', href: '#registration' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header" id="top">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Aster Path Learning Studio, home">
          <img
            src={logoUrl}
            alt="Aster Path Learning Studio"
            width="380"
            height="90"
          />
        </a>

        <nav className="site-header__desktop" aria-label="Main navigation">
          <ul className="site-header__links">
            {navigation.map(({ label, href }) => (
              <li key={label}>
                <a className={label === 'Register now' ? 'site-header__cta' : undefined} href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__mobile">
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__menu-button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="site-header__menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <nav
            id="mobile-navigation"
            className="site-header__mobile-nav"
            aria-label="Mobile navigation"
            hidden={!isMenuOpen}
          >
            <ul>
              {navigation.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={() => setIsMenuOpen(false)}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
