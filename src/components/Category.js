
import { useState, memo } from 'react';
import PopupButton from './PopupButton';

// Data kompetisi
const competitions = [
    {
        id: 'web',
        title: 'Web Programming',
        subtitle: 'Code Master Challenge',
        description: 'Tantang kemampuanmu dalam membangun aplikasi web yang inovatif dan fungsional dengan teknologi terdepan!',
        level: 'Expert',
        gradient: 'linear-gradient(90deg, #ff6a00 0%, #ff9800 60%, #ffb347 100%)',
        bgGradient: 'linear-gradient(135deg, #232323 0%, #2d2d2d 60%, #ff6a00 100%)',
        iconBg: 'linear-gradient(135deg, #ff9800 0%, #ffb347 100%)',
        tags: [],
        icon: (
            <svg width="70" height="70" fill="none" viewBox="0 0 32 32">
                <rect x="4" y="8" width="24" height="16" rx="2.5" fill="#ffb347" opacity="0.18" />
                <rect x="6" y="10" width="20" height="12" rx="1.5" fill="#ff9800" />
                <rect x="6" y="10" width="20" height="3" rx="1.5" fill="#ffb347" />
                <circle cx="8.5" cy="11.5" r="0.7" fill="#fff" opacity="0.7" />
                <circle cx="11" cy="11.5" r="0.7" fill="#fff" opacity="0.7" />
                <circle cx="13.5" cy="11.5" r="0.7" fill="#fff" opacity="0.7" />
                <rect x="9" y="15" width="14" height="2" rx="1" fill="#fff" opacity="0.9" />
                <rect x="9" y="18.5" width="10" height="1.2" rx="0.6" fill="#fff" opacity="0.7" />
                <rect x="9" y="21" width="7" height="1.2" rx="0.6" fill="#fff" opacity="0.5" />
                <rect x="21" y="18.5" width="2" height="3.7" rx="1" fill="#fff" opacity="0.5" />
            </svg>
        )
    },
    {
        id: 'uiux',
        title: 'UI/UX Design',
        subtitle: 'Creative Design Battle',
        description: 'Tunjukkan kreativitasmu dalam merancang antarmuka dan pengalaman pengguna yang memukau dan user-friendly!',
        level: 'Creative',
        gradient: 'linear-gradient(90deg, #ffd600 0%, #ffe082 100%)', // warna kuning lebih gelap
        bgGradient: 'linear-gradient(135deg, #232323 0%, #2d2d2d 60%, #ffd600 100%)',
        iconBg: 'linear-gradient(135deg, #ffd600 0%, #ffe082 100%)',
        tags: [],
        // Icon: UI/UX (layout, pen, or similar)
        icon: (
            <svg width="70" height="70" fill="none" viewBox="0 0 32 32">
                <rect x="8" y="6" width="16" height="20" rx="3" fill="#ffd600" opacity="0.2" />
                <rect x="10" y="8" width="12" height="16" rx="2" fill="#ffe082" />
                <rect x="12" y="10" width="8" height="4" rx="1" fill="#fff" />
                <rect x="12" y="16" width="6" height="1.5" rx="0.75" fill="#ffd600" />
                <circle cx="16" cy="22" r="2" fill="#ffd600" />
                <rect x="14.5" y="20.5" width="3" height="3" rx="1.5" stroke="#ffb347" strokeWidth="1" />
            </svg>
        )
    },
    {
        id: 'poster',
        title: 'Design Poster',
        subtitle: 'Visual Impact Contest',
        description: 'Ekspresikan ide dan pesanmu melalui desain poster yang powerful, menarik, dan mampu menyampaikan pesan dengan efektif!',
        level: 'Artistic',
        gradient: 'linear-gradient(90deg, #f6416c 0%, #ff2eb2 50%, #ff1749 100%)',
        bgGradient: 'linear-gradient(135deg, #232323 0%, #2d2d2d 60%, #f6416c 100%)',
        iconBg: 'linear-gradient(135deg, #f6416c 0%, #ff2eb2 100%)',
        tags: [],
        // Icon: Poster (image, frame, or similar)
        icon: (
            <svg width="70" height="70" fill="none" viewBox="0 0 32 32">
                <rect x="10" y="4" width="12" height="24" rx="2" fill="#ff2eb2" opacity="0.2" />
                <rect x="11" y="6" width="10" height="20" rx="1" fill="#ff1749" />
                <rect x="13" y="8" width="6" height="8" rx="1" fill="#fff" />
                <rect x="13" y="18" width="6" height="2" rx="1" fill="#ff2eb2" />
                <rect x="13" y="22" width="6" height="2" rx="1" fill="#ff2eb2" />
                <circle cx="16" cy="12" r="1.5" fill="#ff2eb2" />
            </svg>
        )
    }
];

