import React from "react";
import '../App.css'

// Path to default logo if image fails to load
const SF_LOGO = "/images/logo/logo-sf.png";

// List all sponsor logo filenames in public/images/logo/
const sponsorLogoFiles = [
  "SEMINAR UTAMA.png",
  "ADA EVENT.png",
  "BERITA LOMBA.png",
  "EDARAN EVENT.png",
  "EVENT MAHASISWA.png",
  "EVENT MEDIA IND.png",
  "EVENT UPDATE.png",
  "GOOGLE DEVELOPMENT GROUP.png",
  "GUDANG LOMBA IND.png",
  "HIMFORMA UPGRIS.png",
  "HMIF TELKOM PWT.png",
  "HMIF UNDIP.png",
  "HMIF UNJAYA.png",
  "HMJ BIO UINWS.png",
  "HMJ TI UNWAHAS.png",
  "HMP MIKROPTIK UNS.png",
  "HMPSI UIN SAIZU.png",
  "HMTIF UNISULA.png",
  "INFO LOMBA EVENT ID.png",
  "INFO LOMBA IT.png",
  "INFO LOMBA SCH.png",
  "INFO LOMBA.png",
  "KATALOG EVENT INDONESIA.png",
  "KMTETI FT UGM.png",
  "LINGKAR EVENT.png",
  "LOMBA BISNIS.png",
  "LOMBA MAHASISWA ID.png",
  "PERMIKOMNAS.png",
  "POJOK EVENT.png",
  "PUSAT INFO LOMBA.png",
  "SANDEC.png",
];

// Helper: generate image src and alt from filename
const sponsorImages = sponsorLogoFiles.map((filename) => ({
  src: `/images/logo/${filename}`,
  alt: filename.replace(/\.(png|jpe?g|svg|webp)$/i, ""),
  // Generate a display name from the filename, e.g. "logo (1).png" -> "Logo 1"
  name: filename
    .replace(/\.(png|jpe?g|svg|webp)$/i, "")
}));

const ParallaxSponsors = () => {
  // Logo hanya berwarna saat hover, tanpa background/border pada logo
  const SponsorLogo = ({ src, alt, name }) => (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center p-6 group"
      style={{ minWidth: "160px" }}
    >
      <img
        src={src}
        alt={alt}
        className="h-14 md:h-16 lg:h-20 w-auto filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = SF_LOGO;
        }}
        draggable={false}
        loading="lazy"
      />
      <div
        className="mt-2 text-xs md:text-sm font-medium text-[#ffe082] text-center"
        style={{
          textShadow: '0 1px 4px #232323cc, 0 0px 2px #ffb34755',
          letterSpacing: '0.01em',
          maxWidth: '140px',
          wordBreak: 'break-word',
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>
    </div>
  );
  
  return (
    <section
      className="relative w-full overflow-hidden min-h-[75vh] flex flex-col items-center justify-center py-24"
      style={{
        background: "linear-gradient(180deg, #232946 0%, #232323 60%, #232323 100%)",
        color: "#fffbe6",
      }}
    >
      {/* Gradient Touches */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "340px",
          height: "340px",
          background: "radial-gradient(circle at 30% 30%, #ff2eb2cc 0%, #ffb34700 80%)",
          filter: "blur(60px)",
          opacity: 0.7,
          zIndex: 5,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "340px",
          height: "340px",
          background: "radial-gradient(circle at 70% 70%, #ffb347cc 0%, #ff2eb200 80%)",
          filter: "blur(60px)",
          opacity: 0.7,
          zIndex: 5,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: "40%",
          left: "-100px",
          width: "220px",
          height: "220px",
          background: "radial-gradient(circle at 0% 50%, #a259ff99 0%, #23232300 80%)",
          filter: "blur(40px)",
          opacity: 0.5,
          zIndex: 5,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: "60%",
          right: "-100px",
          width: "220px",
          height: "220px",
          background: "radial-gradient(circle at 100% 50%, #ffe59d99 0%, #23232300 80%)",
          filter: "blur(40px)",
          opacity: 0.4,
          zIndex: 5,
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #ffb34722 0%, #23232300 60%, #ff2eb2 120%)",
          mixBlendMode: "lighten",
        }}
      ></div>

      {/* Konten */}
      <div className="relative z-20 w-full px-6 lg:px-8 text-center">
        {/* Judul UI seperti di Timeline */}
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
                    transform: 'skewX(-8deg) scaleY(1.08)',
                    letterSpacing: '0.12em',
                    textShadow: '0 2px 24px #d46fff66, 0 1px 0 #fff6b7',
                  }}
                >
                  Sponsor & Mitra Media
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
              Kami bangga bekerja sama dengan organisasi-organisasi terkemuka yang mendukung visi kami.
            </div>
          </div>
        </div>

        {/* Parallax Sponsor Row */}
        <div className="w-full max-w-7xl mx-auto mt-10 space-y-10">
          {/* Baris 1 */}
          <div className="marquee-outer">
            <div className="marquee-track marquee-animate-left">
              {[...sponsorImages, ...sponsorImages].map((logo, idx) => (
                <div
                  key={logo.src + idx + "-left"}
                  className="marquee-logo-item flex flex-col items-center"
                  style={{ minWidth: "160px" }}
                >
                  <SponsorLogo src={logo.src} alt={logo.alt} name={logo.name} />
                </div>
              ))}
            </div>
          </div>
          {/* Baris 2 (optional, bergerak arah sebaliknya) */}
          <div className="marquee-outer">
            <div className="marquee-track marquee-animate-right">
              {[...sponsorImages, ...sponsorImages].reverse().map((logo, idx) => (
                <div
                  key={logo.src + idx + "-right"}
                  className="marquee-logo-item flex flex-col items-center"
                  style={{ minWidth: "160px" }}
                >
                  <SponsorLogo src={logo.src} alt={logo.alt} name={logo.name} />
                </div>
              ))}
            </div>
          </div>
          {/* Nama sponsor baris horizontal */}
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-2 mt-8 px-2">
            {sponsorImages.map((logo, idx) => (
              <span
                key={logo.name + "-name-" + idx}
                className="text-xs md:text-sm font-medium text-[#ffe082] whitespace-nowrap"
                style={{
                  textShadow: '0 1px 4px #232323cc, 0 0px 2px #ffb34755',
                  letterSpacing: '0.01em',
                  lineHeight: 1.2,
                  margin: '0 0.5em',
                  maxWidth: '140px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSponsors;