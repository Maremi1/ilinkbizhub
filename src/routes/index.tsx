import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import { ArrowRight, Compass, Globe2, Building2, Sparkles } from "lucide-react";
import { AnimatedMap } from "@/components/AnimatedMap";
import { EntityCard } from "@/components/EntityCard";
import { Reveal } from "@/components/Reveal";
import { entities } from "@/lib/entities";
import foundationImg from "@/assets/foundation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I Link Group — Bridging Capital, Innovation and Global Markets" },
      { name: "description", content: "The corporate home of the I Link Group — Global, International, Rwanda, Tanzania, The Founder and Mama Mia's Foundation in one place." },
      { property: "og:title", content: "I Link Group" },
      { property: "og:description", content: "Bridging capital, innovation and global market opportunities. Explore the group's entities and their dedicated subsites." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { n: "01", t: "Global Consultancy", d: "Business development, corporate restructuring, M&A and board representation.", icon: Globe2 },
  { n: "02", t: "iLink Academy", d: "Executive training in digital transformation, leadership and advanced sales.", icon: Compass },
  { n: "03", t: "Strategic Investment", d: "Venture capital, private equity, IP & royalty management across jurisdictions.", icon: Building2 },
  { n: "04", t: "Technology Solutions", d: "Fintech, EdTech, Smart Infrastructure, KYC and cybersecurity platforms.", icon: Sparkles },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const } },
};

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <AnimatedMap className="h-full w-full opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/30 to-paper" />
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
            <motion.span variants={item} className="eyebrow inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> I Link Group · Est. Africa & Beyond
            </motion.span>
            <motion.h1 variants={item} className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[1.02] tracking-tight text-ink">
              Bridging capital, innovation
              <br />
              and <span className="text-gold">global markets.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-8 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
              A diversified holding architecture — Global IP, International management,
              and national operating companies across Rwanda, Tanzania, Ghana and Ethiopia,
              each with its own dedicated subsite.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/entities" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.24em] text-[oklch(0.16_0.045_252)] transition hover:opacity-90">
                Meet the entities <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ecosystem" className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-[12px] uppercase tracking-[0.24em] text-ink transition hover:text-gold">
                Explore the architecture
              </Link>
            </motion.div>
          </motion.div>

          <div className="mt-24 grid max-w-4xl grid-cols-2 gap-10 sm:grid-cols-4">
            {[
              { k: "5+", v: "Group entities" },
              { k: "1.8M+", v: "Households reached" },
              { k: "16", v: "Specialised brands" },
              { k: "2", v: "HQs · Kigali · Dar" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 0.08}>
                <div>
                  <p className="font-display text-4xl text-ink">{s.k}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <span className="eyebrow">Our philosophy</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl leading-snug text-ink md:text-5xl">
              We are committed to <span className="text-gold">institutional excellence</span> —
              raising standards in every entity we touch and engineering sustainable value across borders.
            </p>
            <div className="hairline mt-12" />
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                { t: "Vision", d: "The leading global hub for integrated investment and management." },
                { t: "Mission", d: "World-class strategic oversight, operational support and technical consultancy." },
                { t: "Reach", d: "From Kigali and Dar es Salaam, across Africa, into global capital markets." },
              ].map((b) => (
                <div key={b.t}>
                  <p className="eyebrow">{b.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{b.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENTITIES */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">The Group</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-ink md:text-6xl">
              One architecture. <span className="text-gold">Many gateways.</span>
            </h2>
          </div>
          <Link to="/entities" className="hidden link-underline text-[12px] uppercase tracking-[0.24em] text-ink sm:inline-block">
            All entities →
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entities.slice(0, 5).map((e, i) => (
            <EntityCard key={e.slug} entity={e} index={i} />
          ))}
          <Link
            to="/entities"
            className="group flex flex-col items-start justify-center border border-dashed border-hairline p-8 text-ink transition hover:border-ink"
          >
            <span className="eyebrow">+ More</span>
            <p className="mt-6 font-display text-3xl">Ghana & Ethiopia</p>
            <p className="mt-2 text-sm text-slate">National nodes coming online — see the full map.</p>
            <span className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink transition group-hover:bg-ink group-hover:text-paper">→</span>
          </Link>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-hairline bg-paper py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <span className="eyebrow">Four strategic pillars</span>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">An integrated ecosystem.</h2>
            </Reveal>
            <div className="grid gap-px bg-hairline sm:grid-cols-2">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                <Reveal key={p.n} delay={i * 0.08}>
                  <div className="glass group h-full rounded-2xl p-8 transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-gold">{p.n}</span>
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <p className="mt-4 font-display text-2xl text-ink">{p.t}</p>
                    <p className="mt-3 text-sm text-slate">{p.d}</p>
                  </div>
                </Reveal>
              );})}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION CTA */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden">
              <motion.img
                src={foundationImg}
                alt="Hands holding a young plant in soil"
                loading="lazy"
                width={1400}
                height={900}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
                className="h-[28rem] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Mama Mia's Foundation</span>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              Profit, redirected toward <span className="text-gold">people.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate">
              I Link directs a portion of profits to our philanthropic arm — moving beyond
              charity to create mechanisms for sustainable socio-economic empowerment, humanitarian
              support and community resilience.
            </p>
            <Link to="/foundation" className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-[12px] uppercase tracking-[0.24em] text-ink transition hover:bg-ink hover:text-paper">
              Visit the foundation →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
