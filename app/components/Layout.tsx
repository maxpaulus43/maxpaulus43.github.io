'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Work', path: '/portfolio' },
  { text: 'Blog', path: '/blog' },
  { text: 'Now', path: '/now' },
];

interface LayoutProps {
  children: React.ReactNode;
  showContactModal?: boolean;
  onContactModalClose?: () => void;
  onContactClick?: () => void;
}

export default function Layout({ children, showContactModal = false, onContactModalClose, onContactClick }: LayoutProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const modalOpen = showContactModal || internalModalOpen;

  useEffect(() => setMenuOpen(false), [pathname]);

  const openContact = () => {
    setMenuOpen(false);
    if (onContactClick) onContactClick();
    else setInternalModalOpen(true);
  };

  const closeContact = () => {
    if (onContactModalClose) onContactModalClose();
    else setInternalModalOpen(false);
  };

  return (
    <div className="site-shell">
      {modalOpen && <ContactModal onClose={closeContact} />}
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="monogram" aria-label="MP — Max Paulus, home">MP</Link>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
          <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => {
              const active = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
              return <Link key={item.path} href={item.path} aria-current={active ? 'page' : undefined}>{item.text}</Link>;
            })}
            <button type="button" className="nav-contact" onClick={openContact}>Say hello <span aria-hidden="true">↗</span></button>
          </nav>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div><span className="footer-mark">MP</span><p>Building quietly. Shipping thoughtfully.<br />Learning constantly.</p></div>
          <div className="footer-links" aria-label="Social links">
            <a href="https://github.com/maxpaulus43" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/max-paulus-1b456aa8" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:maxpaulus43@gmail.com">Email ↗</a>
            <a href="/Max-Paulus-Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
          </div>
        </div>
        <div className="site-footer__base"><span>© {new Date().getFullYear()} Max Paulus</span><span>Built by hand in California</span></div>
      </footer>
    </div>
  );
}
