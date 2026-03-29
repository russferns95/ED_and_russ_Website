import './Footer.css'

const COMMUNITY_LINKS = [
  { label: 'Our Product', href: '#' },
  { label: 'Documentation', href: '#' },
  { label: 'Our Services', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'What we do?', href: '#' },
] as const

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Our Cases', href: '#' },
] as const

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__shape footer__shape--tl">
        <a className="footer__brand" href="/">
          Ed &amp; Russ
        </a>
      </div>

      <div className="footer__main">
        <nav className="footer__nav" aria-labelledby="footer-community-heading">
          <h2 id="footer-community-heading" className="footer__heading">
            Community
          </h2>
          <ul className="footer__list">
            {COMMUNITY_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a className="footer__link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__nav" aria-labelledby="footer-quick-heading">
          <h2 id="footer-quick-heading" className="footer__heading">
            Quick Links
          </h2>
          <ul className="footer__list">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a className="footer__link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__shape footer__shape--br">
        <p className="footer__copyright">
          © 2025 — Ed&amp;Russ. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
