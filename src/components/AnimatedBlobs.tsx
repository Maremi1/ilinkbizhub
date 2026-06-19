import { motion } from "motion/react";

const blobs = [
  { cls: "left-[-10%] top-[8%] h-[28rem] w-[28rem] bg-[oklch(0.78_0.16_232)]", d: 22, x: 40, y: 30 },
  { cls: "right-[-8%] top-[38%] h-[34rem] w-[34rem] bg-[oklch(0.72_0.18_252)]", d: 28, x: -50, y: 40 },
  { cls: "left-[18%] bottom-[-12%] h-[26rem] w-[26rem] bg-[oklch(0.85_0.1_220)]", d: 26, x: 30, y: -50 },
];

export function AnimatedBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.span
          key={i}
          className={`blob absolute ${b.cls}`}
          animate={{ x: [0, b.x, 0], y: [0, b.y, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}