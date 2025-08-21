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
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1c1c1c] to-[#111] animate-gradient-slow bg-[length:200%_200%]" />

      {/* Glow accents */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/30 via-pink-500/20 to-purple-500/30 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/30 to-orange-400/20 blur-3xl animate-pulse-slower" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Judul UI seperti di Timeline */}
        <div
          className="relative w-full text-center mb-6 md:mb-8 flex-shrink-0"
          style={{
            marginTop: '1.5rem', // Lebih ke atas di mobile, tetap 3.5rem di md ke atas
          }}
        >
          <style>
            {`
              @media (min-width: 768px) {
                .sponsor-title-margin {
                  margin-top: 3.5rem !important;
                }
              }
            `}
          </style>
          <div className="flex flex-col items-center gap-2 sponsor-title-margin">
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
                  className="marquee-logo-item"
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
                  className="marquee-logo-item"
                  style={{ minWidth: "160px" }}
                >
                  <SponsorLogo src={logo.src} alt={logo.alt} name={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default ParallaxSponsors;