import React, { useState, useEffect } from 'react';
import { X, Copy, MessageSquare, Check, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
  initialMessage?: string;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'copy' | 'info') => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialMessage,
  onShowToast
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    initialProduct ? initialProduct.name : PRODUCTS[0].name
  );
  const [size, setSize] = useState<'Small' | 'Medium' | 'Grand'>('Medium');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [pickupDate, setPickupDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState<string>('14:00');
  const [cardMessage, setCardMessage] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [senderPhone, setSenderPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct.name);
    }
  }, [initialProduct]);

  useEffect(() => {
    if (initialMessage) {
      setCardMessage(initialMessage);
    }
  }, [initialMessage]);

  if (!isOpen) return null;

  const currentProductObj = PRODUCTS.find((p) => p.name === selectedProduct) || PRODUCTS[0];

  const getPrice = () => {
    if (size === 'Small') return currentProductObj.priceSmall;
    if (size === 'Grand') return currentProductObj.priceGrand;
    return currentProductObj.priceMedium;
  };

  const formattedPrice = `₩ ${getPrice().toLocaleString()}`;

  const getOrderSummaryText = () => {
    return `[ONHWA 온화 스튜디오 주문/예약 신청]\n\n• 상품명: ${selectedProduct}\n• 사이즈: ${size} (${formattedPrice})\n• 수령방식: ${orderType === 'pickup' ? '매장 픽업' : '차량 퀵 배송'}\n• 픽업/배송일: ${pickupDate} ${pickupTime}\n• 주문자명: ${senderName || '(미입력)'}\n• 연락처: ${senderPhone || '(미입력)'}${orderType === 'delivery' ? `\n• 배송지: ${address || '(미입력)'}` : ''}\n• 카드 메시지: ${cardMessage || '(없음)'}\n\n* 예약 안내 및 결제 링크 발송을 위해 스튜디오에서 순차적으로 확인 후 연락드립니다.`;
  };

  const handleCopyOrder = () => {
    const text = getOrderSummaryText();
    navigator.clipboard.writeText(text);
    onShowToast('예약 정보가 복사되었습니다', '카카오톡 상담창에 붙여넣어 문의해주세요.', 'copy');
  };

  const handleKakaoReservation = () => {
    setSubmitted(true);
    const text = getOrderSummaryText();
    navigator.clipboard.writeText(text);
    onShowToast('예약 신청이 접수되었습니다', '주문서가 복사되었으며, 온화 카카오톡 상담 채널로 연결됩니다.', 'success');
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1b1c1a]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-[#fbf9f6] w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 border border-[#747872]/20"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#747872]/15 bg-[#fbf9f6]">
          <div>
            <h3 className="font-display-lg text-2xl md:text-[28px] text-[#506050] font-light">
              Reservation
            </h3>
            <p className="font-body-md text-xs text-[#747872] mt-0.5">
              온화 시그니처 플라워 맞춤 예약
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#747872] hover:text-[#506050] transition-colors p-2 cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto no-scrollbar space-y-8 flex-grow">
          {/* Product Selection */}
          <div>
            <label className="block font-label-sm text-xs text-[#434842] mb-3 uppercase tracking-widest font-semibold">
              Select Design (디자인 선택)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PRODUCTS.map((prod) => (
                <button
                  type="button"
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod.name)}
                  className={`p-3 text-left border rounded-xs transition-all cursor-pointer ${
                    selectedProduct === prod.name
                      ? 'border-[#506050] bg-[#506050]/5 text-[#506050]'
                      : 'border-[#c4c8c0]/50 hover:border-[#506050]/60 text-[#434842]'
                  }`}
                >
                  <p className="font-display-lg text-sm font-medium">{prod.name}</p>
                  <p className="text-[11px] text-[#747872] truncate">{prod.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="font-label-sm text-xs text-[#434842] uppercase tracking-widest font-semibold">
                Select Size (사이즈 선택)
              </label>
              <span className="font-label-sm text-xs text-[#954925] font-semibold">
                선택 금액: {formattedPrice}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Small */}
              <button
                type="button"
                onClick={() => setSize('Small')}
                className={`p-4 sm:p-5 text-center transition-all cursor-pointer border rounded-xs ${
                  size === 'Small'
                    ? 'border-[#506050] bg-[#506050]/8 text-[#506050] shadow-xs'
                    : 'border-[#c4c8c0]/50 hover:border-[#506050]/60'
                }`}
              >
                <div className="font-label-sm text-xs mb-1 uppercase tracking-wider font-semibold">
                  Small
                </div>
                <div className="font-body-md text-xs sm:text-sm text-[#434842]">
                  ₩ {currentProductObj.priceSmall.toLocaleString()}
                </div>
                <div className="text-[10px] text-[#747872] mt-1">테이블/선물용</div>
              </button>

              {/* Medium */}
              <button
                type="button"
                onClick={() => setSize('Medium')}
                className={`p-4 sm:p-5 text-center transition-all cursor-pointer border rounded-xs ${
                  size === 'Medium'
                    ? 'border-[#506050] bg-[#506050]/8 text-[#506050] shadow-xs'
                    : 'border-[#c4c8c0]/50 hover:border-[#506050]/60'
                }`}
              >
                <div className="font-label-sm text-xs mb-1 uppercase tracking-wider font-semibold">
                  Medium
                </div>
                <div className="font-body-md text-xs sm:text-sm text-[#434842]">
                  ₩ {currentProductObj.priceMedium.toLocaleString()}
                </div>
                <div className="text-[10px] text-[#747872] mt-1">인기 시그니처</div>
              </button>

              {/* Grand */}
              <button
                type="button"
                onClick={() => setSize('Grand')}
                className={`p-4 sm:p-5 text-center transition-all cursor-pointer border rounded-xs ${
                  size === 'Grand'
                    ? 'border-[#506050] bg-[#506050]/8 text-[#506050] shadow-xs'
                    : 'border-[#c4c8c0]/50 hover:border-[#506050]/60'
                }`}
              >
                <div className="font-label-sm text-xs mb-1 uppercase tracking-wider font-semibold">
                  Grand
                </div>
                <div className="font-body-md text-xs sm:text-sm text-[#434842]">
                  ₩ {currentProductObj.priceGrand.toLocaleString()}
                </div>
                <div className="text-[10px] text-[#747872] mt-1">대형/프로포즈</div>
              </button>
            </div>
          </div>

          {/* Pickup vs Delivery */}
          <div>
            <label className="block font-label-sm text-xs text-[#434842] mb-3 uppercase tracking-widest font-semibold">
              Fulfillment Type (수령 방식)
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`p-3 text-center border rounded-xs text-xs font-label-sm uppercase tracking-wider cursor-pointer ${
                  orderType === 'pickup'
                    ? 'border-[#506050] bg-[#506050]/8 text-[#506050] font-semibold'
                    : 'border-[#c4c8c0]/50 text-[#747872]'
                }`}
              >
                스튜디오 직접 픽업
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`p-3 text-center border rounded-xs text-xs font-label-sm uppercase tracking-wider cursor-pointer ${
                  orderType === 'delivery'
                    ? 'border-[#506050] bg-[#506050]/8 text-[#506050] font-semibold'
                    : 'border-[#c4c8c0]/50 text-[#747872]'
                }`}
              >
                차량 퀵 배송 (서울/경기)
              </button>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#506050]" />
                Pickup/Delivery Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
              />
            </div>
            <div>
              <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#506050]" />
                Preferred Time
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
              />
            </div>
          </div>

          {/* Delivery Address (if selected) */}
          {orderType === 'delivery' && (
            <div className="animate-in fade-in duration-300">
              <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#506050]" />
                Delivery Address (배송 주소)
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="상세 주소 및 수령인 연락처를 입력해주세요."
                className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
              />
            </div>
          )}

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold">
                Customer Name (예약자명)
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="홍길동"
                className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
              />
            </div>
            <div>
              <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold">
                Contact Phone (연락처)
              </label>
              <input
                type="tel"
                value={senderPhone}
                onChange={(e) => setSenderPhone(e.target.value)}
                placeholder="010-1234-5678"
                className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
              />
            </div>
          </div>

          {/* Card Message */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-label-sm text-xs text-[#434842] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#506050]" />
                Card Message (무료 캘리그라피 카드)
              </label>
              <span className="text-[11px] text-[#747872]">
                {cardMessage.length}/100자
              </span>
            </div>
            <textarea
              value={cardMessage}
              onChange={(e) => setCardMessage(e.target.value)}
              maxLength={100}
              placeholder="꽃과 함께 동봉될 메시지를 입력해주세요. (Message Atelier에서 추천받은 문구를 사용할 수 있습니다)"
              className="w-full bg-[#ffffff] border border-[#c4c8c0]/60 p-3.5 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none resize-none h-24 text-sm rounded-xs shadow-xs"
            />
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 md:p-8 border-t border-[#747872]/15 bg-[#f5f3f0]/60 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleCopyOrder}
            className="flex-1 border border-[#506050] text-[#506050] font-label-sm text-xs uppercase py-3.5 tracking-widest hover:bg-[#506050]/5 transition-colors flex justify-center items-center gap-2 cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            주문서 복사하기
          </button>

          <button
            type="button"
            onClick={handleKakaoReservation}
            disabled={submitted}
            className="flex-1 bg-[#FEE500] text-[#191919] font-label-sm text-xs uppercase py-3.5 tracking-widest hover:opacity-90 transition-opacity flex justify-center items-center gap-2 cursor-pointer font-semibold shadow-xs"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span>접수 완료</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                <span>카카오톡으로 예약 접수</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
