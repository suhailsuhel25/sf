import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-14 px-4 bg-gradient-to-b from-orange-800 via-pink-800 to-red-700">
      {/* Decorative subtle orange-pink blurred orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-pink-900/30 via-orange-900/20 to-transparent blur-3xl opacity-70"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-700/30 via-orange-800/20 to-transparent blur-3xl opacity-60"></div>
      {/* Subtle grid pattern for texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      {/* Main content with a glass-like backdrop */}
      <div className="max-w-6xl mx-auto relative z-10 p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg shadow-black/20">
        <div className="text-center space-y-10">
          {/* Logo/Brand with dynamic glow effect */}
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-extrabold font-orbitron bg-gradient-to-r from-orange-600 via-yellow-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,165,0,0.4)] tracking-wide animate-pulse-slow">
              SWITCHFEST 2025
            </h3>
            <p className="text-lg md:text-xl text-white font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.1)]">
              Empowering Students, Shaping Digital Tomorrow
            </p>
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
          {/* Divider line with glow */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-60 drop-shadow-lg"></div>
          {/* Copyright with brighter text */}
          <div className="flex flex-col md:flex-row items-center justify-between text-white text-sm font-light gap-2">
            <p className="flex items-center gap-1">
              © 2025 SWITCHFEST. Made with
              <Heart className="w-4 h-4 text-red-600 animate-pulse drop-shadow-[0_0_8px_#f00]" />
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