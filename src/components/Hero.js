import React, {
  useEffect,
  useState,
  memo,
  useCallback
}
  from 'react';
import PopupButton from './PopupButton';
import '../App.css';

// Helper for dynamic animation
const useAnimatedMount = (delay = 0, from = {}, to = {}) => {
  const [style, setStyle] = useState(from);
  useEffect(() => {
    const timeout = setTimeout(() => setStyle(to), delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);
  return style;
};

// Decorative background components with more dynamic entrance
const Trophy = memo(() => {
  const style = useAnimatedMount(
    200,
    { opacity: 0, transform: 'translateY(-40px) scale(0.8) rotate(-20deg)' },
    { opacity: 1, transform: 'translateY(0) scale(1) rotate(0deg)', transition: 'all 1.2s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div className="absolute top-[-8px] left-4 md:top-8 md:left-8 animate-float" style={style}>
      <div className="relative">
        <div
          className="flex items-center justify-center w-[85px] h-[105px] md:w-[185px] md:h-[235px]"
          style={{
            transform: 'rotate(26.37deg)',
            transformOrigin: 'center center',
          }}
        >
          <img
            src="/images/Cup.png"
            alt="Trophy"
            className="w-full h-full object-contain drop-shadow-lg"
            style={{ transform: 'rotate(-26.37deg)' }}
          />
        </div>
        <div
          className="absolute bottom-1 md:bottom-5 left-[70%]"
          style={{
            transform: 'translateX(-47.5%) rotate(-26.37deg)',
          }}
        >
          <p className="text-[7px] md:text-xs font-medium text-gray-800 whitespace-nowrap text-center">
            Top Event Teknologi
          </p>
          <p className="text-[7px] md:text-xs text-gray-700 text-center">
            Informasi
          </p>
        </div>
      </div>
    </div>
  );
});

const Stars = memo(() => {
  const style = useAnimatedMount(
    400,
    { opacity: 0, transform: 'scale(0.7) rotate(-30deg)' },
    { opacity: 1, transform: 'scale(1) rotate(0deg)', transition: 'all 1.1s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div className="absolute top-[45%] right-2 md:top-auto md:bottom-32 md:left-32 md:right-auto animate-twinkle" style={style}>
      <img
        src="/images/Stars.png"
        alt="Stars"
        className="w-20 h-20 md:w-40 md:h-40 object-contain drop-shadow-lg"
      />
    </div>
  );
});

const OrangeVector1 = memo(() => {
  const style = useAnimatedMount(
    600,
    { opacity: 0, transform: 'translateY(60px) scale(0.7) rotate(-10deg)' },
    { opacity: 1, transform: 'translateY(0) scale(1) rotate(0deg)', transition: 'all 1.3s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div className="absolute right-[-80px] md:right-[-120px] top-[60%] transform -translate-y-1/2 hidden lg:block w-[650px] h-[650px] z-0 animate-drift-slow" style={style}>
      <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-80 blur-sm animate-pulse"></div>
      <div className="absolute inset-4 bg-gradient-to-br from-orange-300 via-red-400 to-pink-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-60 transform scale-75 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
    </div>
  );
});

const OrangeVector2 = memo(() => {
  const style = useAnimatedMount(
    800,
    { opacity: 0, transform: 'translateX(100px) scale(0.7) rotate(-30deg)' },
    { opacity: 1, transform: 'translateX(0) scale(1) rotate(-12deg)', transition: 'all 1.2s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div
      className="absolute top-[-117px] right-[-205px] w-[650px] h-[650px] hidden lg:block z-10 animate-drift-medium"
      style={style}
    >
      <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-70 blur-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute inset-8 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-[70%_30%_30%_70%/60%_40%_60%_40%] opacity-50 transform scale-80 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 opacity-80 animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-br from-pink-400 to-red-500 transform rotate-45 opacity-70 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
    </div>
  );
});

const OrangeVector3 = memo(() => {
  const style = useAnimatedMount(
    1000,
    { opacity: 0, transform: 'translateX(120px) scale(0.7) rotate(-30deg)' },
    { opacity: 1, transform: 'translateX(0) scale(1) rotate(-12deg)', transition: 'all 1.2s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div
      className="absolute top-[-80px] right-[-400px] w-[650px] h-[650px] hidden lg:block z-10 animate-drift-fast"
      style={style}
    >
      <div className="w-full h-full bg-gradient-to-br from-orange-300 via-red-400 to-pink-400 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] opacity-60 blur-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute inset-6 bg-gradient-to-br from-orange-200 via-red-300 to-pink-300 rounded-[60%_40%_40%_60%/60%_60%_40%_40%] opacity-40 transform scale-85 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-orange-400 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-yellow-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-pink-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
});

const StudentIllustration = memo(() => {
  const style = useAnimatedMount(
    1200,
    { opacity: 0, transform: 'translateY(60px) scale(0.7) rotate(10deg)' },
    { opacity: 1, transform: 'translateY(0) scale(1) rotate(0deg)', transition: 'all 1.2s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div className="absolute right-[-10px] md:right-5 top-[45%] transform -translate-y-1/2 hidden lg:block z-10 animate-sway" style={style}>
      <img
        src="/images/orang-1.png"
        alt="Student"
        className="w-[220px] md:w-[300px] lg:w-[350px] h-auto drop-shadow-lg"
        style={{ transform: 'scaleX(-1)' }}
      />
    </div>
  );
});

// Enhanced title with better design
const HeroTitle = memo(() => {
  const style = useAnimatedMount(
    200,
    { opacity: 0, transform: 'translateY(-40px) scale(0.95) skewY(-4deg)' },
    { opacity: 1, transform: 'translateY(0) scale(1) skewY(0deg)', transition: 'all 1.1s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div
      className="flex flex-col items-center text-center w-full px-2 relative"
      style={style}
    >
      <div className="relative flex flex-col items-center w-full">
        {/* "Welcome to" text above the main title, beri jarak dengan h1 */}
        <span
          className="uppercase font-semibold text-2xl sm:text-3xl md:text-4xl tracking-widest mb-4"
          style={{
            fontFamily: "'Montserrat', 'Orbitron', sans-serif",
            letterSpacing: '0.13em',
            marginBottom: '0.5em', // beri jarak lebih besar ke h1
            marginTop: '-2.5em',
            fontWeight: 700,
            // Kuning paling cerah diredup: ganti #fff9c4 (paling terang) jadi #fff3a3, dan #ffe259 jadi #ffe082
            background: 'linear-gradient(135deg, #fff3a3 0%, #ffecb3 15%, #ffb347 35%, #f6416c 60%, #d946ef 80%, #ffe082 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            filter: 'drop-shadow(0 2px 10px rgba(255, 179, 71, 0.25))',
            animation: 'gradient-shift 4s ease-in-out infinite',
            display: 'inline-block',
          }}
        >
          Welcome to
        </span>
        {/* Main title with enhanced styling */}
        <h1
          className="uppercase font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.18em] relative z-10 animate-text-glow"
          style={{
            fontFamily: "'Orbitron', 'Montserrat', sans-serif",
            // Kuning paling cerah diredup: ganti #fff9c4 (paling terang) jadi #fff3a3, dan #ffe259 jadi #ffe082
            background: 'linear-gradient(135deg, #fff3a3 0%, #ffecb3 15%, #ffb347 35%, #f6416c 60%, #d946ef 80%, #ffe082 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            fontWeight: 900,
            marginTop: '0', // hilangkan margin negatif agar lebih jauh dari span
            lineHeight: 1.1,
            textTransform: 'uppercase',
            filter: 'drop-shadow(0 4px 20px rgba(255, 179, 71, 0.4)) drop-shadow(0 0 10px rgba(246, 65, 108, 0.3))',
            animation: 'gradient-shift 4s ease-in-out infinite, text-float 3s ease-in-out infinite',
          }}
        >
          SWITCHFEST 2025
        </h1>
      </div>
    </div>
  );
});

const HeroSubtitle = memo(() => {
  const style = useAnimatedMount(
    500,
    { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(0) scale(1)', transition: 'all 1.1s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  return (
    <div
      className="text-base sm:text-lg md:text-xl font-semibold my-4"
      style={{
        color: '#232323',
        textShadow: '0 2px 12px #ffb34733',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: 1.5,
        fontFamily: "'Montserrat', 'Orbitron', sans-serif",
        fontWeight: 600,
        fontStyle: 'normal',
        letterSpacing: '0.01em',
        ...style,
        marginTop: '1em',
        marginBottom: '1em',
      }}
    >
      Empowering Students, Shaping Digital Tomorrow
    </div>
  );
});

const HeroActions = memo(({ setShowDaftar, setShowJuklak }) => {
  const style = useAnimatedMount(
    800,
    { opacity: 0, transform: 'scale(0.8) translateY(40px)' },
    { opacity: 1, transform: 'scale(1) translateY(0)', transition: 'all 1.1s cubic-bezier(.68,-0.55,.27,1.55)' }
  );
  const handleDaftar = useCallback(() => setShowDaftar(true), [setShowDaftar]);
  const handleJuklak = useCallback(() => setShowJuklak(true), [setShowJuklak]);

  return (
    <div className="flex flex-row gap-3 justify-center items-center" style={style}>
      <button
        className="daftar-btn w-32 h-10 sm:w-44 sm:h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-lg text-sm sm:text-base px-4 lg:px-7 py-2 shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 animate-pop"
        onClick={handleDaftar}
      >
        Daftar
      </button>
      <button
        className="w-32 h-10 sm:w-44 sm:h-12 bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg text-sm sm:text-base px-4 lg:px-7 py-2 shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 relative overflow-hidden group
        hover:bg-yellow-500 hover:text-gray-800 hover:border-transparent hover:scale-105 hover:shadow-lg animate-pop"
        onClick={handleJuklak}
      >
        <span className="relative z-10">Juklak-Juknis</span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </button>
    </div>
  );
});

const CountdownTimer = memo(() => {
  // Tanggal mulai dan akhir (WIB = UTC+7)
  const startDateStr = '2025-08-21T00:00:00+07:00';
  const endDateStr = '2025-09-07T23:59:59+07:00';

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [status, setStatus] = useState('before'); // before, running, ended

  useEffect(() => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const updateTimer = () => {
      const now = new Date();
      if (now < startDate) {
        setStatus('before');
        setTimeLeft({
          days: Math.floor((startDate - now) / (1000 * 60 * 60 * 24)),
          hours: Math.floor((startDate - now) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor((startDate - now) % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor((startDate - now) % (1000 * 60) / 1000)
        });
      } else if (now >= startDate && now <= endDate) {
        setStatus('running');
        const distance = endDate - now;
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setStatus('ended');
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [startDateStr, endDateStr]);

  // Animate each block with staggered delay
  const blockDelays = [0, 120, 240, 360];

  // Move useAnimatedMount out of map to avoid hook-in-callback
  const blockStyles = [
    useAnimatedMount(
      1000 + blockDelays[0],
      { opacity: 0, transform: 'scale(0.7) translateY(30px)' },
      { opacity: 1, transform: 'scale(1) translateY(0)', transition: 'all 1s cubic-bezier(.68,-0.55,.27,1.55)' }
    ),
    useAnimatedMount(
      1000 + blockDelays[1],
      { opacity: 0, transform: 'scale(0.7) translateY(30px)' },
      { opacity: 1, transform: 'scale(1) translateY(0)', transition: 'all 1s cubic-bezier(.68,-0.55,.27,1.55)' }
    ),
    useAnimatedMount(
      1200 + blockDelays[2],
      { opacity: 0, transform: 'scale(0.7) translateY(30px)' },
      { opacity: 1, transform: 'scale(1) translateY(0)', transition: 'all 1s cubic-bezier(.68,-0.55,.27,1.55)' }
    ),
    useAnimatedMount(
      1200 + blockDelays[3],
      { opacity: 0, transform: 'scale(0.7) translateY(30px)' },
      { opacity: 1, transform: 'scale(1) translateY(0)', transition: 'all 1s cubic-bezier(.68,-0.55,.27,1.55)' }
    ),
  ];

  const timeBlocks = [
    {
      label: 'Days',
      value: timeLeft.days,
      bg: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 border-2 border-yellow-400',
      text: 'text-yellow-700',
      labelText: 'text-yellow-800'
    },
    {
      label: 'Hours',
      value: timeLeft.hours,
      bg: 'bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 border-2 border-orange-400',
      text: 'text-orange-500',
      labelText: 'text-orange-600'
    },
    {
      label: 'Minutes',
      value: timeLeft.minutes,
      bg: 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-400 border-2 border-pink-300',
      text: 'text-pink-500',
      labelText: 'text-pink-600'
    },
    {
      label: 'Seconds',
      value: timeLeft.seconds,
      bg: 'bg-gradient-to-br from-red-100 via-red-200 to-red-400 border-2 border-red-300',
      text: 'text-red-500',
      labelText: 'text-red-600'
    }
  ];

  let titleText = '';
  if (status === 'before') {
    titleText = 'Pendaftaran Batch 1 dibuka dalam:';
  } else if (status === 'running') {
    titleText = 'Pendaftaran Batch 1 sedang berlangsung!';
  } else {
    titleText = 'Pendaftaran Batch 1 telah ditutup';
  }

  // Ubah mt-12 menjadi mt-6 agar jarak ke atas lebih kecil
  return (
    <div className="relative flex flex-col items-center max-w-md mx-auto z-30 mt-6">
      <div className="mb-4 text-center">
        <span className="text-base md:text-lg font-semibold text-orange-700">{titleText}</span>
      </div>
      {status !== 'ended' && (
        <div className="flex flex-wrap gap-4 justify-center items-center w-full">
          <div className="flex w-full sm:w-auto justify-center gap-4">
            {timeBlocks.slice(0, 2).map(({ label, value, bg, text, labelText }, idx) => (
              <div
                key={label}
                className={`${bg} rounded-lg p-4 text-center w-24 h-24 flex flex-col justify-center items-center shadow-lg mb-0`}
                style={blockStyles[idx]}
              >
                <div className={`text-2xl md:text-3xl font-bold ${text}`}>{value}</div>
                <div className={`text-sm ${labelText}`}>{label}</div>
              </div>
            ))}
          </div>
          <div className="flex w-full sm:w-auto justify-center gap-4">
            {timeBlocks.slice(2).map(({ label, value, bg, text, labelText }, idx) => (
              <div
                key={label}
                className={`${bg} rounded-lg p-4 text-center w-24 h-24 flex flex-col justify-center items-center shadow-lg mt-0`}
                style={blockStyles[idx + 2]}
              >
                <div className={`text-2xl md:text-3xl font-bold ${text}`}>{value}</div>
                <div className={`text-sm ${labelText}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {status === 'ended' && (
        <div className="text-lg font-bold text-red-500 mt-4">Pendaftaran telah berakhir</div>
      )}
    </div>
  );
});

// Main Hero component
const Hero = () => {
  const [showDaftar, setShowDaftar] = useState(false);
  const [showJuklak, setShowJuklak] = useState(false);

  const popupDaftarItems = [
    {
      nama: "Web Development",
      link: "https://bit.ly/WebDevelopment_SwitchFest2025"
    },
    {
      nama: "UI/UX Design",
      link: "https://bit.ly/UIUX-Design_SwitchFest2025"
    },
    {
      nama: "Design Poster",
      link: "https://bit.ly/Poster_SwitchFest2025"
    },
  ];

  const popupJuklakItems = [
    {
      nama: "Juklak Web Development",
      link: "https://drive.google.com/file/d/1ve29XMamqWfeevCN7htFM6XCHo8tAL5i/view?usp=drivesdk"
    },
    {
      nama: "Juklak UI/UX Design",
      link: "https://drive.google.com/file/d/1vadpN8UT0icQn3SCuflCTc6di7DFLgwQ/view?usp=drivesdk"
    },
    {
      nama: "Juklak Design Poster",
      link: "https://drive.google.com/file/d/1vi1-bds6tkxZTdSDhCAP7OWfMt0iFLtn/view?usp=drivesdk"
    },
  ];

  // Tidak perlu lock scroll pada body, biarkan scroll tetap aktif saat popup muncul

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4 md:px-20 pt-16 md:pt-32 overflow-hidden bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Trophy />
        <Stars />
        <OrangeVector1 />
        <OrangeVector2 />
        <OrangeVector3 />
        <StudentIllustration />
      </div>

      {/* Main content with dynamic animation */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <HeroTitle />
        <HeroSubtitle />
        <HeroActions setShowDaftar={setShowDaftar} setShowJuklak={setShowJuklak} />
        <CountdownTimer />
      </div>

      {/* Popups */}
      <PopupButton
        showModal={showDaftar}
        setShowModal={setShowDaftar}
        label="Perlombaan"
        items={popupDaftarItems}
        // scroll pada body tetap aktif saat popup muncul
      />
      <PopupButton
        showModal={showJuklak}
        setShowModal={setShowJuklak}
        label="Juklak-Juknis"
        items={popupJuklakItems}
        // scroll pada body tetap aktif saat popup muncul
      />
    </section>
  );
};

export default Hero;