
import React, { useState, useEffect, useCallback } from 'react';
import { DUBBING_REFS, BLENDING_REFS, CHALLENGE_REFS } from './constants';
import ReferenceCard from './components/ReferenceCard';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Intro
    {
      id: 0,
      title: "CREATIVE REVOLUTION",
      subtitle: "섭이스센터 광고 레퍼런스",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-6 px-4 py-8">
          <div className="relative">
             <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full"></div>
             <h1 className="text-5xl md:text-9xl font-black tracking-tighter gradient-text relative z-10 leading-tight">
                섭이스센터
             </h1>
          </div>
          <p className="text-base md:text-2xl text-gray-400 font-light tracking-widest uppercase">
            ADVERTISING REFERENCE PORTFOLIO
          </p>
          <div className="mt-8 md:mt-12 flex gap-4">
             <button 
              onClick={() => setCurrentSlide(1)}
              className="px-8 md:px-10 py-3.5 md:py-4 bg-white text-black font-black rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 text-base md:text-lg shadow-xl active:scale-95"
             >
               시작하기 <i className="fas fa-arrow-right"></i>
             </button>
          </div>
        </div>
      ),
      bg: "bg-black"
    },
    // Slide 2: Capabilities
    {
      id: 1,
      title: "CORE CAPABILITIES",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4 py-4">
          {[
            { 
              icon: 'fa-microphone-lines', 
              label: '병맛더빙, 개사', 
              desc: '친근감 있는 대사와 가사로\n광고 아이템 어필' 
            },
            { 
              icon: 'fa-music', 
              label: '자체 CM송 제작', 
              desc: '중독성 강한 멜로디와 가사 제작' 
            },
            { 
              icon: 'fa-cube', 
              label: '자체 애니메이션\n3D 블렌딩', 
              desc: '생동감 넘치는 캐릭터 구현 및\n현실공간에 소환' 
            },
            { 
              icon: 'fa-users-viewfinder', 
              label: '쉬운 참여형 챌린지', 
              desc: '사진 1장, 터치 한번으로\n참여 가능한 챌린지 제작\n높은 참여율 유도' 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/40 transition-all group">
              <i className={`fas ${item.icon} text-3xl md:text-4xl mb-4 md:mb-6 text-white group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-xl md:text-2xl font-bold mb-2 whitespace-pre-line leading-tight">{item.label}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
      bg: "bg-black"
    },
    // Slide 3: Dubbing
    {
      id: 2,
      title: "01. 병맛더빙 & 개사",
      subtitle: "원본소스 있어도, 없어도 OK!\n맞춤 병맛광고 제작",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl px-4 py-4">
          {DUBBING_REFS.map(ref => <ReferenceCard key={ref.id} item={ref} />)}
        </div>
      ),
      bg: "bg-black"
    },
    // Slide 4: 3D Blending
    {
      id: 3,
      title: "02. 3D 캐릭터 블렌딩",
      subtitle: "현실 세계에 소환하는\n캐릭터 애니메이션",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl px-4 py-4">
          {BLENDING_REFS.map(ref => <ReferenceCard key={ref.id} item={ref} />)}
        </div>
      ),
      bg: "bg-black"
    },
    // Slide 5: Challenges
    {
      id: 4,
      title: "03. CM송 & 챌린지",
      subtitle: "고퀄리티 챌린지 영상을 사진 한장으로! \n세상에서 가장 쉬운 참여형 챌린지 제작",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl px-4 py-4">
          {CHALLENGE_REFS.map(ref => <ReferenceCard key={ref.id} item={ref} />)}
        </div>
      ),
      bg: "bg-black"
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const current = slides[currentSlide];

  return (
    <div className={`fixed inset-0 h-[100dvh] ${current.bg} transition-colors duration-700 flex flex-col text-white`}>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-white rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="shrink-0 p-5 md:p-8 flex justify-between items-center z-50 bg-black/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center font-black text-lg md:text-xl text-black shadow-lg">S</div>
          <span className="font-black tracking-tight text-lg md:text-xl">섭이스센터</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden lg:flex gap-8 text-sm font-bold text-gray-500">
            <button onClick={() => setCurrentSlide(1)} className="hover:text-white transition-colors uppercase">CAPABILITIES</button>
            <button onClick={() => setCurrentSlide(2)} className="hover:text-white transition-colors uppercase">DUBBING</button>
            <button onClick={() => setCurrentSlide(3)} className="hover:text-white transition-colors uppercase">3D VFX</button>
            <button onClick={() => setCurrentSlide(4)} className="hover:text-white transition-colors uppercase">CHALLENGES</button>
          </nav>
          <div className="text-xs md:text-sm font-mono text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      {/* Main Slide Content Area - Using justify-start on mobile to prevent top-cropping */}
      <main className="flex-1 overflow-y-auto hide-scrollbar z-10 relative px-4 py-4 md:py-12 flex flex-col">
        <div key={currentSlide} className="slide-enter w-full flex flex-col items-center max-w-7xl mx-auto min-h-full justify-start md:justify-center">
          {current.id !== 0 && (
            <div className="mt-4 md:mt-0 mb-8 md:mb-12 text-center px-4 shrink-0">
              <h2 className="text-[10px] md:text-sm font-black text-white/40 tracking-[0.4em] uppercase mb-2 md:mb-4">{current.title}</h2>
              {current.subtitle && (
                <p className="text-xl md:text-5xl font-black tracking-tighter whitespace-pre-line leading-tight">
                    {current.subtitle}
                </p>
              )}
            </div>
          )}
          <div className="w-full flex justify-center pb-24 md:pb-0">
            {current.content}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="shrink-0 p-5 md:p-8 flex justify-between items-center z-50 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="flex gap-3 md:gap-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all active:scale-90 bg-black/20 backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <i className="fas fa-chevron-left text-sm md:text-base"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all active:scale-90 bg-black/20 backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <i className="fas fa-chevron-right text-sm md:text-base"></i>
          </button>
        </div>
        <div className="flex gap-1.5 md:gap-2">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 md:w-8 bg-white' : 'w-1.5 md:w-2 bg-white/20'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="hidden sm:block text-gray-600 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.3em]">
          EST. 2024 © 섭이스센터
        </div>
      </footer>
    </div>
  );
};

export default App;
