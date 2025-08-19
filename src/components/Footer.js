import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-14 px-4 bg-gradient-to-b from-orange-800 via-pink-800 to-red-700">
      {/* Decorative subtle orange-pink blurred orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-pink-900/30 via-orange-900/20 to-transparent blur-3xl opacity-70"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-700/30 via-orange-800/20 to-transparent blur-3xl opacity-60"></div>
      {/* Main content with a glass-like backdrop */}
      <div className="max-w-6xl mx-auto relative z-10 p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg shadow-black/20">
        <div className="text-center space-y-10">
          {/* Judul ala Timeline */}
          <div className="flex flex-col items-center gap-2">
            {/* Judul Utama */}
            <div className="relative flex flex-col items-center w-full">
              {/* Decorative SVG background for the title */}
              <svg
                width="380"
                height="60"
                viewBox="0 0 380 60"
                fill="none"
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none"
                style={{
                  zIndex: 0,
                  filter: 'blur(2px) drop-shadow(0 4px 32px #ffb34766)',
                  opacity: 0.7,
                }}
              >
                <ellipse
                  cx="190"
                  cy="30"
                  rx="170"
                  ry="18"
                  fill="url(#paint0_radial_heroTitle_footer)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_heroTitle_footer"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="translate(190 30) scale(170 18)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ffe259" stopOpacity="0.7" />
                    <stop offset="0.5" stopColor="#ffb347" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#f6416c" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
              </svg>
              <h1
                className="uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight relative z-10"
                style={{
                  fontFamily: "'Orbitron', 'Montserrat', sans-serif",
                  background: 'linear-gradient(90deg, #ff6a00 0%, #ffb347 30%, #f6416c 70%, #d46fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 4px 32px #ffb34755, 0 1px 0 #fff6b7',
                  letterSpacing: '0.08em',
                  marginBottom: '0.1em',
                  fontStyle: 'normal',
                  fontWeight: 900,
                  marginTop: '-0.2em',
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                  filter: 'drop-shadow(0 2px 16px #f6416c33)',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    marginLeft: '0.4em',
                    fontWeight: 800,
                    fontFamily: "'Orbitron', 'Montserrat', sans-serif",
                    letterSpacing: '0.18em',
                    color: 'inherit',
                    filter: 'drop-shadow(0 2px 12px #ffb34799)',
                    textShadow: '0 2px 24px #ffb34799, 0 1px 0 #fff6b7',
                    textTransform: 'uppercase',
                    fontSize: '0.85em',
                  }}
                >
                  SWITCHFEST 2025
                </span>
              </h1>
              {/* Animated underline accent */}
              <div
                className="w-32 h-2 rounded-full mt-1 mb-2"
                style={{
                  background: 'linear-gradient(90deg, #ffb347 0%, #f6416c 100%)',
                  boxShadow: '0 2px 16px #ffb34755, 0 0 8px #d46fff55',
                  animation: 'pulse-underline 2.5s infinite alternate',
                  opacity: 0.85,
                }}
              />
              <style>
                {`
                  @keyframes pulse-underline {
                    0% { transform: scaleX(0.85); opacity: 0.7; }
                    100% { transform: scaleX(1.15); opacity: 1; }
                  }
                `}
              </style>
            </div>
            {/* Subtitle */}
            <div
              className="text-base sm:text-lg md:text-xl font-semibold"
              style={{
                color: '#fffbe6',
                textShadow: '0 2px 12px #ffb34733',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.5,
                fontFamily: "'Montserrat', 'Orbitron', sans-serif",
                fontWeight: 600,
                fontStyle: 'normal',
                letterSpacing: '0.01em',
              }}
            >
              Empowering Students, Shaping Digital Tomorrow
            </div>
          </div>
          {/* Contact info with vibrant icons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=switchfest.tiuinws@gmail.com&tf=cm"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 shadow-lg shadow-black/10 transform hover:-translate-y-1"
              style={{ textDecoration: "none" }}
            >
              <Mail className="w-5 h-5 text-orange-400 group-hover:text-orange-600 transition-colors" />
              <span className="font-medium text-white group-hover:text-white/80 transition-colors">switchfest.tiuinws@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/switchfest_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 shadow-lg shadow-black/10 transform hover:-translate-y-1"
              style={{ textDecoration: "none" }}
            >
              <FaInstagram className="w-5 h-5 text-pink-400 group-hover:text-pink-600 transition-colors" />
              <span className="font-medium text-white group-hover:text-white/80 transition-colors">@switchfest_</span>
            </a>
            <a
              href="https://wa.me/6289529684820"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 shadow-lg shadow-black/10 transform hover:-translate-y-1"
              style={{ textDecoration: "none" }}
            >
              <FaWhatsapp className="w-5 h-5 text-yellow-500 group-hover:text-yellow-700 transition-colors" />
              <span className="font-medium text-white group-hover:text-white/80 transition-colors">+62 895-2968-4820</span>
            </a>
          </div>
          {/* Copyright with brighter text */}
          <div className="flex flex-col md:flex-row items-center justify-between text-white text-sm font-light gap-2">
            <p className="flex items-center gap-1">
              © 2025 SWITCHFEST. Made with
              <Heart className="w-4 h-4 text-pink-400 animate-pulse drop-shadow-[0_0_8px_#f9a8d4]" />
              for innovation
            </p>
            <p className="mt-2 md:mt-0">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
      {/* Extra corner gradients for touch up */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-orange-600/30 via-pink-600/20 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-red-600/30 via-yellow-600/20 to-transparent"></div>
      {/* Floating dots for accent */}
      <div className="pointer-events-none absolute left-10 bottom-16 w-2 h-2 rounded-full bg-yellow-600 opacity-60 blur-[1px]"></div>
      <div className="pointer-events-none absolute right-16 bottom-24 w-1.5 h-1.5 rounded-full bg-pink-700 opacity-50 blur-[1px]"></div>
      <div className="pointer-events-none absolute left-1/2 top-10 w-2 h-2 rounded-full bg-orange-700 opacity-50 blur-[1px]"></div>
    </footer>
  );
};

export default Footer;