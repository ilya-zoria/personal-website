import { useEffect, ReactNode } from "react";
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="m-auto fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div className="w-full max-w-[1400px] max-h-full sm:max-h-[calc(100vh-2.5rem)] mx-0 sm:mx-6 overflow-auto scrollbar-hide bg-background dark:bg-background-dark border-radius-0 sm:border-radius-outside">
        <div className="sticky top-0 z-20 w-full">
          <div className="relative z-10 flex justify-between items-center p-6 sm:p-8">
            <h2>{title}</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50 backdrop-blur-md">
              <X className="h-5 w-5 text" />
            </button> 
          </div>
          <div className="h-[120px] absolute top-0 blured-header-top w-full"></div>
        </div>

        {/* Modal Content */}
        <div className="w-full flex justify-center mx-auto px-6 sm:px-8 pt-4">
          {children}
        </div>

        <div className="h-[40px] sticky bottom-0 blured-header-bottom z-50"></div>
      </div>
    </div>
  );
}
