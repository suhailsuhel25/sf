import React from "react";
import { motion } from "framer-motion";

const SF_LOGO = "../images/logo-sf.png";

const ParallaxSponsors = () => {
  const sponsorLogos = Array(10).fill({
    src: SF_LOGO,
    alt: "SF Logo",
  });

  // Logo hanya berwarna saat hover, tanpa background/border pada logo
  const SponsorLogo = ({ src, alt }) => (
    <div
      className="flex-shrink-0 flex items-center justify-center p-6 group"
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
      />
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
      {/* Keyframes untuk marquee */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Gradient Touches */}
      {/* Top Left Pink Glow */}
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
      {/* Bottom Right Orange Glow */}
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
      {/* Center-Left Purple Glow */}
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
      {/* Center-Right Yellow Glow */}
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffb347 0%, #ffe59d 60%, #ff2eb2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 25px #ff2eb299)",
            }}
          >
            Sponsor & Mitra Media
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-16"
          style={{
            color: "#ffe59d",
            textShadow: "0 2px 12px #23232388",
          }}
        >
          Kami bangga bekerja sama dengan organisasi-organisasi terkemuka
          yang mendukung visi kami.
        </motion.p>

        {/* Slider Sponsor Dua Arah */}
        <div className="space-y-10">
          {/* Baris 1 (kiri) */}
          <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <div
              className="flex items-center"
              style={{
                width: `${sponsorLogos.length * 2 * 160}px`,
                animation: "scroll-left 25s linear infinite",
              }}
            >
              {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
                <SponsorLogo key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>

          {/* Baris 2 (kanan) */}
          <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <div
              className="flex items-center"
              style={{
                width: `${sponsorLogos.length * 2 * 160}px`,
                animation: "scroll-right 30s linear infinite",
              }}
            >
              {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
                <SponsorLogo key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSponsors;