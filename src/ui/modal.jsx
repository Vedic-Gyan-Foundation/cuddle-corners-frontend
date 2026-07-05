import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Accessible dialog: role=dialog + aria-modal, focus trap, Escape to close,
// backdrop click to close, body scroll lock, and focus restoration.
function Modal({ isOpen, onClose, title, children }) {
  const panelRef = useRef(null);
  const lastFocused = useRef(null);
  const titleId = "modal-title";

  useEffect(() => {
    if (!isOpen) return;

    lastFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = () =>
      panel
        ? [
            ...panel.querySelectorAll(
              'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
            ),
          ].filter((el) => el.offsetParent !== null)
        : [];

    // focus the first focusable element, or the panel itself
    const first = focusable()[0];
    (first || panel)?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = focusable();
        if (items.length === 0) {
          e.preventDefault();
          return;
        }
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="hide-scrollbar relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-paper px-6 pb-8 pt-6 shadow-lift outline-none sm:rounded-card sm:px-9 sm:pb-10"
      >
        <div className="sticky top-0 z-10 -mx-6 mb-2 flex items-center justify-between gap-4 bg-paper/95 px-6 py-3 backdrop-blur sm:-mx-9 sm:px-9">
          {title ? (
            <h2 id={titleId} className="font-fredoka text-2xl font-semibold text-ink sm:text-3xl">
              {title}
            </h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink-soft shadow-soft transition-colors hover:bg-primary-50 hover:text-primary-700"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

export default Modal;
