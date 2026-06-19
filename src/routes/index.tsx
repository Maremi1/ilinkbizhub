import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight, Search, Handshake, ShieldCheck, Sparkles,
  Users, Globe2,
} from "lucide-react";
import { RotatingVault } from "@/components/RotatingVault";
import { Reveal } from "@/components/Reveal";
import { clusters } from "@/lib/platforms";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The I Link Ecosystem — Unified Platform Vault" },
      { name: "description", content: "Master entry point to the I Link ecosystem: Fintech, Insuretech, Real Estate, E-Commerce, Logistics, Extractives and Professional Services platforms." },
      { property: "og:title", content: "The I Link Ecosystem" },
      { property: "og:description", content: "A diversified ecosystem of high-impact proprietary platforms and sector-specific licenses." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const } },
};

function Home() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return clusters;
    return clusters
      .map((c) => ({ ...c, platforms: c.platforms.filter((p) => (p.name + " " + p.description + " " + c.title).toLowerCase().includes(q)) }))
      .filter((c) => c.platforms.length > 0);
  }, [query]);

  return (
    <div className="overflow-hidden">
      {/* HERO — THE VAULT */}
      <section className="relative isolate flex min-h-[100svh] items-center pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <RotatingVault className="absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.16_0.035_220)]" />
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
            <motion.span variants={item} className="eyebrow inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> The Vault · Unified Platform Hub
            </motion.span>
            <motion.h1 variants={item} className="mt-6 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[1.02] tracking-tight text-ink">
              The <span className="text-gold">I Link</span> Ecosystem
            </motion.h1>
            <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
              A diversified ecosystem of high-impact proprietary platforms and
              sector-specific licenses — one master entry point to every venture.
            </motion.p>

            {/* Search */}
            <motion.div variants={item} className="mx-auto mt-10 max-w-xl">
              <label className="glass-strong flex items-center gap-3 rounded-full px-5 py-3">
                <Search className="h-4 w-4 text-gold" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a company or service — try ‘insurance’ or ‘logistics’"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-slate/70 focus:outline-none"
                  aria-label="Search the I Link ecosystem"
                />
              </label>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="#platforms" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-[oklch(0.16_0.04_220)] transition hover:opacity-90">
                Explore platforms <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/ecosystem" className="glass-btn">Global Stats</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CLUSTER GRID */}
      <section id="platforms" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">License Clusters</span>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Sector-specific platforms, <span className="text-gold">one ecosystem.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate">
            Each platform is independently licensed and operated, backed by the
            shared I Link Global IP and governance framework.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {filtered.map((cluster, ci) => (
            <Reveal key={cluster.id}>
              <div>
                <div className="mb-8 flex items-baseline gap-4">
                  <span className="font-display text-5xl text-gold/70">{cluster.letter}</span>
                  <div>
                    <h3 className="font-display text-2xl text-ink md:text-3xl">{cluster.title}</h3>
                    <p className="text-sm text-slate">{cluster.subtitle}</p>
                  </div>
                </div>
                <div className={`grid gap-6 ${cluster.platforms.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {cluster.platforms.map((p, i) => (
                    <motion.article
                      key={p.name}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ type: "spring", stiffness: 80, damping: 18, delay: i * 0.08 }}
                      className="vault-card group relative overflow-hidden p-7"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-gold">Cluster {cluster.letter}</p>
                          <h4 className="mt-2 font-display text-2xl text-ink">{p.name}</h4>
                        </div>
                        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-gold transition group-hover:scale-110 group-hover:border-gold">
                          <Handshake className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate">{p.description}</p>
                      {p.badge && (
                        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold opacity-0 transition group-hover:opacity-100">
                          <ShieldCheck className="h-3 w-3" /> {p.badge}
                        </span>
                      )}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.ctas.map((c) => (
                          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="glass-btn">
                            <Handshake className="h-3 w-3" /> {c.label}
                          </a>
                        ))}
                      </div>
                      {/* inner glow */}
                      <span aria-hidden className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(60% 80% at 20% 0%, oklch(0.70 0.13 220 / 0.20), transparent 70%)" }} />
                    </motion.article>
                  ))}
                </div>
              </div>
              {ci < filtered.length - 1 && <div className="hairline mt-16" />}
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-slate">No platforms match “{query}”.</p>
          )}
        </div>
      </section>

      {/* SPECIALIZED PROGRAM HUBS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
        <span className="eyebrow">Specialized Program Hubs</span>
        <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Where the ecosystem <span className="text-gold">becomes impact.</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* FIA */}
          <Reveal>
            <motion.div
              whileHover={{ y: -6 }}
              className="vault-card relative overflow-hidden p-10"
            >
              <span aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full" style={{ background: "radial-gradient(closest-side, oklch(0.70 0.13 220 / 0.5), transparent)" }} />
              <Users className="h-8 w-8 text-gold" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold">The FIA Network</p>
              <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                Financial Inclusion Ambassador Portal
              </h3>
              <p className="mt-4 max-w-md text-sm text-slate">
                Management system for the 451+ Ambassadors driving last-mile
                financial inclusion across Rwanda and beyond.
              </p>
              <a href="https://fia.ilinkbiz.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-[oklch(0.16_0.04_220)] transition hover:opacity-90">
                <Handshake className="h-4 w-4" /> Access Management System
              </a>
            </motion.div>
          </Reveal>

          {/* Foundation */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="vault-card relative overflow-hidden p-10"
            >
              <span aria-hidden className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full" style={{ background: "radial-gradient(closest-side, oklch(0.65 0.18 145 / 0.4), transparent)" }} />
              <Globe2 className="h-8 w-8 text-gold" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold">Mama Mia's Foundation</p>
              <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                Sustainable Growth & Social Impact
              </h3>
              <p className="mt-4 max-w-md text-sm text-slate">
                An INGO redirecting a portion of group profit into mechanisms for
                socio-economic empowerment and community resilience.
              </p>
              <Link to="/foundation" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-ink transition hover:bg-white hover:text-[oklch(0.16_0.04_220)]">
                <Handshake className="h-4 w-4" /> See Global Initiatives
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* GLOBAL STATS STRIP */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
        <div className="glass-strong grid gap-10 rounded-3xl p-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "1.8M+", v: "Households reached" },
            { k: "451+", v: "FIA Ambassadors" },
            { k: "16", v: "Specialised brands" },
            { k: "5", v: "Active jurisdictions" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-4xl text-ink md:text-5xl">{s.k}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
