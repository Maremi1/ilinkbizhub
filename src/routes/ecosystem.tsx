import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Diamond } from "@/components/Diamond";
import { ValueLoop } from "@/components/ValueLoop";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — The I Link Holding Architecture" },
      { name: "description", content: "Global IP holding, International strategic management, and national operating companies — engineered for scale and security." },
      { property: "og:title", content: "Ecosystem — I Link Group" },
      { property: "og:url", content: "/ecosystem" },
    ],
    links: [{ rel: "canonical", href: "/ecosystem" }],
  }),
  component: Ecosystem,
});

const tiers = [
  { t: "I Link Global", f: "IP Holding & Licensing", a: "Intangible assets — IP, Trademarks, AI", r: "Royalties & licensing fees", s: "Worldwide" },
  { t: "I Link International", f: "Strategic Management & Investment Coordination", a: "Equity (shares in subsidiaries)", r: "Dividends & management fees", s: "Continental / Regional" },
  { t: "National Operating Companies", f: "Local Execution & Service Delivery", a: "Physical assets & local contracts", r: "Direct sales, grants, trading revenue", s: "National jurisdictions" },
];

function Ecosystem() {
  return (
    <div className="pt-40">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Holding architecture</span>
          <h1 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
            Structuring a <span className="text-gold">global ecosystem.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate">
            A node-and-spoke architecture engineered for legal soundness, financial optimisation and
            infinite scale — three layers, one chain of custody.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] px-6 md:px-10">
        <Reveal><span className="eyebrow">The 3-tier diamond</span></Reveal>
        <Diamond />
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Functional diagnostic</span>
          <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">Three tiers · one chain of custody.</h2>
        </Reveal>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-y border-ink text-[11px] uppercase tracking-[0.22em] text-slate">
                <th className="py-4 pr-6"></th>
                <th className="py-4 pr-6">Primary function</th>
                <th className="py-4 pr-6">Asset ownership</th>
                <th className="py-4 pr-6">Revenue model</th>
                <th className="py-4">Scope</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((row) => (
                <tr key={row.t} className="border-b border-hairline align-top">
                  <td className="py-6 pr-6 font-display text-xl text-ink">{row.t}</td>
                  <td className="py-6 pr-6 text-slate">{row.f}</td>
                  <td className="py-6 pr-6 text-slate">{row.a}</td>
                  <td className="py-6 pr-6 text-slate">{row.r}</td>
                  <td className="py-6 text-slate">{row.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">The value creation loop</span>
          <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">Self-sustaining global growth.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">Hover or tap each phase to see how capital, IP and strategy flow between Global, International and National layers.</p>
        </Reveal>
        <div className="mt-12">
          <ValueLoop />
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
          {[
            { t: "Legally Sound", d: "Clear separation between asset ownership (Global) and operational liability (National)." },
            { t: "Financially Optimised", d: "Dual revenue streams — liquidity at the holding level, local competitiveness on the ground." },
            { t: "Infinitely Scalable", d: "Node-and-spoke onboarding of new national franchises without disrupting the core." },
          ].map((b) => (
            <div key={b.t} className="bg-paper p-10">
              <p className="font-display text-2xl text-ink">{b.t}</p>
              <p className="mt-3 text-sm text-slate">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}