import React from 'react';

const Timeline = () => {
  const TIMELINE_ITEMS = [
    {
      title: 'OPEN REGISTRATION',
      description: 'Pendaftaran peserta Switchfest 2025 dibuka untuk seluruh mahasiswa UIN Walisongo.',
    },
    {
      title: 'PRE-EVENT & WORKSHOP',
      description: 'Rangkaian workshop, seminar, dan pembekalan untuk peserta dan umum.',
    },
    {
      title: 'MAIN EVENT',
      description: 'Kompetisi, pameran inovasi, dan kolaborasi teknologi berlangsung seru.',
    },
    {
      title: 'AWARDING & CLOSING',
      description: 'Pengumuman pemenang, awarding night, dan penutupan Switchfest 2025.',
    },
  ];

  const TimelineItem = ({ title, description }) => (
    <div className="relative w-full md:w-[22%] flex flex-col items-center text-center">
      {/* No vertical line */}
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
      {/* Glowing ellipse "spotlight" */}
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
        {/* Glassmorphism overlay */}
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
        {/* Pink/purple accent glow */}
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

  const TimelineButton = ({ children, icon, reverse }) => (
    <button
      className="flex items-center gap-2 border rounded text-[#232323] text-xs md:text-sm cursor-pointer select-none transition-all duration-300 ease-in-out hover:shadow-[0_0_24px_#ffb34799] hover:scale-105"
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
      {/* Header and Main Timeline Container */}
      <div className="relative w-full text-center mb-6 md:mb-8 flex-shrink-0" style={{marginTop: '-1.5rem'}}>
        {/* UI like the reference section */}
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
              />
            </svg>
            SWITCHFEST 2025
          </div>
          {/* Main Title */}
          <h1
            className="uppercase font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight"
            style={{
              fontFamily: "'Montserrat', 'Orbitron', sans-serif",
              background: 'linear-gradient(90deg, #ff6a00 0%, #ffb347 30%, #f6416c 70%, #d46fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 2px 24px #ffb34755',
              letterSpacing: '0.04em',
              marginBottom: '0.15em',
              fontStyle: 'normal',
              fontWeight: 900,
              marginTop: '-0.5em',
            }}
          >
            Timeline switchfest
          </h1>
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

      {/* Timeline content with 4 spotlight items horizontally spaced */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-32 md:gap-y-0 w-full max-w-7xl mx-auto flex-1">
        {TIMELINE_ITEMS.map((item, idx) => (
          <TimelineItem key={idx} title={item.title} description={item.description} />
        ))}
      </div>

      {/* Bottom controls and progress bar */}
      <div className="flex items-center justify-between mt-8 md:mt-12 w-full max-w-7xl mx-auto flex-shrink-0">
        {/* Previous button */}
        <TimelineButton
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

        {/* Next button */}
        <TimelineButton
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