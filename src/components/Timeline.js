import React from 'react';

const Timeline = () => {
  const TIMELINE_ITEMS = [
    {
      title: 'LOREM IPSUM',
      description:
        'Lorem ipsum dolor sit amet consectetur. Egestas nunc non sagittis lacus turpis aliquet aenean.',
    },
    {
      title: 'LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Egestas nunc non.',
    },
    {
      title: 'LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Egestas nunc non.',
    },
    {
      title: 'LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Egestas nunc non.',
    },
  ];

  const TimelineItem = ({ title, description }) => (
    <div className="relative w-full md:w-[22%] flex flex-col items-center text-center">
      <div
        className="absolute top-[-60px] w-[2px] h-[60px] bg-[#d46fff]"
        style={{ left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}
      />
      <div className="relative z-10 w-[160px] mb-4">
        <div
          className="text-sm md:text-base leading-tight text-[#d46fff] mb-4"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            WebkitMaskImage:
              'radial-gradient(ellipse at bottom, rgba(212,111,255,0.9) 0%, transparent 70%)',
            maskImage:
              'radial-gradient(ellipse at bottom, rgba(212,111,255,0.9) 0%, transparent 70%)',
          }}
        >
          {title}
        </div>
        <div className="text-xs md:text-sm font-light text-[#c9a9ff] leading-relaxed">
          {description}
        </div>
      </div>
      <div
        className="mt-6 relative z-[2]"
        style={{
          width: '160px',
          height: '35px',
          borderRadius: '50%',
          background: '#d46fff',
          boxShadow: '0 0 15px #d46fff, 0 0 30px #d46fff, 0 0 60px #d46fff',
          overflow: 'visible',
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            content: '""',
            top: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '240px',
            height: '140px',
            background:
              'radial-gradient(ellipse at bottom, rgba(212, 111, 255, 0.3) 0%, transparent 80%)',
            filter: 'blur(20px)',
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );

  const TimelineButton = ({ children, icon, reverse }) => (
    <button
      className="flex items-center gap-2 border border-[#d46fff] rounded text-white text-xs md:text-sm cursor-pointer select-none transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(212,111,255,0.6)]"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        textTransform: 'uppercase',
        padding: '0.5rem 1.2rem',
        background: 'rgba(212, 111, 255, 0.1)',
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
          'linear-gradient(180deg, #0a0520 0%, #1a0a3a 50%, #2a0a4a 100%)',
        backgroundImage: `url('https://placehold.co/100x100/1a0a3a/1a0a3a?text=%20')`,
        backgroundSize: '10px 10px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Header and Main Timeline Container */}
      <div className="relative w-full text-center mb-8 md:mb-12 flex-shrink-0">
        <h1
          className="text-white text-5xl md:text-7xl lg:text-8xl uppercase tracking-widest opacity-30"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 500,
          }}
        >
          Roadmap
        </h1>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div
            className="w-[3px] bg-gradient-to-b from-[#d46fff] via-[#d46fff] to-transparent"
            style={{ height: '150px' }}
          />
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
                stroke="#d46fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          reverse
        >
          PREVIOUS
        </TimelineButton>

        {/* Progress bar */}
        <div
          className="flex-1 mx-8 h-1.5 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #d46fff 0%, #d46fff 50%, #3a0f5f 50%, #3a0f5f 100%)',
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
                stroke="#d46fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          NEXT
        </TimelineButton>
      </div>
    </section>
  );
};

export default Timeline;