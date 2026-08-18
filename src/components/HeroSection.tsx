import React from 'react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[92vh] min-h-[700px] max-h-[950px] flex items-center justify-center overflow-hidden px-6">
      {/* Background Image - 100% Sharp & Unobstructed */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587317996312-6314ec7b5a06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        />
        {/* Balanced Cinematic Contrast Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/45" />
      </div>

      {/* Hero Typography Content - Crisp, Luminous & Legible */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center select-none"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.28em' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-point-serif text-xs sm:text-sm tracking-[0.28em] text-[#e8d5c4] mb-3 uppercase font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Flower & Plant Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display-lg text-6xl sm:text-7xl md:text-[92px] text-[#ffffff] mb-2 font-light tracking-wider leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
        >
          ONHWA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display-lg text-lg sm:text-2xl text-[#f3e9de] tracking-[0.25em] font-light mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          온화 · 溫花
        </motion.p>

        <div className="w-16 h-[1px] bg-white/40 mb-8 shadow-sm" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4 mb-10"
        >
          <p className="font-display-lg text-2xl sm:text-3xl md:text-3xl text-[#ffffff] font-light italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            “마음이 머무는 곳에, 꽃을 피웁니다.”
          </p>
          <div className="font-body-md text-sm sm:text-base text-[#f7f5f2] font-normal leading-relaxed space-y-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <p>말로는 다 전하지 못한 마음까지</p>
            <p>가장 아름다운 계절의 꽃에 담아 전합니다.</p>
          </div>
          <p className="font-label-sm text-xs sm:text-[13px] tracking-[0.28em] text-[#ffc69b] font-semibold uppercase pt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            FLOWERS FOR YOUR WARMEST MOMENTS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToStory}
            className="bg-white/10 hover:bg-white text-white hover:text-[#19221a] border border-white/80 backdrop-blur-sm font-label-sm text-xs uppercase px-11 py-4.5 transition-all duration-300 tracking-[0.28em] cursor-pointer shadow-lg hover:shadow-2xl active:scale-95 font-medium"
          >
            Discover ONHWA
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
