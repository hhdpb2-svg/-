import React from 'react';
import { Masterclass } from '../types';
import { MASTERCLASSES } from '../data/mockData';

interface MasterclassSectionProps {
  onSelectClass: (masterclass: Masterclass) => void;
}

export const MasterclassSection: React.FC<MasterclassSectionProps> = ({ onSelectClass }) => {
  return (
    <section className="w-full py-24 bg-[#f5f3f0]/70 border-y border-[#747872]/10" id="classes">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-label-sm text-xs text-[#506050] uppercase tracking-widest mb-4 font-semibold">
            Atelier Classes
          </p>
          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-[40px] text-[#506050] mb-4 font-light">
            ONHWA Masterclass
          </h2>
          <p className="font-body-md text-sm text-[#434842]/90 leading-relaxed">
            꽃을 만지는 시간의 기쁨을 나눕니다. 온화의 플로리스트와 함께 당신만의 특별한 작품을 완성해보세요.
          </p>
        </div>

        {/* Classes 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTERCLASSES.map((item) => (
            <div
              key={item.id}
              className="bg-[#fbf9f6] border border-[#c4c8c0]/50 p-8 hover:border-[#506050] transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header tag & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-[#506050] text-3xl font-light">
                    {item.iconName}
                  </span>
                  <span
                    className={`font-label-sm text-[10px] px-3 py-1 uppercase tracking-widest rounded-full ${
                      item.level === 'Beginner'
                        ? 'bg-[#506050]/10 text-[#506050]'
                        : item.level === 'Intermediate'
                        ? 'bg-[#954925]/10 text-[#954925]'
                        : 'bg-[#ff9d73]/20 text-[#783210]'
                    }`}
                  >
                    {item.level}
                  </span>
                </div>

                <h3 className="font-display-lg text-[22px] text-[#506050] mb-3 group-hover:text-[#2a2b2a] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm text-[#434842] mb-6 min-h-[48px] leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Meta list */}
                <ul className="space-y-2 mb-8 font-label-sm text-xs text-[#434842]/80 border-t border-[#c4c8c0]/30 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#506050]">schedule</span>
                    <span>{item.duration}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#506050]">payments</span>
                    <span className="font-semibold">₩ {item.price.toLocaleString()}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onSelectClass(item)}
                className="w-full border border-[#506050] text-[#506050] font-label-sm text-xs uppercase py-3.5 tracking-widest hover:bg-[#506050] hover:text-[#ffffff] transition-all duration-300 cursor-pointer active:scale-95 text-center"
              >
                Book Class
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
