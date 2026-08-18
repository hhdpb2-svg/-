import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Copy, Sparkles, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'copy';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto bg-[#1b1c1a] text-[#fbf9f6] p-4 rounded-sm shadow-xl border border-white/10 flex items-start justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#b9cbb7] shrink-0 mt-0.5" />}
              {toast.type === 'copy' && <Copy className="w-5 h-5 text-[#ffdbcd] shrink-0 mt-0.5" />}
              {toast.type === 'info' && <Sparkles className="w-5 h-5 text-[#d5e7d3] shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-semibold tracking-wider font-label-sm uppercase text-[#fbf9f6]">{toast.title}</p>
                {toast.description && (
                  <p className="text-xs text-[#e4e2df] font-body-md mt-1 leading-relaxed">{toast.description}</p>
                )}
              </div>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-[#e4e2df]/60 hover:text-white transition-colors p-1"
              aria-label="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
