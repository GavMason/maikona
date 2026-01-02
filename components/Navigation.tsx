'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 540) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Handle sticky positioning
      if (scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle background fade with hysteresis
      if (scrollY > 150) {
        setShowBackground(true);
      } else if (scrollY < 100) {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <style jsx>{`
        .nav-section.sticky {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          width: 100%;
          background-color: transparent;
          transition: background-color 0.3s ease;
          overflow: visible;
        }
        
        .nav-section.sticky-scrolled {
          position: fixed;
        }
        
        .nav-section.sticky-background-active {
          background-color: #e8dcc7;
        }

        @media (max-width: 540px) {
          .nav-section.sticky {
            position: relative;
            background-color: #e8dcc7;
          }
          .collapsible-nav {
            display: none !important;
          }
        }

        .hamburger-btn {
          display: none;
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 102;
          cursor: pointer;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .hamburger-btn:hover {
          background: rgba(255, 255, 255, 0.85);
          transform: scale(1.05);
        }

        .hamburger-icon {
          width: 24px;
          height: 20px;
          position: relative;
        }

        .hamburger-icon span {
          display: block;
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: #2c3e50;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-origin: center;
        }

        .hamburger-icon span:nth-child(1) {
          top: 0;
        }

        .hamburger-icon span:nth-child(2) {
          top: 9px;
        }

        .hamburger-icon span:nth-child(3) {
          top: 18px;
        }

        .hamburger-menu {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100%;
          background: rgba(248, 248, 248, 0.75);
          backdrop-filter: blur(10px);
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.08);
          transform: translateX(${menuOpen ? '0' : '100%'});
          transition: transform 0.3s ease;
          z-index: 101;
          padding-top: 90px;
          overflow-y: auto;
        }

        .hamburger-menu ul {
          list-style: none;
          padding: 0 20px;
          margin: 0;
        }

        .hamburger-menu li {
          margin-bottom: 2px;
        }

        .hamburger-menu a {
          display: block;
          padding: 15px 20px;
          color: #ff1744;
          text-decoration: none;
          font-size: 16px;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .hamburger-menu a:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 540px) {
          .hamburger-btn {
            display: flex;
          }
          .hamburger-menu {
            display: block;
          }
        }

        .hamburger-icon.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }

        .hamburger-icon.active span:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .hamburger-icon.active span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }
      `}</style>

      <nav
        className={`nav-section sticky ${isScrolled ? 'sticky-scrolled' : ''} ${
          showBackground ? 'sticky-background-active' : ''
        }`}
      >
        <div className="section-wrapper">
          {/* Desktop nav will go here - for now keeping the SVG structure */}
          <div className="collapsible-nav">
            {/* Navigation SVG content from original */}
          </div>
        </div>
      </nav>

      {/* Mobile hamburger menu */}
      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger-icon ${menuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className="hamburger-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
