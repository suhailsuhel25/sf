import React from 'react';
import { Mail } from "lucide-react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative text-white min-h-[300px] md:min-h-[140px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0d0d0d] to-[#2b1509]" />

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#ff6a00] via-[#ff2eb2] to-[#ff1749] bg-clip-text text-transparent font-['Orbitron'] tracking-tight">
            SWITCHFEST 2025
          </h1>
          <p className="mt-1 text-gray-300 text-xs md:text-sm leading-tight">
            Empowering Students, Shaping Digital Tomorrow
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-full md:w-auto">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=switchfest.tiuinws@gmail.com&tf=cm"
            className="flex items-center gap-2 bg-[#232323] bg-opacity-60 border border-[#ffb34733] hover:bg-opacity-80 transition px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-lg w-full md:w-fit"
            style={{ boxShadow: '0 1px 8px #ffb34722' }}
            target="_blank" rel="noopener noreferrer"
          >
            <Mail className="text-orange-400" size={16} />
            <span className="text-xs md:text-sm text-gray-100 font-medium break-all">switchfest.tiuinws@gmail.com</span>
          </a>
          <a
            href="https://instagram.com/switchfest_"
            className="flex items-center gap-2 bg-[#232323] bg-opacity-60 border border-[#ff2eb233] hover:bg-opacity-80 transition px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-lg w-full md:w-fit"
            style={{ boxShadow: '0 1px 8px #ff2eb222' }}
            target="_blank" rel="noopener noreferrer"
          >
            <BsInstagram className="text-pink-500" size={16} />
            <span className="text-xs md:text-sm text-gray-100 font-medium break-all">@switchfest_</span>
          </a>
          <a
            href="https://wa.me/6285727040539"
            className="flex items-center gap-2 bg-[#232323] bg-opacity-60 border border-[#25d36633] hover:bg-opacity-80 transition px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-lg w-full md:w-fit"
            style={{ boxShadow: '0 1px 8px #25d36622' }}
            target="_blank" rel="noopener noreferrer"
          >
            <BsWhatsapp className="text-green-400" size={16} />
            <span className="text-xs md:text-sm text-gray-100 font-medium break-all">+62 857-2704-0539</span>
          </a>
        </div>
      </div>
      {/* Copyright Footer - Centered at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center pb-6 md:pb-5">
        <div className="text-[11px] md:text-xs text-gray-400 text-center space-y-0.5">
          <p>
            © 2025 SWITCHFEST — Made with <span className="text-pink-400">♥</span> for innovation
          </p>
          <p className="font-semibold text-gray-300 tracking-wide mt-0.5">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;