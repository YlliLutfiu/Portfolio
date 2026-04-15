"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ToastType = "success" | "error";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl ${toast.type === "success"
                ? "border-green-400/20 bg-green-950/80 text-green-200"
                : "border-red-400/20 bg-red-950/80 text-red-200"
                }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 size={18} className="shrink-0 text-green-400" />
              ) : (
                <AlertCircle size={18} className="shrink-0 text-red-400" />
              )}
              <span className="text-sm font-medium">{toast.message}</span>
              <button
                onClick={() => dismiss(toast.id)}
                className="ml-2 shrink-0 rounded-full p-1 transition hover:bg-white/10"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
