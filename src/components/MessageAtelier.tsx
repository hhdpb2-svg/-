import React, { useState } from 'react';
import { Sparkles, Copy, Check, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MessageAtelierProps {
  onUseMessageInReservation: (message: string) => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'copy' | 'info') => void;
}

export const MessageAtelier: React.FC<MessageAtelierProps> = ({
  onUseMessageInReservation,
  onShowToast
}) => {
  const [target, setTarget] = useState('연인');
  const [occasion, setOccasion] = useState('축하');
  const [tone, setTone] = useState('다정한');
  const [customKeyword, setCustomKeyword] = useState('');
  const [generatedMessages, setGeneratedMessages] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    const messages: string[] = [];

    if (target === '연인') {
      if (occasion === '축하' || occasion === '기념일') {
        if (tone === '시적인') {
          messages.push(
            `"계절이 몇 번을 바뀌어도 늘 내 곁에서 가장 따스한 봄이 되어준 당신.\n오늘 당신의 찬란한 순간을 온 마음으로 축하해요. 늘 사랑합니다."`
          );
          messages.push(
            `"꽃잎 하나하나에 당신을 향한 설렘을 담았습니다.\n당신과 함께 걷는 모든 날들이 나에게는 기적이에요. 언제나 곁에 머물게요."`
          );
        } else if (tone === '정중한') {
          messages.push(
            `"소중한 당신의 특별한 날을 진심으로 축하드립니다.\n앞으로도 서로의 가장 든든한 온기가 되어주길 소망합니다."`
          );
          messages.push(
            `"빛나는 오늘처럼, 우리 함께할 내일도 늘 아름다운 향기로 가득하기를 바랍니다."`
          );
        } else {
          messages.push(
            `"나의 소중한 연인에게,\n당신의 특별한 날을 진심으로 축하해요. 이 온화한 꽃들이 내 마음을 대신 전해주길. 늘 고맙고 사랑해!"`
          );
          messages.push(
            `"세상에서 가장 예쁜 꽃보다 더 아름다운 내 사랑.\n늘 고맙고, 오늘 하루는 그 누구보다 행복하게 보내길 바라."`
          );
        }
      } else if (occasion === '감사') {
        messages.push(
          `"내 곁에 있어 주는 것만으로도 언제나 큰 힘이 되는 사람.\n말로는 다 전하지 못한 고마운 마음을 이 꽃과 함께 전해요."`
        );
        messages.push(
          `"바쁜 일상 속에서도 늘 나를 먼저 배려해주는 당신,\n당신의 따스함에 감사하며 언제나 같은 자리에서 사랑할게요."`
        );
      } else {
        // 위로
        messages.push(
          `"지치고 힘든 하루 끝에 이 꽃 한 송이가 작은 쉼표가 되어주길 바라요.\n당신은 그 자체로 충분히 빛나고 소중한 사람입니다."`
        );
        messages.push(
          `"비 온 뒤에 땅이 굳고 꽃이 더 짙게 피어나듯, 오늘의 무게도 곧 아름답게 피어날 거예요. 늘 네 편이야."`
        );
      }
    } else if (target === '부모님') {
      if (occasion === '감사' || occasion === '기념일') {
        if (tone === '시적인') {
          messages.push(
            `"자식이라는 이름 아래 묵묵히 받아온 깊고 넓은 사랑.\n부모님의 따스한 손길 덕분에 오늘도 온화하게 자라납니다. 존경하고 사랑합니다."`
          );
          messages.push(
            `"언제나 기댈 수 있는 그늘이 되어주신 어머니, 아버지.\n그 은혜에 깊이 감사드리며, 늘 건강하시길 두 손 모아 기도합니다."`
          );
        } else {
          messages.push(
            `"언제나 한결같은 사랑과 헌신으로 키워주신 은혜에 깊이 감사드립니다.\n어머니 아버지의 삶이 이 꽃처럼 늘 환하고 건강하시길 바랍니다."`
          );
          messages.push(
            `"결혼기념일을 진심으로 축하드립니다.\n두 분이 걸어오신 따스한 시간처럼 앞으로의 날들도 행복과 건강이 가득하시길 소망합니다."`
          );
        }
      } else {
        messages.push(
          `"사랑하는 어머니, 아버지. 늘 저희를 위해 애써주셔서 감사합니다.\n작은 꽃다발이지만 감사의 마음이 전해지길 바라며, 건강하세요!"`
        );
        messages.push(
          `"부모님의 미소가 저희 가족의 가장 큰 행복입니다. 늘 사랑합니다."`
        );
      }
    } else {
      // 친구 / 동료
      if (occasion === '축하') {
        messages.push(
          `"네가 오랜 시간 쏟아부은 정성과 노력이 이렇게 결실을 맺는구나!\n새로운 시작을 진심으로 축하하며, 꽃길만 걷자!"`
        );
        messages.push(
          `"이 아름다운 꽃들의 향기처럼 당신의 앞날도 환하게 빛나길 바라요.\n언제나 진심으로 응원합니다."`
        );
      } else {
        messages.push(
          `"늘 든든한 힘이 되어주는 소중한 친구에게,\n고마운 마음을 가득 담아 보냅니다. 오늘 하루도 가장 향기로운 날이 되길!"`
        );
        messages.push(
          `"잠시 바쁜 걸음을 멈추고 꽃을 보며 숨을 고르는 여유가 함께하길 바라."`
        );
      }
    }

    if (customKeyword.trim()) {
      messages[0] = messages[0].replace('꽃', `${customKeyword}과 꽃`);
    }

    setGeneratedMessages(messages);
    onShowToast('문구가 제안되었습니다', '마음에 드는 문구를 복사하거나 예약 카드에 적용해보세요.', 'info');
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/^"|"$/g, ''));
    setCopiedIndex(index);
    onShowToast('클립보드에 복사되었습니다', '메시지 카드가 복사되었습니다.', 'copy');
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-20" id="message-atelier">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-xl mx-auto">
        <p className="font-label-sm text-xs text-[#506050] uppercase tracking-widest mb-4 font-semibold">
          Our Service
        </p>
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-[40px] text-[#506050] mb-4 font-light">
          Message Atelier
        </h2>
        <p className="font-body-md text-sm text-[#434842]/85 leading-relaxed">
          꽃과 함께 전할 적절한 말을 찾기 어렵다면, 온화의 에디터가 정성 어린 문구를 제안해 드립니다.
        </p>
      </div>

      {/* Control Selectors */}
      <div className="space-y-10 max-w-2xl mx-auto bg-[#fbf9f6] p-8 md:p-10 border border-[#c4c8c0]/40 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Target */}
          <div>
            <label className="block font-label-sm text-[10px] text-[#434842] mb-3 uppercase tracking-widest font-semibold">
              To Whom (받는 분)
            </label>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full bg-transparent border-b border-[#747872]/30 py-2 focus:border-[#506050] font-body-md text-[#506050] outline-none cursor-pointer text-sm font-medium"
            >
              <option value="연인">연인에게</option>
              <option value="부모님">부모님께</option>
              <option value="친구">친구 / 동료에게</option>
            </select>
          </div>

          {/* Occasion */}
          <div>
            <label className="block font-label-sm text-[10px] text-[#434842] mb-3 uppercase tracking-widest font-semibold">
              Occasion (상황)
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full bg-transparent border-b border-[#747872]/30 py-2 focus:border-[#506050] font-body-md text-[#506050] outline-none cursor-pointer text-sm font-medium"
            >
              <option value="축하">축하할 때 (생일/승진)</option>
              <option value="감사">감사할 때 (어버이날/스승)</option>
              <option value="기념일">기념일 / 프로포즈</option>
              <option value="위로">위로 / 응원이 필요할 때</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block font-label-sm text-[10px] text-[#434842] mb-3 uppercase tracking-widest font-semibold">
              Tone (문체)
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-transparent border-b border-[#747872]/30 py-2 focus:border-[#506050] font-body-md text-[#506050] outline-none cursor-pointer text-sm font-medium"
            >
              <option value="다정한">다정하게</option>
              <option value="정중한">정중하고 우아하게</option>
              <option value="시적인">시적이고 감성적인</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleGenerate}
            className="bg-[#506050] text-[#ffffff] font-label-sm text-xs uppercase px-12 py-4 tracking-[0.2em] hover:bg-[#3b4b3b] transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            Generate Message
          </button>
        </div>

        {/* Results Stream */}
        <AnimatePresence>
          {generatedMessages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 space-y-6 pt-6 border-t border-[#c4c8c0]/30"
            >
              <p className="font-label-sm text-[11px] text-[#747872] uppercase tracking-widest text-center">
                Recommended Card Messages
              </p>

              {generatedMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#f5f3f0] p-6 sm:p-8 border border-[#c4c8c0]/50 relative group hover:border-[#506050]/60 transition-all rounded-xs"
                >
                  <p className="font-display-lg text-[17px] sm:text-[19px] text-[#506050] italic leading-relaxed font-light whitespace-pre-line">
                    {msg}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#c4c8c0]/30 flex flex-wrap items-center justify-end gap-3">
                    <button
                      onClick={() => handleCopy(msg, idx)}
                      className="text-xs font-label-sm text-[#434842] hover:text-[#506050] flex items-center gap-1.5 px-3 py-1.5 border border-[#c4c8c0]/40 rounded-xs bg-[#fbf9f6] transition-colors"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-700" />
                          <span className="text-green-700">복사 완료</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>문구 복사</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        onUseMessageInReservation(msg.replace(/^"|"$/g, ''));
                        onShowToast('예약 카드에 담겼습니다', '예약 양식으로 이동합니다.', 'success');
                      }}
                      className="text-xs font-label-sm bg-[#506050] text-[#ffffff] hover:bg-[#3b4b3b] flex items-center gap-1.5 px-4 py-1.5 rounded-xs transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>예약 카드에 담기</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
