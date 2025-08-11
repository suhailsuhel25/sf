
const timelineData = [
  {
    title: 'Pendaftaran & Pengumpulan Karya Batch 1',
    date: '18 Agustus - 31 Agustus 2025',
  },
  {
    title: 'Pendaftaran & Pengumpulan Karya Batch 2',
    date: '1 September - 21 September 2025',
  },
  {
    title: 'Penilaian Babak Penyisihan',
    date: '22 September - 1 Oktober 2025',
  },
  {
    title: 'Pengumuman Peserta yang Lolos Babak Penyisihan',
    date: '3 Oktober 2025',
  },
  {
    title: 'Technical Meeting Finalis (Online)',
    date: '7 Oktober 2025',
  },
  {
    title: 'Grand Final dan Presentasi Finalis',
    date: '13 Oktober 2025',
  },
  {
    title: 'Pengumuman Pemenang Lomba',
    date: '17 Oktober 2025',
  },
];


const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#232323] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Timeline</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical S line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-400 via-pink-400 to-purple-400 opacity-40 rounded-full -translate-x-1/2 z-0"></div>
          <div className="flex flex-col gap-16 relative z-10">
            {timelineData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center group">
                  {/* Horizontal connector */}
                  <div className={`hidden md:block absolute top-1/2 w-1/2 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-60 ${isLeft ? 'left-1/2' : 'right-1/2'} -translate-y-1/2 rounded-full`}></div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 border-4 border-[#232946] flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-base">{idx + 1}</span>
                  </div>
                  <div className={`w-full md:w-1/2 px-2 md:px-0 ${isLeft ? 'pr-8 md:justify-end flex' : 'pl-8 md:justify-start flex'}`}> 
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-[1.025] hover:shadow-3xl w-full max-w-lg">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-orange-100/90 font-medium">{item.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Decorative gradient blur */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-64 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-20 blur-3xl rounded-full z-0"></div>
      </div>
    </section>
  );
}

export default Timeline;