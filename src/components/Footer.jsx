import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Aster Path Learning Studio</p>
          <p className="site-footer__tagline">Learning for your next chapter.</p>
        </div>
        <div className="site-footer__meta">
          <nav aria-label="Footer navigation">
            <ul className="site-footer__links">
              <li><a href="#programs">Programs</a></li>
              <li><a href="#registration">Registration</a></li>
            </ul>
          </nav>
          <p className="site-footer__contact">Contact: via registration form</p>
        </div>
        <p className="site-footer__copyright">© 2026 Aster Path</p>
      </div>
    </footer>
  );
}
