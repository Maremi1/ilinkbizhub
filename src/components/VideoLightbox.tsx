import { AnimatePresence, motion } from "motion/react";
import { X, PlayCircle } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";

export function VideoLightbox({ url, label = "Watch the film" }: { url: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass inline-flex items-center gap-3 rounded-full px-5 py-3 text-[12px] uppercase tracking-[0.22em] text-ink transition hover:text-gold"
      >
        <PlayCircle className="h-4 w-4" />
        {label}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              className="glass-strong relative w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video w-full">
                <ReactPlayer src={url} playing controls width="100%" height="100%" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}