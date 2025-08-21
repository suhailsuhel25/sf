import React, { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import '../App.css';

// Navigation links data
const NAV_LINKS = [
  {
    href: '/', label: 'Home', icon: (
      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    href: '#about', label: 'About', icon: (
      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    href: '#category', label: 'Category', icon: (
      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    href: '#timeline', label: 'Timeline', icon: (
      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
];

// Modal competition links
const COMPETITION_LINKS = [
  {
    href: "https://bit.ly/WebDevelopment_SwitchFest2025",
    label: "Web Development"
  },
  {
    href: "https://bit.ly/UIUX-Design_SwitchFest2025",
    label: "UI/UX Design"
  },
  {
    href: "https://bit.ly/Poster_SwitchFest2025",
    label: "Design Poster"
  }
];

const orbitronFont = { fontFamily: "'Orbitron', 'Montserrat', Arial, sans-serif" };

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showToggle, setShowToggle] = useState(false);

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const modalRef = useRef(null);

  // Handlers
  const handleMobileMenuItemClick = useCallback(() => setMenuOpen(false), []);
  const handleOpenModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  // Modal click outside handler
  useEffect(() => {
    if (!showModal) return;
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal]);

  // Responsive toggle
  useEffect(() => {
    const handleResize = () => setShowToggle(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navbar show/hide on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modal component
  const Modal = () => (
    <div className="fixed inset-0 z-[999] flex items-center justify-center" style={orbitronFont}>
      <div className="absolute inset-0 bg-black/40 transition-opacity" />
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full relative animate-fade-in flex flex-col items-center"
        style={orbitronFont}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-orange-500 text-xl font-bold focus:outline-none"
          onClick={handleCloseModal}
          aria-label="Tutup"
          style={orbitronFont}
        >
          &times;
        </button>
        <h3 className="text-lg font-bold mb-4 text-orange-600 text-center" style={orbitronFont}>Pilih Perlombaan</h3>
        <ul className="w-full space-y-3">
          {COMPETITION_LINKS.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="w-full py-3 text-base daftar-btn font-semibold rounded-xl shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                style={{ textAlign: 'center', ...orbitronFont }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Desktop nav links
  const DesktopNav = () => (
    <div
      ref={navRef}
      className={`${showToggle ? 'hidden' : 'flex'} ${!showToggle ? 'lg:flex' : 'lg:hidden'} items-center z-10`}
      style={orbitronFont}
    >
      <ul className="flex items-center space-x-2 lg:space-x-4">
        {NAV_LINKS.map(({ href, label, external }, idx) => (
          <li className="flex items-center" key={label}>
            <a
              href={href}
              className="nav-link text-sm lg:text-base font-medium px-2 lg:px-4 py-2 rounded flex items-center h-full"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={orbitronFont}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="daftar-btn text-sm lg:text-base font-semibold px-4 lg:px-7 py-2 rounded-lg shadow-md flex items-center h-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ml-4 lg:ml-8"
        onClick={handleOpenModal}
        style={orbitronFont}
      >
        Register
      </button>
    </div>
  );

  // Mobile nav links
  const MobileNav = () => (
    <div
      className={`absolute top-16 left-0 w-full z-50 transition-all duration-500 ease-out
        ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      style={{
        maxHeight: menuOpen ? '600px' : '0px',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
        ...orbitronFont,
      }}
    >
      <div className="bg-gradient-to-br from-white via-orange-50 to-pink-50 rounded-b-2xl shadow-2xl border border-orange-200 overflow-hidden" style={orbitronFont}>
        <ul className="py-2">
          {NAV_LINKS.map(({ href, label, icon, external }, idx) => (
            <li className="group" onClick={handleMobileMenuItemClick} key={label}>
              <a
                href={href}
                className="flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-all duration-200 group-hover:text-orange-600"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                style={orbitronFont}
              >
                {icon}
                <span className="font-medium" style={orbitronFont}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 py-4 border-t border-orange-100">
          <button
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            onClick={handleOpenModal}
            style={orbitronFont}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <nav
        ref={containerRef}
        className={`navbar-gradient px-4 lg:px-20 py-2 lg:py-6 h-16 lg:h-16 shadow-lg border-b-4 border-yellow-400/60 flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
          }`}
        style={{ willChange: 'transform', ...orbitronFont }}
      >
        {/* Logo */}
        <div ref={logoRef} className="flex-shrink-0 z-10">
          <a href="/" className="flex items-center p-4">
            <img
              src="../images/logo/logo-sf.png"
              alt="Logo SF"
              className="h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
        </div>
        {/* Desktop Nav */}
        <DesktopNav />
        {/* Mobile menu button */}
        <button
          className={`${showToggle ? 'flex' : 'hidden'} p-2 items-center text-white focus:outline-none z-20`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          style={orbitronFont}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Nav */}
        <MobileNav />
        {/* Backdrop overlay for mobile menu */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />
      </nav>
      {/* Modal */}
      {showModal && <Modal />}
    </Fragment>
  );
};

export default Navbar;