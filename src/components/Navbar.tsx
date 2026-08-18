import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Collections', href: '#curation' },
    { name: 'Classes', href: '#classes' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit & FAQ', href: '#info' }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#fbf9f6]/95 backdrop-blur-md border-[#747872]/15 shadow-sm py-4'
            : 'bg-[#fbf9f6]/80 backdrop-blur-sm border-[#747872]/10 py-5'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-16 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="font-display-lg text-2xl md:text-[34px] tracking-[0.2em] text-[#506050] transition-opacity hover:opacity-80 font-light"
          >
            ONHWA
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 items-center uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label-sm text-xs text-[#434842] hover:text-[#506050] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#506050] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="bg-transparent text-[#506050] border border-[#506050] font-label-sm text-xs uppercase px-7 py-2.5 hover:bg-[#506050] hover:text-[#ffffff] transition-all duration-300 tracking-widest cursor-pointer active:scale-95"
            >
              Reservation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenReservation}
              className="bg-[#506050] text-[#ffffff] text-[11px] font-label-sm px-3.5 py-1.5 uppercase tracking-wider rounded-sm"
            >
              예약하기
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#434842] hover:text-[#506050] transition-colors"
              aria-label="메뉴 토글"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#fbf9f6] border-b border-[#747872]/15 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 uppercase tracking-widest text-xs font-label-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#434842] hover:text-[#506050] py-2 border-b border-[#747872]/10"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full bg-[#506050] text-white py-3 font-label-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Flower2 className="w-4 h-4" />
                  온라인 예약 & 상담
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Nav for Mobile - Exact matching the design */}
      <nav className="fixed bottom-0 w-full z-40 md:hidden bg-[#fbf9f6]/95 backdrop-blur-lg border-t border-[#747872]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          <a
            href="#"
            className="flex flex-col items-center gap-1 p-2 text-[#434842]/70 hover:text-[#506050] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-xl">home</span>
            <span className="font-label-sm text-[10px]">Home</span>
          </a>
          <a
            href="#curation"
            className="flex flex-col items-center gap-1 p-2 text-[#506050] font-semibold active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined fill text-xl">filter_list</span>
            <span className="font-label-sm text-[10px]">Curation</span>
          </a>
          <a
            href="#classes"
            className="flex flex-col items-center gap-1 p-2 text-[#434842]/70 hover:text-[#506050] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-xl">event_note</span>
            <span className="font-label-sm text-[10px]">Classes</span>
          </a>
          <button
            onClick={onOpenReservation}
            className="flex flex-col items-center gap-1 p-2 text-[#434842]/70 hover:text-[#506050] active:scale-95 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl text-[#954925]">local_florist</span>
            <span className="font-label-sm text-[10px] text-[#954925] font-semibold">Book Now</span>
          </button>
        </div>
      </nav>
    </>
  );
};
