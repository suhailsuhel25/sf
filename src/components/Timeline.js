import React, { useState } from 'react';

const Timeline = () => {
  // Data timeline yang baru dengan detail untuk setiap kategori.
  const TIMELINE_ITEMS = [
    { title: 'UI/UX & WEB', description: 'Jadwal lengkap untuk kompetisi UI/UX dan Web.' },
    { title: 'Batch 1', description: '21 Agustus - 7 September' },
    { title: 'Batch 2', description: '8 September - 5 Oktober' },
    { title: 'Penyisihan', description: '6 Oktober - 8 Oktober' },
    { title: 'Pengumuman', description: '9 Oktober' },
    { title: 'TM', description: '10 Oktober' },
    { title: 'Final UI/UX', description: '13 Oktober' },
    { title: 'Final Web', description: '14 Oktober' },
    { title: 'Pengumuman Juara', description: '17 Oktober' },
    { title: 'POSTER', description: 'Jadwal lengkap untuk kompetisi Poster.' },
    { title: 'Batch 1', description: '21 Agustus - 4 September' },
    { title: 'Batch 2', description: '5 September - 26 September' },
    { title: 'Penilaian', description: '27 September - 28 September' },
    { title: 'Pengumuman', description: '2 Oktober' },
  ];

  // State untuk melacak halaman saat ini.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(TIMELINE_ITEMS.length / itemsPerPage);

  // Mengatur item yang ditampilkan berdasarkan halaman saat ini.
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = TIMELINE_ITEMS.slice(startIndex, endIndex);

  // Handler untuk tombol "SELANJUTNYA"
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Handler untuk tombol "SEBELUMNYA"
  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Komponen individu untuk setiap item timeline.
  const TimelineItem = ({ title, description }) => (
    <div className="relative w-full md:w-[22%] flex flex-col items-center text-center">
      {/* Container utama untuk teks judul dan deskripsi */}
      <div className="relative z-10 w-[170px] mb-4">
        <div
          className="text-base md:text-lg leading-tight mb-3 font-extrabold uppercase"
          style={{
            fontFamily: "'Montserrat', 'Orbitron', sans-serif",
            background: 'linear-gradient(90deg, #ff6a00 0%, #ffb347 40%, #f6416c 80%, #d46fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.04em',
            textShadow: '0 2px 24px #ffb34755',
            filter: 'drop-shadow(0 2px 8px #ffb34766)',
          }}
        >
          {title}
        </div>
        <div
          className="text-xs md:text-sm font-medium leading-relaxed"
          style={{
            color: '#fffbe6',
            textShadow: '0 1px 8px #ffb34733, 0 0px 1px #232323',
            fontFamily: "'Montserrat', 'Orbitron', sans-serif",
            letterSpacing: '0.01em',
          }}
        >
          {description}
        </div>
      </div>
      {/* Efek cahaya "spotlight" berbentuk elips */}
      <div
        className="mt-6 relative z-[2]"
        style={{
          width: '170px',
          height: '38px',
          borderRadius: '50%',
          background: 'linear-gradient(90deg, #ffe259 0%, #ff6a00 100%)',
          boxShadow:
            '0 0 20px 6px #ffb34799, 0 0 60px 0px #ff6a0033, 0 0 120px 0px #f6416c22',
          overflow: 'visible',
          border: '2px solid #fff6b7',
          position: 'relative',
        }}
      >
        {/* Lapisan "Glassmorphism" */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '240px',
            height: '140px',
            background:
              'radial-gradient(ellipse at bottom, rgba(255, 230, 130, 0.25) 0%, transparent 80%)',
            filter: 'blur(24px)',
            zIndex: -1,
          }}
        />
        {/* Aksen cahaya pink/ungu */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '60px',
            background:
              'radial-gradient(ellipse at center, #d46fff55 0%, transparent 80%)',
            filter: 'blur(12px)',
            zIndex: -2,
          }}
        />
      </div>
    </div>
  );

  // Komponen untuk tombol navigasi.
  const TimelineButton = ({ children, icon, reverse, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 border rounded text-[#232323] text-xs md:text-sm select-none transition-all duration-300 ease-in-out ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:shadow-[0_0_24px_#ffb34799] hover:scale-105 cursor-pointer'
      }`}
      style={{
        fontFamily: "'Montserrat', 'Orbitron', sans-serif",
        textTransform: 'uppercase',
        padding: '0.5rem 1.2rem',
        background: 'linear-gradient(90deg, #ffe259 0%, #ff6a00 100%)',
        borderColor: '#ffb347',
        boxShadow: '0 2px 12px #ffb34733',
        color: '#232323',
        fontWeight: 700,
        letterSpacing: '0.08em',
        backdropFilter: 'blur(2px)',
      }}
    >
      {reverse && icon}
      <span>{children}</span>
      {!reverse && icon}
    </button>
  );

  return (
    <section
      id="timeline"
      className="w-full min-h-screen max-h-screen flex flex-col justify-between items-center p-8 md:p-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #232323 0%, #1f2937 60%, #2d2d2d 100%)',
        backgroundImage:
          'linear-gradient(135deg, rgba(255,186,0,0.04) 0%, rgba(246,65,108,0.06) 100%), url("https://placehold.co/100x100/232323/232323?text=%20")',
        backgroundSize: 'cover, 12px 12px',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundBlendMode: 'overlay, overlay',
      }}
    >
      {/* Header dan Container Utama Timeline */}
      <div className="relative w-full text-center mb-6 md:mb-8 flex-shrink-0" style={{ marginTop: '-1.5rem' }}>
        <div className="flex flex-col items-center gap-2">
          {/* Tagline badge */}
          <div
            className="inline-flex items-center px-4 py-1 rounded-full border border-[#ffe082] bg-white/10 backdrop-blur-md"
            style={{
              fontFamily: "'Montserrat', 'Orbitron', sans-serif",
              color: '#ff9800',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.08em',
              boxShadow: '0 2px 12px #ffe08233',
              borderWidth: '2px',
              borderColor: '#ffe082',
              background: 'rgba(255, 246, 183, 0.10)',
              marginBottom: '0.5rem',
              gap: '0.5rem',
              textTransform: 'uppercase',
              fontStyle: 'normal',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="mr-1"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            >
              <path
                d="M10 2.5L12.4721 7.23607L17.8042 7.76393L13.9021 11.2639L15.1803 16.4861L10 13.75L4.81966 16.4861L6.09789 11.2639L2.19577 7.76393L7.52786 7.23607L10 2.5Z"
                fill="#ffb347"
                stroke="#ff9800"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            SWITCHFEST 2025
          </div>
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
                fill="url(#paint0_radial_heroTitle)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_heroTitle"
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
                timeline Switchfest
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
            Ikuti perjalanan Switchfest 2025 mulai dari pendaftaran hingga awarding night!
          </div>
        </div>
      </div>

      {/* Konten Timeline dengan 4 item spotlight yang diatur secara horizontal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-32 md:gap-y-0 w-full max-w-7xl mx-auto flex-1">
        {visibleItems.map((item, idx) => (
          <TimelineItem key={startIndex + idx} title={item.title} description={item.description} />
        ))}
      </div>

      {/* Kontrol bawah dan progress bar */}
      <div className="flex items-center justify-between mt-8 md:mt-12 w-full max-w-7xl mx-auto flex-shrink-0">
        {/* Tombol "SEBELUMNYA" */}
        <TimelineButton
          onClick={handlePrev}
          disabled={currentPage === 0}
          icon={
            <svg
              fill="none"
              viewBox="0 0 8 12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                d="M7 1L1 6L7 11"
                stroke="#ff6a00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          reverse
        >
          SEBELUMNYA
        </TimelineButton>

        {/* Progress bar */}
        <div
          className="flex-1 mx-8 h-1.5 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #ff6a00 0%, #ffb347 40%, #f6416c 80%, #d46fff 100%)',
            boxShadow: '0 0 16px #ffb34766',
            opacity: 0.85,
          }}
        />

        {/* Tombol "SELANJUTNYA" */}
        <TimelineButton
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          icon={
            <svg
              fill="none"
              viewBox="0 0 8 12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                d="M1 1L7 6L1 11"
                stroke="#ff6a00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          SELANJUTNYA
        </TimelineButton>
      </div>
    </section>
  );
};

export default Timeline;