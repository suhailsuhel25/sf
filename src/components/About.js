import React, { useState, useEffect } from "react";
import PopupButton from "./PopupButton";
import { Star, Zap, Calendar, Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion"; // <-- Import motion

const About = () => {
  const [showDaftar, setShowDaftar] = useState(false);
  const PARTICLE_COUNT = 14;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 1.2 + 0.5,
        opacity: 0.1 + (i % 3) * 0.09,
      }));
    setParticles(generateParticles());
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y > 100 ? -5 : p.y + p.speed * 0.12,
        }))
      );
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Definisi animasi dengan `variants`
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } },
  };

  const card2Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden flex items-center py-10"
      style={{
        background: `
          linear-gradient(120deg, #232946 0%, #232323 40%, #ffb347 120%),
          radial-gradient(circle at 80% 20%, rgba(255, 174, 0, 0.12) 0%, transparent 60%),
          radial-gradient(circle at 20% 80%, rgba(255, 46, 178, 0.10) 0%, transparent 70%)
        `,
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              background: "linear-gradient(135deg, #ffe59d, #ffb347)",
              borderRadius: "9999px",
              animation: "pulse 2.5s infinite",
              animationDelay: `${i * 0.13}s`,
            }}
          />
        ))}
        {/* Unique radial highlight */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[38rem] h-[18rem] rounded-full filter blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #fffbe6 0%, #ffb34722 80%, transparent 100%)",
            opacity: 0.13,
          }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full filter blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, #ff2eb2 0%, #232946 100%)",
            opacity: 0.09,
            animationDelay: "1.5s",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Section Header (badge, title, subtitle) */}
        <motion.div
          className="text-center mb-8"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-orange-300 bg-white/10 shadow-md mb-4">
            <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-base font-semibold tracking-wide text-orange-400">
              SWITCHFEST 2025
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg mb-2 tracking-tight"
            style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
          >
            ABOUT SWITCHFEST
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-orange-100/90">
            Festival teknologi informasi terbesar, ajang inovasi, kolaborasi, dan
            inspirasi mahasiswa UIN Walisongo.
          </p>
        </motion.div>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto min-h-[60vh] md:min-h-[70vh] h-full">
          {/* About Card */}
          <motion.div
            className="flex-[1.25] flex flex-col justify-center min-w-[340px] h-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative bg-white/30 bg-gradient-to-br from-gray-900/70 via-pink-200/30 to-yellow-100/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-pink-200/40 p-8 flex flex-col h-full min-h-[16rem] md:max-h-[520px] md:h-[520px] max-h-none transition-all duration-500 group hover:scale-[1.025] hover:shadow-3xl" style={{ overflow: "visible" }}>
              <div className="absolute -top-6 right-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-100 rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute left-4 top-4 animate-float-slow z-10">
                <Rocket className="w-6 h-6 text-pink-400 drop-shadow-lg animate-spin-slow" />
              </div>
              <div className="absolute right-8 top-8 animate-float-slow2 z-10">
                <Star className="w-5 h-5 text-yellow-400 drop-shadow-md animate-pulse" />
              </div>
              <div className="absolute left-10 bottom-8 animate-float-slow3 z-10">
                <Zap className="w-5 h-5 text-orange-400 drop-shadow-md animate-bounce" />
              </div>
              <div className="space-y-4 flex-1 flex flex-col justify-center h-full">
                <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 border-l-4 border-orange-400 rounded-r-2xl p-5 relative overflow-visible transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer h-full flex">
                  <p className="text-gray-700 text-base leading-relaxed break-words self-center">
                    <span className="font-bold text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
                      SWITCHFEST
                    </span>{" "}
                    (Super Walisongo Information Technology Festival) adalah
                    festival tahunan Himpunan Mahasiswa Teknologi Informasi UIN
                    Walisongo dalam rangka memperingati hari lahir Program Studi
                    Teknologi Informasi. SWITCHFEST menghadirkan berbagai
                    kompetisi dan kegiatan menarik seputar teknologi informasi,
                    seperti lomba UI/UX, web development, design poster, pameran
                    karya, serta sesi Open Talk bersama pembicara inspiratif.
                    Mengusung tema{" "}
                    <span className="italic font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text">
                      "Empowering Students, Shaping Digital Tomorrow"
                    </span>{" "}
                    acara ini menjadi wadah mahasiswa untuk berinovasi,
                    berkompetisi, dan menampilkan kreativitas melalui lomba
                    UI/UX, web development, design poster, pameran karya, hingga
                    sesi Open Talk bersama pembicara inspiratif.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-3 border border-orange-200/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.03]">
                  <p className="text-gray-700 text-xs leading-relaxed break-words">
                    Melalui SWITCHFEST, diharapkan terbangun semangat kolaborasi,
                    solidaritas, dan kontribusi aktif mahasiswa dalam menciptakan
                    solusi teknologi yang berdampak nyata.
                  </p>
                </div>
              </div>
              <style jsx="true">{`
                @keyframes float-slow {
                  0%,
                  100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-14px);
                  }
                }
                @keyframes float-slow2 {
                  0%,
                  100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(10px);
                  }
                }
                @keyframes float-slow3 {
                  0%,
                  100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-8px);
                  }
                }
                @keyframes spin-slow {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                .animate-float-slow {
                  animation: float-slow 4s ease-in-out infinite;
                }
                .animate-float-slow2 {
                  animation: float-slow2 5s ease-in-out infinite;
                }
                .animate-float-slow3 {
                  animation: float-slow3 3.5s ease-in-out infinite;
                }
                .animate-spin-slow {
                  animation: spin-slow 8s linear infinite;
                }
              `}</style>
            </div>
          </motion.div>
          {/* Video Card */}
          <motion.div
            className="flex-[1] flex flex-col items-center justify-center min-w-[320px] h-full"
            variants={card2Variants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative bg-white/30 bg-gradient-to-br from-gray-900/70 via-pink-200/30 to-yellow-100/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-pink-200/40 p-8 flex flex-col items-center text-center w-full max-w-lg h-full min-h-[16rem] md:max-h-[520px] md:h-[520px] max-h-none transition-all duration-500 group hover:scale-[1.025] hover:shadow-3xl" style={{ overflow: "visible" }}>
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 rounded-full px-3 py-1 shadow-lg backdrop-blur-sm flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-orange-600" />
                  <span className="text-xs text-orange-800 font-semibold tracking-wide">
                    Aug 2025 - Oct 2025
                  </span>
                </div>
              </div>
              <div className="absolute -top-6 right-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-100 rounded-full opacity-30 blur-2xl"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-pink-400 to-orange-300 shadow-md animate-bounce">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="absolute left-6 top-8 animate-float-slow z-10">
                <Rocket className="w-7 h-7 text-pink-400 drop-shadow-lg animate-spin-slow" />
              </div>
              <div className="absolute right-8 top-20 animate-float-slow2 z-10">
                <Star className="w-6 h-6 text-yellow-300 drop-shadow-md animate-pulse" />
              </div>
              <div className="absolute left-10 bottom-10 animate-float-slow3 z-10">
                <Zap className="w-6 h-6 text-orange-400 drop-shadow-md animate-bounce" />
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-300 bg-clip-text text-transparent mb-2">
                Bersama, Tumbuh & Berinovasi
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Mari menjadi bagian dari perjalanan digital
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-80 h-80 flex items-center justify-center aspect-square border-4 border-transparent p-1.5 mb-4 transition-all duration-300 group-hover:scale-105" style={{ background: "linear-gradient(135deg, #232946 40%, #f7d56e 60%, #f971d6 90%, #ff6b35 100%)", padding: "10px" }}>
                <style jsx="true">{`
                  @keyframes float-slow {
                    0%,
                    100% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-18px);
                    }
                  }
                  @keyframes float-slow2 {
                    0%,
                    100% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(14px);
                    }
                  }
                  @keyframes float-slow3 {
                    0%,
                    100% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                  }
                  @keyframes spin-slow {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                  .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                  }
                  .animate-float-slow2 {
                    animation: float-slow2 5s ease-in-out infinite;
                  }
                  .animate-float-slow3 {
                    animation: float-slow3 3.5s ease-in-out infinite;
                  }
                  .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                  }
                `}</style>
                <video className="object-cover w-full h-full rounded-xl" autoPlay loop muted playsInline>
                  <source src="/videos/p.mp4" type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
              </div>
              <button
                className="w-full py-3 px-6 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-white"
                onClick={() => setShowDaftar(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket className="w-4 h-4 animate-bounce" />
                  Gabung Sekarang
                  <Zap className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        <PopupButton
          showModal={showDaftar}
          setShowModal={setShowDaftar}
          label="Perlombaan"
          items={[
            { nama: "Web Development", link: "https://bit.ly/WebDevelopment_SwitchFest2025" },
            { nama: "UI/UX Design", link: "https://bit.ly/UIUX-Design_SwitchFest2025" },
            { nama: "Design Poster", link: "https://bit.ly/Poster_SwitchFest2025" },
          ]}
        />
      </div>
    </section>
  );
};

export default About;