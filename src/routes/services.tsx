import { createFileRoute } from "@tanstack/react-router";
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
    n: "01",
    t: "Global Consultancy & Corporate Advisory",
    d: "Optimising market position and operational efficiency for institutions and growth-stage businesses.",
    items: ["Business development & feasibility", "Corporate setup & restructuring (M&A, legal formation)", "Outsourcing of non-core functions", "Independent board representation", "Strategic visioning for executive leadership"],
  },
  {
    n: "02",
    t: "iLink Academy — Human Capital",
    d: "Bridging the skills gap for the Fourth Industrial Revolution through executive transformation programmes.",
    items: ["Digital transformation curricula", "Leadership & EQ for global corporate leaders", "Sales Accelerator 2026 — the modern African closer", "Training of Trainers (ToT) certification", "Specialist climate & financial inclusion modules"],
  },
  {
    n: "03",
    t: "Strategic Investment & Partnership",
    d: "Long-term value creation across equity, IP and managed assets in multiple jurisdictions.",
    items: ["Venture Capital & Private Equity in high-growth sectors", "IP & royalty portfolio management", "Funds, shares & life insurance assets", "Joint ventures & equity partnerships", "International fund investments"],
  },
  {
    n: "04",
    t: "Technology Solutions",
    d: "Proprietary marketplaces, fintech, EdTech and smart infrastructure platforms — built for emerging markets.",
    items: ["Mama Mia's Soko · manufacturer-to-consumer marketplace", "Bima Kwik · award-winning insuretech", "AI Credit Scoring & Family Banking", "Digital Vicoba microfinance", "Touchless KYC, KYU, digital onboarding", "EdTech for universities & certification bodies", "IoT for smart water & gas metering", "Cyber security systems & training"],
  },
];

function Services() {
  return (
    <div className="pt-40">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">What we do</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Four pillars. <em className="text-gold not-italic">One integrated practice.</em>
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-[1400px] px-6 md:px-10">
        <div className="divide-y divide-hairline border-y border-hairline">
          {sections.map((s) => (
            <Reveal key={s.n}>
              <div className="grid gap-10 py-16 lg:grid-cols-[120px_1fr_1.4fr]">
                <span className="font-display text-5xl text-gold">{s.n}</span>
                <div>
                  <h2 className="font-display text-3xl text-ink md:text-4xl">{s.t}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate">{s.d}</p>
                </div>
                <ul className="grid gap-2 text-sm text-ink/85">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 border-b border-hairline py-3">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}