// Define unique popup items for each competition
const popupItemsByCompId = {
    web: [
        {
            nama: 'Daftar Lomba',
            link: 'https://bit.ly/WebDevelopment_SwitchFest2025',
        },
        {
            nama: 'Lihat Juklak',
            link: 'https://drive.google.com/file/d/1ve29XMamqWfeevCN7htFM6XCHo8tAL5i/view?usp=drivesdk',
        },
    ],
    uiux: [
        {
            nama: 'Daftar Lomba',
            link: 'https://bit.ly/UIUX-Design_SwitchFest2025',
        },
        {
            nama: 'Lihat Juklak',
            link: 'https://drive.google.com/file/d/1vadpN8UT0icQn3SCuflCTc6di7DFLgwQ/view?usp=drivesdk',
        },
    ],
    poster: [

        {
            nama: 'Daftar Lomba',
            link: 'https://bit.ly/Poster_SwitchFest2025',
        },
        {
            nama: 'Lihat Juklak',
            link: 'https://drive.google.com/file/d/1vi1-bds6tkxZTdSDhCAP7OWfMt0iFLtn/view?usp=drivesdk',
        },
    ],
};

const Category = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalComp, setModalComp] = useState(null);

    // Handler for opening the popup for a specific competition
    const handleJoinBattle = (comp) => {
        setModalComp(comp);
        setShowModal(true);
    };

    // Items for the popup button (customized per competition)
    const getPopupItems = (comp) => {
        if (!comp) return [];
        return popupItemsByCompId[comp.id] || [];
    };

    // Patch CompetitionCard to render the cta prop
    const CompetitionCardPatchedRender = memo(function CompetitionCardPatchedRender({ comp, index, activeCard, setActiveCard }) {
        return (
            <div
                key={comp.id}
                className="group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer border border-white/10"
                onMouseEnter={() => setActiveCard(comp.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                    animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                    background: comp.bgGradient,
                    boxShadow: '0 8px 32px 0 rgba(31,41,55,0.18), 0 1.5px 8px 0 rgba(255, 107, 0, 0.08)'
                }}
            >
                {/* Card Glow Effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: comp.gradient }}
                ></div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 z-10">
                    <div
                        className="px-4 py-2 rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                        style={{ background: comp.gradient, color: '#fff' }}
                    >
                        <span className="text-sm font-bold">{comp.level}</span>
                    </div>
                </div>

                {/* Icon Container */}
                <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden"
                    style={{ background: comp.iconBg }}
                >
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-y-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <div className="relative z-10">{comp.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <div>
                        <h3
                            className="text-2xl font-bold mb-1 group-hover:text-[#fff6b7] transition-colors"
                            style={{ color: '#fff' }}
                        >
                            {comp.title}
                        </h3>
                        <p
                            className="text-sm font-semibold bg-clip-text text-transparent"
                            style={{
                                background: comp.gradient,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}
                        >
                            {comp.subtitle}
                        </p>
                    </div>

                    <p className="leading-relaxed text-sm" style={{ color: '#fff7ed' }}>{comp.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {comp.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full border"
                                style={{ background: '#2d2d2d', color: '#ffe259', borderColor: '#ffb347' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Button (from prop) */}
                    <button
                        type="button"
                        className="block w-full text-center py-4 px-6 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/btn"
                        style={{ background: comp.gradient, color: '#fff' }}
                        onClick={() => handleJoinBattle(comp)}
                    >
                        {/* Overlay glassmorphism hover konsisten semua card (seperti design poster) */}
                        <div className="absolute inset-0 pointer-events-none transition-all duration-300 group-hover/btn:opacity-100 opacity-0 rounded-2xl backdrop-blur-md border border-white/20" style={{ background: 'rgba(255,255,255,0.22)' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Join Battle
                            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="transition-transform group-hover/btn:translate-x-1">
                                <path d="M4 8h8M10 6l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Active Card Indicator */}
                {activeCard === comp.id && (
                    <div className="absolute inset-0 border-2 border-white/30 rounded-3xl pointer-events-none animate-pulse"></div>
                )}
            </div>
        );
    });

    // Render
    return (
        <section
            id="category"
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
            <div className="relative z-10 container mx-auto px-6">
                {/* Header at the top */}
                <div className="w-full">
                    <Header />
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative">
                    {competitions.map((comp, index) => (
                        <CompetitionCardPatchedRender
                            key={comp.id}
                            comp={comp}
                            index={index}
                            activeCard={activeCard}
                            setActiveCard={setActiveCard}
                        />
                    ))}
                </div>
                <BottomCTA />
            </div>

            {/* Popup Modal */}
            {showModal && modalComp && (
                <PopupButton
                    showModal={showModal}
                    setShowModal={setShowModal}
                    label=""
                    items={getPopupItems(modalComp)}
                />
            )}

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

// Header as a separate component
const Header = memo(() => (
    <div
        className="relative w-full text-center mb-8 flex-shrink-0"
        style={{
            marginTop: '3.5rem',
        }}
    >
        <div className="flex flex-col items-center gap-2">
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
                        Competition category
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
                Pilih kategori lomba dan buktikan kemampuanmu di arena kompetisi terbesar tahun ini
            </div>
        </div>
    </div>
));

// Bottom CTA as a separate component
const BottomCTA = memo(() => (
    <div className="text-center mt-16">
        <p className="mb-6" style={{ color: '#fff6b7' }}>
            Siap untuk membuktikan kemampuanmu? Bergabunglah dengan banyak peserta lainnya!
        </p>
    </div>
));

export default Category;