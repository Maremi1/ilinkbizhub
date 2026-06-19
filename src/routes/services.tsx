import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, TrendingUp, Cpu, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — I Link Group" },
      { name: "description", content: "Consultancy, iLink Academy, Strategic Investment and proprietary Technology platforms — the four pillars of the I Link service architecture." },
      { property: "og:title", content: "Services — I Link Group" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const sections = [
  {
    n: "01", icon: Briefcase,
    t: "Global Consultancy & Corporate Advisory",
    d: "Optimising market position and operational efficiency for institutions and growth-stage businesses.",
    items: ["Business development & feasibility", "Corporate setup & restructuring (M&A, legal formation)", "Outsourcing of non-core functions", "Independent board representation", "Strategic visioning for executive leadership"],
  },
  {
    n: "02", icon: GraduationCap,
    t: "iLink Academy — Human Capital",
    d: "Bridging the skills gap for the Fourth Industrial Revolution through executive transformation programmes.",
    items: ["Digital transformation curricula", "Leadership & EQ for global corporate leaders", "Sales Accelerator 2026 — the modern African closer", "Training of Trainers (ToT) certification", "Specialist climate & financial inclusion modules"],
  },
  {
    n: "03", icon: TrendingUp,
    t: "Strategic Investment & Partnership",
    d: "Long-term value creation across equity, IP and managed assets in multiple jurisdictions.",
    items: ["Venture Capital & Private Equity in high-growth sectors", "IP & royalty portfolio management", "Funds, shares & life insurance assets", "Joint ventures & equity partnerships", "International fund investments"],
  },
  {
    n: "04", icon: Cpu,
    t: "Technology Solutions",
    d: "Proprietary marketplaces, fintech, EdTech and smart infrastructure platforms — built for emerging markets.",
    items: ["Mama Mia's Soko · manufacturer-to-consumer marketplace", "Bima Kwik · award-winning insuretech", "AI Credit Scoring & Family Banking", "Digital Vicoba microfinance", "Touchless KYC, KYU, digital onboarding", "EdTech for universities & certification bodies", "IoT for smart water & gas metering", "Cyber security systems & training"],
  },
];

function Services() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">What we do</span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl">
            Four pillars. <span className="text-gold">One integrated practice.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate">
            Consultancy, learning, capital and proprietary technology — composed into a single operating system for ambitious institutions.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-[1400px] gap-6 px-6 md:grid-cols-2 md:px-10">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.n} delay={i * 0.05}>
              <article className="glass group flex h-full flex-col rounded-2xl p-8 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{s.n}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-ink">{s.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.d}</p>
                <ul className="mt-6 grid gap-2 text-sm text-ink/90">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}