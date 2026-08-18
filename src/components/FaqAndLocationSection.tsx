import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/mockData';

export const FaqAndLocationSection: React.FC = () => {
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-24" id="info">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Side: Frequently Asked Questions */}
        <div>
          <h2 className="font-display-lg text-3xl md:text-[32px] text-[#506050] mb-8 font-light">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-[#747872]/20">
            {FAQS.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div key={faq.id} className="border-b border-[#747872]/20">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center py-6 text-left hover:text-[#506050] transition-colors focus:outline-none cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <span className="font-body-md text-[15px] sm:text-[16px] text-[#1b1c1a] font-medium pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-[#747872]"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 font-body-md text-sm text-[#434842] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visit Us & Studio Details */}
        <div>
          <h2 className="font-display-lg text-3xl md:text-[32px] text-[#506050] mb-8 font-light">
            Visit Us
          </h2>

          {/* Google Maps Embed Preview */}
          <div className="w-full aspect-[4/3] sm:aspect-video mb-8 border border-[#747872]/20 rounded-xs overflow-hidden relative shadow-xs bg-[#f5f3f0]">
            <iframe
              title="ONHWA Flower Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x357cbb8a99de6f59%3A0xeef29816d3d91f51!2z7Jio7ZmU!5e0!3m2!1sko!2skr!4v1787027193698!5m2!1sko!2skr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Studio Meta List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#506050] mt-1 shrink-0" />
              <div>
                <p className="font-label-sm text-xs text-[#747872] uppercase tracking-widest mb-1 font-semibold">
                  Address
                </p>
                <p className="font-body-md text-[15px] text-[#1b1c1a]">
                  서울특별시 강남구 꽃길 123, 1층 ONHWA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#506050] mt-1 shrink-0" />
              <div>
                <p className="font-label-sm text-xs text-[#747872] uppercase tracking-widest mb-1 font-semibold">
                  Hours
                </p>
                <p className="font-body-md text-[15px] text-[#1b1c1a]">
                  Tue - Sat : 11:00 AM - 08:00 PM
                </p>
                <p className="font-body-md text-sm text-[#747872] mt-0.5">
                  Sun - Mon : Closed (사전 예약 픽업만 가능)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#506050] mt-1 shrink-0" />
              <div>
                <p className="font-label-sm text-xs text-[#747872] uppercase tracking-widest mb-1 font-semibold">
                  Contact
                </p>
                <p className="font-body-md text-[15px] text-[#1b1c1a]">
                  02. 1234. 5678
                </p>
                <p className="font-body-md text-sm text-[#747872] mt-0.5">
                  hello@onhwastudio.kr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
