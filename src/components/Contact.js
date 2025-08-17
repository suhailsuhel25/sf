import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '6289529684820'; // No WA tujuan tanpa tanda +
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const Contact = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-6 bottom-6"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group"
        style={{
          boxShadow: '0 4px 16px 0 rgba(44,183,66,0.18)',
        }}
      >
        <FaWhatsapp className="text-white text-2xl group-hover:text-[#075e54] transition-colors duration-200" />
        <span className="text-white text-base font-medium whitespace-nowrap group-hover:text-[#075e54] transition-colors duration-200">
          Hubungi Kami
        </span>
      </div>
    </a>
  );
};

export default Contact;