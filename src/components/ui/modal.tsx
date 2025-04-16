import { useEffect, ReactNode, useState } from "react";
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  width?: string;
  showHeaderBlur?: boolean;
  showFooterBlur?: boolean;
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  width = "max-w-[1400px]",
  showHeaderBlur = true,
  showFooterBlur = true 
}: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match this with animation duration
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true)
      setTimeout(() => {
        setIsClosing(false)
        onClose();
      }, 300)
    }
  }

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex sm:items-center sm:justify-center items-end justify-center modal-overlay bg-black/25 backdrop-blur-sm ${
      isClosing ? 'animate-out fade-out duration-300' : 'animate-in fade-in duration-300'
    }`}
    onClick={handleOutsideClick}
    >
      <div className={`${width} w-full max-h-[97vh] sm:max-h-[calc(100vh-3rem)] m-3 sm:mx-6 overflow-auto scrollbar-hide bg-background dark:bg-background-dark border-radius-outside cursor-default ${
        isClosing ? 'animate-out slide-out-to-bottom-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-300'
      }`}>
        <div className="sticky top-0 z-20 w-full">
          <div className="relative z-10 flex justify-between items-center p-6 sm:p-8">
            <h2>{title}</h2>
            <button onClick={handleClose} className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50 backdrop-blur-md">
              <X className="h-5 w-5 text" />
            </button> 
          </div>
          {showHeaderBlur && <div className="h-[120px] absolute top-0 blured-header-top w-full"></div>}
        </div>

        {/* Modal Content */}
        <div className="w-full flex justify-center mx-auto px-6 sm:px-8 pt-4">
          {children}
        </div>

        {showFooterBlur && <div className="h-[40px] sticky bottom-0 blured-header-bottom z-50"></div>}
      </div>
    </div>
  );
}
