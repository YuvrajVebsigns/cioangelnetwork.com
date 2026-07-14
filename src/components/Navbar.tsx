'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'About', href: '/aboutus' },
  { label: 'Startup Valuations', href: '/startup-valuations' },
  { label: 'Survival of the Richest', href: '/survival-of-the-richest' },
  { label: 'Why CAN', href: '/why-can' },
  { label: 'President Message', href: '/president-message' },
  { label: 'Membership', href: '/membership' },
  { label: 'Start-up Application', href: '/start-up-application' },
  { label: 'Contact', href: '/#contact-section' },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const closeAllMenus = () => {
    setMobileOpen(false);
    setIsHidden(false);
  };

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();

    window.addEventListener('hashchange', updateHash);

    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`navbar ${isHidden ? 'navbar-hide' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
    >
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeAllMenus}>
          <Image src="/assets/logo/CAN-logo.jpg" alt="CAN Logo" width={150} height={100} priority />
        </Link>

        <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const isContactLink = link.href === '/#contact-section';

            const isActive = isContactLink
              ? pathname === '/' && activeHash === '#contact-section'
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={!isContactLink}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <Link href="/#contact-section" className="talk-btn" onClick={closeAllMenus}>
            <span>Let&apos;s Talk</span>

            <div className="talk-btn-icon">
              <ArrowUpRight size={18} />
            </div>
          </Link>

          <button
            className={`menu-btn ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setIsHidden(false);
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
}
