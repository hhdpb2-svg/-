import React from 'react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="w-full mt-10 bg-[#506050] text-[#ffffff] pb-20 md:pb-0">
      {/* Top Section */}
      <div className="py-20 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand Block */}
        <div className="max-w-xs">
          <span className="font-display-lg text-3xl md:text-[34px] tracking-[0.2em] block mb-6 font-light">
            ONHWA
          </span>
          <div className="font-body-md text-sm text-[#ffffff]/70 space-y-2 leading-relaxed">
            <p>서울특별시 강남구 꽃길 123, 1F</p>
            <p>Tel. 02. 1234. 5678</p>
            <p>Email. hello@onhwastudio.kr</p>
            <p className="text-xs text-[#ffffff]/50 pt-2">사업자등록번호: 123-45-67890 | 대표: 온화</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-20 font-label-sm text-xs tracking-widest uppercase">
          {/* Shop */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[#ffffff]/50 mb-2 font-semibold">Shop</p>
            <a href="#curation" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Collections
            </a>
            <a href="#classes" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Classes
            </a>
            <button
              onClick={onOpenReservation}
              className="text-left text-[#ffffff]/80 hover:text-[#ffffff] transition-colors cursor-pointer uppercase font-label-sm"
            >
              Reservation
            </button>
          </div>

          {/* About */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[#ffffff]/50 mb-2 font-semibold">About</p>
            <a href="#story" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Story
            </a>
            <a href="#message-atelier" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Journal
            </a>
            <a href="#info" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Contact
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
            <p className="text-[#ffffff]/50 mb-2 font-semibold">Legal</p>
            <a href="#" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#ffffff]/80 hover:text-[#ffffff] transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ffffff]/10 py-6 px-6 md:px-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <p className="font-body-md text-xs text-[#ffffff]/50">
          © 2024 ONHWA Flower Studio. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#ffffff]/60 hover:text-[#ffffff] transition-colors font-label-sm text-xs"
          >
            Instagram
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenReservation();
            }}
            className="text-[#ffffff]/60 hover:text-[#ffffff] transition-colors font-label-sm text-xs"
          >
            Kakao Channel
          </a>
        </div>
      </div>
    </footer>
  );
};
