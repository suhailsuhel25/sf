import React, { useState, useEffect, useRef, Fragment } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showToggle, setShowToggle] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  // Handlers
  const handleMobileMenuItemClick = () => setMenuOpen(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Modal render helper
  const modalRef = useRef(null);

  useEffect(() => {
    if (!showModal) return;
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const renderModal = () => (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity" />
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full relative animate-fade-in flex flex-col items-center"
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-orange-500 text-xl font-bold focus:outline-none"
          onClick={handleCloseModal}
          aria-label="Tutup"
        >
          &times;
        </button>
        <h3 className="text-lg font-bold mb-4 text-orange-600 text-center">Pilih Lomba</h3>
        <ul className="w-full space-y-3">
          <li>
            <a href="/form/daftar-lomba-1" className="w-full py-3 text-base daftar-btn font-semibold rounded-xl shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300" style={{textAlign: 'center'}}>Lomba 1</a>
          </li>
          <li>
            <a href="/form/daftar-lomba-2" className="w-full py-3 text-base daftar-btn font-semibold rounded-xl shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300" style={{textAlign: 'center'}}>Lomba 2</a>
          </li>
          <li>
            <a href="/form/daftar-lomba-3" className="w-full py-3 text-base daftar-btn font-semibold rounded-xl shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300" style={{textAlign: 'center'}}>Lomba 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
  useEffect(() => {
    const handleResize = () => {
      setShowToggle(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navbar show/hide on scroll (optional, based on your previous code)
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

  return (
    <Fragment>
      <nav
        ref={containerRef}
        className={`navbar-gradient px-4 lg:px-20 py-2 lg:py-6 h-16 lg:h-16 shadow-lg border-b-4 border-yellow-400/60 flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Logo - fixed on the left */}
        <div ref={logoRef} className="flex-shrink-0 z-10">
          <a href="/" className="flex items-center p-4">
            <img
              src="../images/logo-sf.png"
              alt="Logo SF"
              className="h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
        </div>

        {/* Desktop navigation - hidden when toggle is shown, always visible on desktop */}
        <div ref={navRef} className={`${showToggle ? 'hidden' : 'flex'} ${!showToggle ? 'lg:flex' : 'lg:hidden'} items-center z-10`}>
          <ul className="flex items-center space-x-2 lg:space-x-4">
            <li className="flex items-center">
              <a href="/" className="nav-link text-sm lg:text-base font-medium px-2 lg:px-4 py-2 rounded flex items-center h-full">Beranda</a>
            </li>
            <li className="flex items-center">
              <a href="#about" className="nav-link text-sm lg:text-base font-medium px-2 lg:px-4 py-2 rounded-lg flex items-center h-full">Tentang</a>
            </li>
            <li className="flex items-center">
              <a href="#category" className="nav-link text-sm lg:text-base font-medium px-2 lg:px-4 py-2 rounded-lg flex items-center h-full">Kategori</a>
            </li>
            <li className="flex items-center">
              <a href="#timeline" className="nav-link text-sm lg:text-base font-medium px-2 lg:px-4 py-2 rounded-lg flex items-center h-full">Timeline</a>
            </li>
            <li className="flex items-center">
              <a href="https://wa.me/+6289529684820" target="_blank" rel="noopener noreferrer" className="nav-link text-sm lg:text-base font-medium px-2 lg:px-4 py-2 rounded-lg flex items-center h-full">Kontak</a>
            </li>
          </ul>
          <button
            className="daftar-btn text-sm lg:text-base font-semibold px-4 lg:px-7 py-2 rounded-lg shadow-md flex items-center h-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ml-4 lg:ml-8"
            onClick={handleOpenModal}
          >
            Daftar
          </button>
        </div>

        {/* Mobile menu button - positioned on the right */}
        <button
          className={`${showToggle ? 'flex' : 'hidden'} p-2 items-center text-white focus:outline-none z-20`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile dropdown menu and backdrop overlay */}
        {/* Dropdown animasi smooth */}
        <div
          className={`absolute top-16 left-0 w-full z-50 transition-all duration-500 ease-out
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
          style={{
            maxHeight: menuOpen ? '600px' : '0px',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="bg-gradient-to-br from-white via-orange-50 to-pink-50 rounded-b-2xl shadow-2xl border border-orange-200 overflow-hidden">
            {/* Menu items */}
            <ul className="py-2">
              <li className="group" onClick={handleMobileMenuItemClick}>
                <a href="/" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-all duration-200 group-hover:text-orange-600">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-medium">Beranda</span>
                </a>
              </li>
              <li className="group" onClick={handleMobileMenuItemClick}>
                <a href="#about" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-all duration-200 group-hover:text-orange-600">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Tentang</span>
                </a>
              </li>
              <li className="group" onClick={handleMobileMenuItemClick}>
                <a href="#category" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-all duration-200 group-hover:text-orange-600">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="font-medium">Kategori</span>
                </a>
              </li>
              <li className="group" onClick={handleMobileMenuItemClick}>
                <a href="#timeline" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-all duration-200 group-hover:text-orange-600">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="font-medium">Timeline</span>
                </a>
              </li>
              <li className="group" onClick={handleMobileMenuItemClick}>
                <a href="https://wa.me/+6281394878928" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 transition-all duration-200 group-hover:text-orange-600">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Kontak</span>
                </a>
              </li>
            </ul>

            {/* Daftar button */}
            <div className="px-6 py-4 border-t border-orange-100">
              <button
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                onClick={handleOpenModal}
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
        {/* Backdrop overlay covers the rest of the screen */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)} />
      </nav>
      {/* Daftar Modal Pop Up rendered at root level for full overlay */}
      {showModal && renderModal()}
    </Fragment>
  );
};

export default Navbar;