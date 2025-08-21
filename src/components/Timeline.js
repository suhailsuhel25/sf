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
      className="relative w-full min-h-screen flex flex-col items-center p-8 md:p-16 text-white overflow-hidden"
      style={{ paddingBottom: '0' }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1c1c1c] to-[#111] animate-gradient-slow bg-[length:200%_200%]" />

      {/* Glow accents */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/30 via-pink-500/20 to-purple-500/30 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/30 to-orange-400/20 blur-3xl animate-pulse-slower" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col w-full h-full flex-1">
        {/* Header dan Container Utama Timeline */}
        <div
          className="relative w-full text-center mb-6 md:mb-8 flex-shrink-0"
          style={{
            marginTop: 0,
            paddingTop: 0,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            {/* Judul Utama */}
            <div
              className="relative flex flex-col items-center w-full timeline-title-wrapper"
              // Remove negative marginTop, let CSS handle spacing
            >
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
                  // Remove negative marginTop, let CSS handle spacing
                  marginTop: 0,
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
                  /* Tambahan: Jaga jarak judul dari atas pada mobile */
                  @media (max-width: 640px) {
                    .timeline-title-wrapper {
                      margin-top: 2.5rem !important;
                    }
                  }
                  @media (min-width: 641px) {
                    .timeline-title-wrapper {
                      margin-top: 0 !important;
                    }
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

        {/* Spacer agar pagination benar-benar di bawah konten */}
        <div className="flex-1" />

        {/* Kontrol bawah dan progress bar - ditempel ke bawah section */}
        <div
          className="w-full max-w-2xl mx-auto flex items-center justify-between mt-8 md:mt-12 pb-0"
          style={{
            marginTop: 'auto',
            paddingBottom: '0',
            background: 'none',
            gap: '1.25rem',
          }}
        >
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
            prev
          </TimelineButton>

          {/* Progress bar */}
          <div
            className="flex-1 mx-6 h-1.5 rounded-full flex"
            style={{
              minWidth: 240,
              maxWidth: 520,
              boxShadow: '0 0 16px #ffb34766',
              opacity: 0.85,
              position: 'relative',
              overflow: 'hidden',
              background: '#232323', // fallback bg
            }}
          >
            {/* Segmented progress bar with smooth fill animation */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              // Define gradient for each segment
              const gradients = [
                'linear-gradient(90deg, #ff6a00 0%, #ffb347 100%)',
                'linear-gradient(90deg, #ffb347 0%, #f6416c 100%)',
                'linear-gradient(90deg, #f6416c 0%, #d46fff 100%)',
                'linear-gradient(90deg, #d46fff 0%, #ff6a00 100%)',
                // Add more if totalPages > 4, or repeat
              ];
              const isActive = idx < currentPage;
              const isCurrent = idx === currentPage;
              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    height: '100%',
                    position: 'relative',
                    borderRadius: idx === 0
                      ? totalPages === 1
                        ? '9999px'
                        : '9999px 0 0 9999px'
                      : idx === totalPages - 1
                        ? '0 9999px 9999px 0'
                        : '0',
                    overflow: 'hidden',
                  }}
                >
                  {/* Filled part */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: isActive ? '100%' : isCurrent ? '100%' : '0%',
                      background: gradients[idx % gradients.length],
                      opacity: isActive ? 1 : isCurrent ? 1 : 0.15,
                      transition: isCurrent
                        ? 'width 0.6s cubic-bezier(.4,2,.6,1), opacity 0.4s'
                        : 'opacity 0.4s',
                      boxShadow: isActive || isCurrent ? '0 0 12px #f6416c55' : 'none',
                      zIndex: 2,
                      willChange: 'width, opacity',
                      // Animate scale for current segment
                      transform: isCurrent && isActive
                        ? 'scaleY(1.18)'
                        : isCurrent
                        ? 'scaleY(1.12)'
                        : 'scaleY(1)',
                      transitionProperty: 'width, opacity, transform',
                    }}
                  />
                  {/* Unfilled background for inactive segments */}
                  {!isActive && !isCurrent && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '100%',
                        background: gradients[idx % gradients.length],
                        opacity: 0.15,
                        zIndex: 1,
                        transition: 'opacity 0.4s',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

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
            next
          </TimelineButton>
        </div>
        {/* Spacer bawah agar pagination tidak terlalu nempel ke bawah */}
        <div style={{ height: '3.5rem' }} />
      </div>

      {/* Extra Animations */}
      <style>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          animation: gradient-slow 18s ease infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Timeline;