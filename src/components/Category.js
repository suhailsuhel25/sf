
import { useState, useEffect, memo } from 'react';

// Custom hook for animated particles
function useParticles(count) {
    const [particles, setParticles] = useState([]);
    useEffect(() => {
        const generateParticles = () =>
            Array.from({ length: count }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                speed: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3
            }));
        setParticles(generateParticles());
        const interval = setInterval(() => {
            setParticles(prev =>
                prev.map(p => ({
                    ...p,
                    y: p.y > 100 ? -5 : p.y + p.speed * 0.1
                }))
            );
        }, 50);
        return () => clearInterval(interval);
    }, [count]);
    return particles;
}

const ParticleBackground = memo(({ particles }) => (
    <>
        {/* Grid Pattern */}
        <div
            className="absolute inset-0"
            style={{
                background:
                    'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)',
                backgroundSize: '50px 50px'
            }}
        ></div>
        {/* Floating Particles */}
        {particles.map(particle => (
            <div
                key={particle.id}
                className="absolute w-1 h-1"
                style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    opacity: particle.opacity,
                    background: 'linear-gradient(135deg, #ffb347, #ff6a00)',
                    borderRadius: '9999px',
                    animation: 'pulse 2s infinite',
                    animationDelay: `${particle.id * 0.1}s`
                }}
            />
        ))}
        {/* Gradient Orbs */}
        <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse"
            style={{
                background: 'radial-gradient(circle at 30% 30%, #ff9800 0%, #1f2937 100%)',
                opacity: 0.10
            }}
        ></div>
        <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse"
            style={{
                background: 'radial-gradient(circle at 70% 70%, #ff2eb2 0%, #1f2937 100%)',
                opacity: 0.08,
                animationDelay: '2s'
            }}
        ></div>
    </>
));

