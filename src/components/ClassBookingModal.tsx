import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Masterclass } from '../types';

interface ClassBookingModalProps {
  masterclass: Masterclass | null;
  onClose: () => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'copy' | 'info') => void;
}

export const ClassBookingModal: React.FC<ClassBookingModalProps> = ({
  masterclass,
  onClose,
  onShowToast
}) => {
  const [participants, setParticipants] = useState<number>(1);
  const [date, setDate] = useState<string>(() => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 5);
    return nextWeek.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('오전 11:00');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);

  if (!masterclass) return null;

  const totalPrice = masterclass.price * participants;

  const handleBooking = () => {
    setIsDone(true);
    const summary = `[ONHWA 온화 클래스 수강 신청]\n• 클래스명: ${masterclass.title} (${masterclass.level})\n• 수강일시: ${date} ${timeSlot}\n• 인원: ${participants}인\n• 수강료: ₩ ${totalPrice.toLocaleString()}\n• 신청자명: ${name || '(미입력)'}\n• 연락처: ${phone || '(미입력)'}\n\n* 담당 플로리스트가 예약 확정 및 준비사항을 문자로 안내해 드립니다.`;
    navigator.clipboard.writeText(summary);
    onShowToast('클래스 예약이 신청되었습니다', '예약 내용이 복사되었습니다.', 'success');
    setTimeout(() => {
      setIsDone(false);
      onClose();
    }, 2000);
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
        className="relative bg-[#fbf9f6] w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 border border-[#747872]/20 rounded-xs"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#747872]/15 bg-[#fbf9f6]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-[10px] bg-[#506050]/10 text-[#506050] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                {masterclass.level}
              </span>
              <p className="font-label-sm text-xs text-[#747872]">ONHWA Masterclass</p>
            </div>
            <h3 className="font-display-lg text-2xl md:text-[26px] text-[#506050] font-light mt-1">
              {masterclass.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#747872] hover:text-[#506050] transition-colors p-2 cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto no-scrollbar space-y-6 flex-grow">
          <p className="font-body-md text-sm text-[#434842] leading-relaxed">
            {masterclass.description}
          </p>

          {/* Curriculum */}
          <div className="bg-[#f5f3f0] p-5 rounded-xs border border-[#c4c8c0]/40 space-y-2">
            <p className="font-label-sm text-xs text-[#506050] uppercase tracking-wider font-semibold">
              Curriculum (커리큘럼)
            </p>
            <ul className="text-xs text-[#434842] space-y-1.5 list-disc list-inside font-body-md">
              {masterclass.curriculum.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* Included Items */}
          <div>
            <p className="font-label-sm text-xs text-[#506050] uppercase tracking-wider font-semibold mb-2">
              제공 사항
            </p>
            <div className="flex flex-wrap gap-2">
              {masterclass.included.map((inc, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#ffffff] border border-[#c4c8c0]/60 px-3 py-1 rounded-full text-[#434842]"
                >
                  ✓ {inc}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Inputs */}
          <div className="border-t border-[#c4c8c0]/30 pt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#506050]" />
                  Class Date (희망 수강일)
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#506050]" />
                  Time Slot (시간대)
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
                >
                  <option value="오전 11:00">오전 11:00</option>
                  <option value="오후 02:30">오후 02:30</option>
                  <option value="오후 06:00">오후 06:00 (야간 클래스)</option>
                </select>
              </div>
            </div>

            {/* Participants & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#506050]" />
                  인원 (최대 4인)
                </label>
                <select
                  value={participants}
                  onChange={(e) => setParticipants(Number(e.target.value))}
                  className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
                >
                  <option value={1}>1인 (1:1 프라이빗)</option>
                  <option value={2}>2인 (커플/친구)</option>
                  <option value={3}>3인 (그룹)</option>
                  <option value={4}>4인 (단체)</option>
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold">
                  신청자 성함
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs text-[#434842] mb-2 uppercase tracking-widest font-semibold">
                  연락처
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-1234-5678"
                  className="w-full bg-transparent border-b border-[#747872]/40 py-2 focus:border-[#506050] font-body-md text-[#1b1c1a] outline-none text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Price */}
        <div className="p-6 md:p-8 border-t border-[#747872]/15 bg-[#f5f3f0]/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-xs text-[#747872] block">총 수강 금액 ({participants}인)</span>
            <span className="font-display-lg text-2xl text-[#506050] font-semibold">
              ₩ {totalPrice.toLocaleString()}
            </span>
          </div>

          <button
            onClick={handleBooking}
            disabled={isDone}
            className="w-full sm:w-auto bg-[#506050] text-[#ffffff] font-label-sm text-xs uppercase px-10 py-3.5 tracking-widest hover:bg-[#3b4b3b] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            {isDone ? (
              <>
                <Check className="w-4 h-4" />
                신청 완료
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                클래스 예약 확정하기
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
