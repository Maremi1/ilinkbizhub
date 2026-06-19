import type { Entity } from "@/lib/entities";
import { motion } from "motion/react";

export function EntityCard({ entity, index = 0 }: { entity: Entity; index?: number }) {
  const isLive = entity.status === "live";
  const inner = (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className="glass group relative flex h-full flex-col rounded-2xl p-8 transition-all hover:border-gold/60"
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow">{entity.region}</span>
        <span
          className={`text-[10px] uppercase tracking-[0.24em] ${
            isLive ? "text-gold" : "text-slate"
          }`}
        >
          {isLive ? "Live" : "Coming soon"}
        </span>
      </div>
      <h3 className="mt-8 font-display text-3xl leading-tight text-ink">{entity.name}</h3>
      <p className="mt-2 font-display text-base italic text-slate">{entity.tagline}</p>
      <p className="mt-6 text-sm leading-relaxed text-ink/75">{entity.blurb}</p>
      <div className="mt-8 flex-1" />
      <div className="flex items-center justify-between pt-6">
        <span className="text-[11px] uppercase tracking-[0.24em] text-slate">
          {isLive ? "Visit subsite" : "—"}
        </span>
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
            isLive
              ? "border-ink text-ink group-hover:bg-ink group-hover:text-paper"
              : "border-hairline text-slate"
          }`}
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
      <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
    </motion.article>
  );

  if (!isLive) return <div className="cursor-not-allowed opacity-90">{inner}</div>;
  return (
    <a href={entity.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </a>
  );
}