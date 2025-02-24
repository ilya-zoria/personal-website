import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="m-auto fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div className="max-w-[1400px] max-h-[-webkit-fill-available] m-4 sm:m-6 overflow-auto scrollbar-hide bg-background dark:bg-background-dark border-radius-outside">
        <div className="sticky top-0 z-20 w-full">
          <div className="relative z-10 flex justify-between items-center pl-6 pr-6 pt-6 pb-10">
            <h2>{title}</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50">
              <X className="h-5 w-5 text" />
            </button> 
          </div>
          <div className="h-[120px] absolute top-0 blured-header-top w-full"></div>
        </div>

        {/* Modal Content */}
        <div className="w-full flex justify-center mx-auto p-8">
          {children}
        </div>

        <div className="h-[40px] sticky bottom-0 blured-header-bottom z-50"></div>
      </div>
    </div>
  )
} 