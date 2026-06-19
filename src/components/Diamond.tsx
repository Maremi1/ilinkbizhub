import { motion } from "motion/react";

// Interactive 3-tier diamond: Global → International → National
export function Diamond() {
  const tiers = [
    { id: "global", label: "i Link Global", role: "IP Holding & Licensing", w: 280 },
    { id: "intl", label: "i Link International", role: "Strategic Management", w: 420 },
    { id: "nat", label: "National Operating Companies", role: "Local Execution", w: 560 },
  ];

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-12">
      {tiers.map((t, i) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.18 }}
          whileHover={{ scale: 1.02 }}
          style={{ width: t.w, maxWidth: "100%" }}
          className="group relative cursor-default border border-hairline bg-paper px-6 py-5 text-center transition hover:border-ink"
        >
          <span className="eyebrow block">Tier {i + 1}</span>
          <p className="mt-2 font-display text-xl text-ink">{t.label}</p>
          <p className="text-xs uppercase tracking-[0.22em] text-slate">{t.role}</p>
          <span className="absolute inset-x-6 bottom-0 h-px origin-center scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
        </motion.div>
      ))}
    </div>
  );
}