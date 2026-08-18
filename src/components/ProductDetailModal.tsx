import React from 'react';
import { X, Sparkles, Heart, Flower2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onReserve: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onReserve
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1b1c1a]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-[#fbf9f6] w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10 border border-[#747872]/20 rounded-xs"
      >
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-[#efeeeb] overflow-hidden shrink-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#fbf9f6]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-label-sm uppercase tracking-widest text-[#506050]">
            {product.badge}
          </div>
        </div>

        {/* Right Side: Product Details & Booking */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar">
          <div>
            {/* Top Close Button */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-label-sm text-xs text-[#954925] uppercase tracking-widest font-semibold">
                  Signature Collection
                </p>
                <h3 className="font-display-lg text-2xl md:text-3xl text-[#506050] font-light mt-1">
                  {product.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-[#747872] hover:text-[#506050] transition-colors p-1"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-body-md text-sm text-[#434842] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price Table */}
            <div className="bg-[#f5f3f0] p-4 rounded-xs border border-[#c4c8c0]/40 mb-6 space-y-2 text-xs font-label-sm">
              <div className="flex justify-between items-center text-[#434842]">
                <span>Small (테이블/선물용)</span>
                <span className="font-semibold text-[#1b1c1a]">₩ {product.priceSmall.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-[#506050] font-medium border-t border-[#c4c8c0]/30 pt-1.5">
                <span>Medium (인기 시그니처)</span>
                <span className="font-semibold text-[#506050]">₩ {product.priceMedium.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-[#434842] border-t border-[#c4c8c0]/30 pt-1.5">
                <span>Grand (대형/프로포즈)</span>
                <span className="font-semibold text-[#1b1c1a]">₩ {product.priceGrand.toLocaleString()}</span>
              </div>
            </div>

            {/* Flower Composition List */}
            <div className="mb-6">
              <p className="font-label-sm text-[11px] text-[#506050] uppercase tracking-widest mb-2 font-semibold flex items-center gap-1.5">
                <Flower2 className="w-3.5 h-3.5" />
                주요 사용 꽃 & 소재
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.flowers.map((fl, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#ffffff] border border-[#c4c8c0]/50 px-2.5 py-1 rounded-full text-[#434842]"
                  >
                    {fl}
                  </span>
                ))}
              </div>
            </div>

            {/* Flower Care Guide */}
            <div className="mb-6">
              <p className="font-label-sm text-[11px] text-[#506050] uppercase tracking-widest mb-2 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                보관 & 관리 팁
              </p>
              <ul className="text-xs text-[#434842]/90 space-y-1 font-body-md list-disc list-inside">
                {product.careTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-[#747872]/15">
            <button
              onClick={() => {
                onClose();
                onReserve(product);
              }}
              className="w-full bg-[#506050] text-[#ffffff] font-label-sm text-xs uppercase py-3.5 tracking-widest hover:bg-[#3b4b3b] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              이 디자인으로 예약하기
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
