import React from 'react';
import { motion } from 'motion/react';

export const StorySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 mb-32 pt-16" id="story">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Side: Minimalist Editorial Image with hover scale */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="order-2 md:order-1 relative group"
        >
          <div className="aspect-[3/4] overflow-hidden bg-[#efeeeb] shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLvESy8i9Pb8yaQbTzy11YflWn-dP1du1YbCJ1raOk1j2hiAeO2aughxEgrKCbQ-5760u1pqAnbA6O3Z17GzQ8nMgnuVKDdzIU5aL0ed-bvPjrF7uDsFq-ApcaSFijvYOO6sPwyy5-9t0Y4ouCveESoIbmLEI_kOuMn8W2otvCn-0jV2nc-hHQO_j_LAtbo1MVaqwvMvY83p7ej0ifUCblxjRYroAFXe-9sQZZ1S80GTMm3OfFTROFOgnRIs"
              alt="온화 플라워 아카이브 - 계절 꽃 큐레이션"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {/* Subtle caption tag */}
          <p className="font-point-serif italic text-xs text-[#747872] mt-3 text-right">
            Seasonal Studio Archive — 01
          </p>
        </motion.div>

        {/* Right Side: Philosophy Prose */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <p className="font-label-sm text-xs text-[#506050] uppercase tracking-widest mb-4 font-semibold">
            Our Philosophy
          </p>
          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-[44px] text-[#506050] mb-8 font-light leading-snug tracking-wide">
            계절이 머무르는 자리에<br />
            진심을 심습니다
          </h2>
          <div className="space-y-6 font-body-md text-[#434842] text-[15px] leading-loose">
            <p>
              온화(ONHWA)는 단순한 꽃집이 아닙니다. 자연이 빚어낸 계절의 가장 아름다운 순간을 선별하여, 당신의 공간과 마음속에 고스란히 옮겨놓는 큐레이션 스튜디오입니다.
            </p>
            <p>
              매일 아침 가장 신선한 소재를 엄선하고, 식물 본연의 선과 색을 살리는 세밀한 디자인으로 시간이 지나도 변치 않는 깊은 감동을 선사합니다. 우리의 손길을 거친 꽃들은 단순한 선물이 아닌, 당신을 대신해 전하는 따뜻하고 진실된 이야기가 됩니다.
            </p>
            <div className="pt-4 border-t border-[#c4c8c0]/40">
              <p className="font-point-serif text-xl text-[#506050] italic">
                "Every bloom tells a warm story."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
