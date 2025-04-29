import { p } from "framer-motion/client";

// src/ui/modal.jsx
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; // don't render modal if not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="hide-scrollbar relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white px-10 pb-10 shadow-lg">
        {!title ? (
          // Close Button
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-2xl text-gray-700 hover:text-tertiary-300"
          >
            ✕
          </button>
        ) : (
          <div className="my-9 flex justify-between">
            <h2 className="font-robotoSlab text-4xl">{title}</h2>
            <button
              onClick={onClose}
              className="self-start text-xl text-gray-700 hover:text-tertiary-300"
            >
              ✕
            </button>
          </div>
        )}

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