// Competition card as a memoized component
const CompetitionCard = memo(function CompetitionCard({ comp, index, activeCard, setActiveCard }) {
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

                {/* CTA Button */}
                <a
                    href="https://drive.google.com/drive/folders/1wQbYKT1eZq9VHtV6nRvWmvMRGsiE9zra?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 px-6 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/btn"
                    style={{ background: comp.gradient, color: '#fff' }}
                >
                    {/* Overlay glassmorphism hover konsisten semua card (seperti design poster) */}
                    <div className="absolute inset-0 pointer-events-none transition-all duration-300 group-hover/btn:opacity-100 opacity-0 rounded-2xl backdrop-blur-md border border-white/20" style={{ background: 'rgba(255,255,255,0.22)' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Join Battle
                        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="transition-transform group-hover/btn:translate-x-1">
                            <path d="M8 1l3 3-3 3M11 4H1M8 9l3 3-3 3M11 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </span>
                </a>
            </div>

            {/* Active Card Indicator */}
            {activeCard === comp.id && (
                <div className="absolute inset-0 border-2 border-white/30 rounded-3xl pointer-events-none animate-pulse"></div>
            )}
        </div>
    );
});

const PARTICLE_COUNT = 20;

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
        // Icon: Web/Code
        icon: (
            // Website/Browser window icon (SVG diperbesar)
            <svg width="70" height="70" fill="none" viewBox="0 0 32 32">
                {/* Outer browser window */}
                <rect x="4" y="8" width="24" height="16" rx="2.5" fill="#ffb347" opacity="0.18"/>
                <rect x="6" y="10" width="20" height="12" rx="1.5" fill="#ff9800"/>
                {/* Browser top bar */}
                <rect x="6" y="10" width="20" height="3" rx="1.5" fill="#ffb347" />
                {/* Browser buttons */}
                <circle cx="8.5" cy="11.5" r="0.7" fill="#fff" opacity="0.7"/>
                <circle cx="11" cy="11.5" r="0.7" fill="#fff" opacity="0.7"/>
                <circle cx="13.5" cy="11.5" r="0.7" fill="#fff" opacity="0.7"/>
                {/* Website content: header */}
                <rect x="9" y="15" width="14" height="2" rx="1" fill="#fff" opacity="0.9"/>
                {/* Website content: lines */}
                <rect x="9" y="18.5" width="10" height="1.2" rx="0.6" fill="#fff" opacity="0.7"/>
                <rect x="9" y="21" width="7" height="1.2" rx="0.6" fill="#fff" opacity="0.5"/>
                {/* Website content: image placeholder */}
                <rect x="21" y="18.5" width="2" height="3.7" rx="1" fill="#fff" opacity="0.5"/>
            </svg>
        )
    },
    {
        id: 'uiux',
        title: 'UI/UX Design',
        subtitle: 'Creative Design Battle',
        description: 'Tunjukkan kreativitasmu dalam merancang antarmuka dan pengalaman pengguna yang memukau dan user-friendly!',
        level: 'Creative',
        gradient: 'linear-gradient(90deg, #ffe259 0%, #fff6b7 100%)',
        bgGradient: 'linear-gradient(135deg, #232323 0%, #2d2d2d 60%, #ffe259 100%)',
        iconBg: 'linear-gradient(135deg, #ffe259 0%, #fff6b7 100%)',
        tags: [],
        // Icon: UI/UX (layout, pen, or similar)
        icon: (
            <svg width="70" height="70" fill="none" viewBox="0 0 32 32">
                <rect x="8" y="6" width="16" height="20" rx="3" fill="#ffe259" opacity="0.2"/>
                <rect x="10" y="8" width="12" height="16" rx="2" fill="#fff6b7"/>
                <rect x="12" y="10" width="8" height="4" rx="1" fill="#fff"/>
                <rect x="12" y="16" width="6" height="1.5" rx="0.75" fill="#ffe259"/>
                <circle cx="16" cy="22" r="2" fill="#ffe259" />
                <rect x="14.5" y="20.5" width="3" height="3" rx="1.5" stroke="#ffb347" strokeWidth="1"/>
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
                <rect x="10" y="4" width="12" height="24" rx="2" fill="#ff2eb2" opacity="0.2"/>
                <rect x="11" y="6" width="10" height="20" rx="1" fill="#ff1749"/>
                <rect x="13" y="8" width="6" height="8" rx="1" fill="#fff"/>
                <rect x="13" y="18" width="6" height="2" rx="1" fill="#ff2eb2"/>
                <rect x="13" y="22" width="6" height="2" rx="1" fill="#ff2eb2"/>
                <circle cx="16" cy="12" r="1.5" fill="#ff2eb2"/>
            </svg>
        )
    }
];


const Category = () => {
    const [activeCard, setActiveCard] = useState(null);
    const particles = useParticles(PARTICLE_COUNT);

    return (
        <section
            id="category"
            className="min-h-screen relative overflow-hidden flex items-center py-10"
            style={{
                background: 'linear-gradient(135deg, #1f2937 0%, #232323 60%, #ff6a00 100%)'
            }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <ParticleBackground particles={particles} />
            </div>


            <div className="container mx-auto px-6 relative">
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative">
                    {competitions.map((comp, index) => (
                        <CompetitionCard
                            key={comp.id}
                            comp={comp}
                            index={index}
                            activeCard={activeCard}
                            setActiveCard={setActiveCard}
                        />
                    ))}
                </div>
                <BottomCTA />
                {/* Header moved to bottom with lowest z-index */}
                <div className="absolute left-0 right-0 bottom-0 z-0 w-full">
                    <Header />
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .shadow-3xl {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

// Header as a separate component
const Header = memo(() => (
        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-pink-300 bg-white/10 shadow-md mb-4">
                                <svg className="w-4 h-4 text-pink-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.755l6.914-1.004L12 2.5l3.086 6.251L22 9.755l-5.007 4.367 1.179 6.873z"/></svg>
                                <span className="text-base font-semibold tracking-wide text-pink-400">SWITCHFEST 2025</span>
                            </div>
                            <h2
                                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-2 tracking-tight"
                                style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
                            >
                                BATTLE ARENA
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-pink-100/90">
                                Pilih kategori lomba dan buktikan kemampuanmu di arena kompetisi terbesar tahun ini
                            </p>
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