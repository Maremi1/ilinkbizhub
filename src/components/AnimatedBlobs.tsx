import { motion } from "motion/react";

const blobs = [
  { cls: "left-[-12%] top-[6%] h-[32rem] w-[32rem] bg-[oklch(0.55_0.13_220)]", d: 22, x: 40, y: 30 },
  { cls: "right-[-10%] top-[36%] h-[36rem] w-[36rem] bg-[oklch(0.40_0.12_235)]", d: 28, x: -50, y: 40 },
  { cls: "left-[20%] bottom-[-14%] h-[28rem] w-[28rem] bg-[oklch(0.60_0.14_215)]", d: 26, x: 30, y: -50 },
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