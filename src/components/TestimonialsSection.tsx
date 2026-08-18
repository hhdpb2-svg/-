import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  // Duplicate for seamless infinite loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="w-full bg-[#eae8e5]/30 py-24 border-t border-[#747872]/10 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="font-label-sm text-xs text-[#506050] uppercase tracking-widest mb-3 font-semibold">
              Testimonials
            </p>
            <h2 className="font-display-lg text-3xl sm:text-4xl md:text-[40px] text-[#506050] font-light">
              온화를 선택한 마음들
            </h2>
          </div>

          {/* Star Rating Overview */}
          <div className="flex items-center gap-1.5 text-[#ff9d73]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-[#954925]" />
            ))}
            <span className="font-label-sm text-xs text-[#434842] ml-2 font-medium">
              4.9 / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container with Gradient Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#eae8e5]/90 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#eae8e5]/90 to-transparent" />

        {/* Scrolling Track */}
        <div className="animate-marquee-slow flex gap-6 px-4 py-2 hover:cursor-grab active:cursor-grabbing">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-[#fbf9f6] p-7 sm:p-8 border border-[#747872]/15 flex flex-col justify-between hover:border-[#506050] transition-all duration-300 shadow-xs hover:shadow-md select-none rounded-xs"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#954925] mb-4 gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-body-md text-[14px] sm:text-[15px] text-[#434842] leading-relaxed mb-6">
                  {review.content}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#c4c8c0]/30">
                <div className="w-9 h-9 rounded-full bg-[#eae8e5] overflow-hidden flex items-center justify-center text-[#434842] font-label-sm text-xs font-semibold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-label-sm text-xs text-[#506050] uppercase font-semibold">
                    {review.author}
                  </p>
                  <p className="font-label-sm text-[11px] text-[#747872]">
                    {review.item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="font-label-sm text-[11px] text-[#747872]/70 tracking-widest uppercase">
          ✦ 마우스를 올리면 애니메이션이 일시 정지됩니다
        </p>
      </div>
    </section>
  );
};

