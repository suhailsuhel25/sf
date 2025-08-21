import React, { useState } from 'react';

const Timeline = () => {
  // Data timeline terstruktur per kategori, dengan kata-kata yang lebih menarik
  const TIMELINE_DATA = [
    {
      category: "UI/UX & Web",
      color: "from-orange-400 via-pink-500 to-purple-500",
      items: [
        {
          title: "Batch 1",
          date: "21 Agustus - 7 September",
          desc: "Pendaftaran gelombang pertama dibuka! Segera daftarkan tim terbaikmu dan mulai perjalanan inovasimu."
        },
        {
          title: "Batch 2",
          date: "8 September - 5 Oktober",
          desc: "Kesempatan kedua! Jangan lewatkan batch terakhir untuk menjadi bagian dari kompetisi seru ini."
        },
        {
          title: "Penyisihan",
          date: "6 Oktober - 8 Oktober",
          desc: "Saatnya unjuk gigi! Tunjukkan karya terbaikmu di babak penyisihan dan buktikan kemampuanmu."
        },
        {
          title: "Pengumuman",
          date: "9 Oktober",
          desc: "Siapakah yang lolos ke tahap berikutnya? Pantau pengumuman dan tetap semangat!"
        },
        {
          title: "Technical Meeting",
          date: "10 Oktober",
          desc: "Persiapkan dirimu! Dapatkan info penting dan tips sukses di technical meeting."
        },
        {
          title: "Final UI/UX",
          date: "13 Oktober",
          desc: "Puncak kreativitas! Finalis UI/UX beradu ide dan inovasi di babak grand final."
        },
        {
          title: "Final Web",
          date: "14 Oktober",
          desc: "Saatnya para web developer membuktikan kehebatannya di final kompetisi Web."
        },
        {
          title: "Pengumuman Juara",
          date: "17 Oktober",
          desc: "Momen penentuan! Saksikan siapa yang akan menjadi juara Switchfest 2025."
        }
      ]
    },
    {
      category: "Poster",
      color: "from-yellow-400 via-pink-400 to-purple-400",
      items: [
        {
          title: "Batch 1",
          date: "21 Agustus - 4 September",
          desc: "Pendaftaran batch pertama dibuka! Tunjukkan ide kreatifmu lewat poster digital."
        },
        {
          title: "Batch 2",
          date: "5 September - 26 September",
          desc: "Masih ada kesempatan! Daftarkan karyamu di batch kedua dan bersaing dengan peserta lainnya."
        },
        {
          title: "Penilaian",
          date: "27 September - 28 September",
          desc: "Karya-karya terbaik akan dinilai oleh dewan juri profesional. Siapkan yang terbaik!"
        },
        {
          title: "Pengumuman",
          date: "2 Oktober",
          desc: "Saat yang dinanti! Temukan siapa saja yang berhasil menembus persaingan ketat."
        }
      ]
    }
  ];

  // State untuk memilih kategori timeline (UI/UX & Web atau Poster)
  const [selectedCategory, setSelectedCategory] = useState(0);

  // State untuk pagination per kategori
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Data aktif sesuai kategori
  const activeTimeline = TIMELINE_DATA[selectedCategory];
  const totalPages = Math.ceil(activeTimeline.items.length / itemsPerPage);

  // Pagination logic
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = activeTimeline.items.slice(startIndex, endIndex);

  // Handler untuk navigasi kategori
  const handleCategoryChange = (idx) => {
    setSelectedCategory(idx);
    setCurrentPage(0);
  };

  // Handler untuk tombol "SELANJUTNYA"
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Handler untuk tombol "SEBELUMNYA"
  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Komponen Card Timeline
  const TimelineCard = ({ title, date, desc, idx }) => (
    <div className="relative w-full md:w-[22%] flex flex-col items-center text-center group">
      {/* Card utama */}
      <div
        className="relative z-10 w-[210px] h-[230px] mb-4 p-5 rounded-2xl bg-gradient-to-br from-[#232323cc] to-[#1c1c1cbb] border-2 border-[#ffb34744] shadow-lg group-hover:scale-105 transition-transform duration-300 flex flex-col"
        style={{
          minHeight: '230px', // tinggi tetap
          maxHeight: '230px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="text-lg md:text-xl font-extrabold uppercase mb-2"
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
          className="text-xs md:text-sm font-semibold mb-2"
          style={{
            color: '#ffe259',
            textShadow: '0 1px 8px #ffb34733, 0 0px 1px #232323',
            fontFamily: "'Montserrat', 'Orbitron', sans-serif",
            letterSpacing: '0.01em',
          }}
        >
          {date}
        </div>
        <div
          className="text-xs md:text-sm font-medium leading-relaxed flex-1 flex items-center justify-center"
          style={{
            color: '#fffbe6',
            textShadow: '0 1px 8px #ffb34733, 0 0px 1px #232323',
            fontFamily: "'Montserrat', 'Orbitron', sans-serif",
            letterSpacing: '0.01em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {desc}
        </div>
      </div>
      {/* Efek spotlight */}
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
      className={`flex items-center justify-center gap-1.5 md:gap-2 border rounded text-[#232323] text-xs md:text-sm select-none transition-all duration-300 ease-in-out ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:shadow-[0_0_24px_#ffb34799] hover:scale-105 cursor-pointer'
      }`}
      style={{
        fontFamily: "'Montserrat', 'Orbitron', sans-serif",
        textTransform: 'uppercase',
        padding: '0.45rem 0.8rem',
        background: 'linear-gradient(90deg, #ffe259 0%, #ff6a00 100%)',
        borderColor: '#ffb347',
        boxShadow: '0 2px 12px #ffb34733',
        color: '#232323',
        fontWeight: 700,
        letterSpacing: '0.08em',
        backdropFilter: 'blur(2px)',
        minWidth: 80,
        minHeight: 36,
        width: '100%',
        maxWidth: 140,
      }}
    >
      {reverse && (
        <span className="flex items-center">{icon}</span>
      )}
      <span className="truncate">{children}</span>
      {!reverse && (
        <span className="flex items-center">{icon}</span>
      )}
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
                  @media (max-width: 640px) {
                    .timeline-title-wrapper {
                      margin-top: 2.5rem !important;
                    }
                  }
                  @media (min-width: 641px) {
                    .timeline-title-wrapper {
                      margin-top: -2.5rem !important;
                    }
                  }
                `}
              </style>
            </div>
            {/* Subtitle */}
            <div
              className="text-sm sm:text-base md:text-lg font-semibold"
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
                fontSize: '1rem', // fallback for text-sm
              }}
            >
              Jadilah bagian dari perjalanan luar biasa Switchfest 2025! Temukan setiap momen penting dari pendaftaran hingga awarding night, dan wujudkan prestasi terbaikmu bersama kami.
            </div>
          </div>
        </div>

        {/* Tab kategori */}
        <div className="flex justify-center gap-2 mb-4 -mt-6">
          {TIMELINE_DATA.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => handleCategoryChange(idx)}
              className={`px-3 py-1.5 rounded-full font-bold uppercase text-xs md:text-sm transition-all duration-200 border-2 ${
                selectedCategory === idx
                  ? "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white border-transparent shadow-lg scale-105"
                  : "bg-[#181818] text-[#ffb347] border-[#ffb34755] hover:bg-[#232323] hover:scale-105"
              }`}
              style={{
                fontFamily: "'Montserrat', 'Orbitron', sans-serif",
                letterSpacing: '0.08em',
                boxShadow: selectedCategory === idx ? '0 2px 12px #ffb34755' : undefined,
                fontSize: '0.92rem',
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Tagline kategori */}
        <div
          className="text-sm md:text-base font-semibold mb-8 text-center"
          style={{
            color: '#ffe259',
            textShadow: '0 2px 12px #ffb34733',
            fontFamily: "'Montserrat', 'Orbitron', sans-serif",
            letterSpacing: '0.01em',
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          {activeTimeline.tagline}
        </div>

        {/* Konten Timeline dengan card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-32 md:gap-y-0 w-full max-w-7xl mx-auto flex-1 mb-5 md:mb-10">
          {visibleItems.map((item, idx) => (
            <TimelineCard key={startIndex + idx} {...item} idx={startIndex + idx} />
          ))}
        </div>

        {/* Spacer agar pagination benar-benar di bawah konten */}
        <div className="flex-1" />

        {/* Kontrol bawah dan progress bar */}
        <div
          className="w-full max-w-2xl mx-auto flex items-center justify-between mt-16 md:mt-24 pb-0"
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
            className={`
              flex-1 
              h-1.5 
              rounded-full 
              flex 
              mx-2 
              sm:mx-4 
              md:mx-6
            `}
            style={{
              minWidth: '0',
              width: '100%',
              maxWidth: 520,
              boxShadow: '0 0 16px #ffb34766',
              opacity: 0.85,
              position: 'relative',
              overflow: 'hidden',
              background: '#232323',
            }}
          >
            {Array.from({ length: totalPages }).map((_, idx) => {
              const gradients = [
                'linear-gradient(90deg, #ff6a00 0%, #ffb347 100%)',
                'linear-gradient(90deg, #ffb347 0%, #f6416c 100%)',
                'linear-gradient(90deg, #f6416c 0%, #d46fff 100%)',
                'linear-gradient(90deg, #d46fff 0%, #ff6a00 100%)',
              ];
              const isActive = idx < currentPage;
              const isCurrent = idx === currentPage;
              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    minWidth: 0,
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
        <div style={{ height: '2.3rem' }} />
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