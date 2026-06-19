import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import kigaliImg from "@/assets/kigali.jpg";
import darImg from "@/assets/dar.jpg";
import handshakeImg from "@/assets/handshake.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — I Link Group" },
      { name: "description", content: "Vision, mission and philosophy of the I Link Group — institutional excellence across borders." },
      { property: "og:title", content: "About — I Link Group" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-40">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">About</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            A premier global management <span className="text-gold">& coordination firm.</span>
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <img src={handshakeImg} alt="Handshake in a refined boardroom" width={1400} height={900} loading="lazy" className="h-full max-h-[34rem] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              I Link is a diversified holding entity dedicated to catalysing sustainable economic growth and institutional excellence — a critical bridge between international capital and emerging market opportunity.
            </p>
            <div className="hairline my-10" />
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">To be the leading global hub for integrated investment and management, driving inclusive growth across both emerging and developed markets.</p>
              </div>
              <div>
                <p className="eyebrow">Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">To provide world-class strategic oversight, operational support and technical consultancy in energy, technology, education and business development.</p>
              </div>
              <div>
                <p className="eyebrow">Core philosophy</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">Institutional excellence — raising standards in every entity we touch, ensuring rigorous governance and sustainable value creation.</p>
              </div>
              <div>
                <p className="eyebrow">Trust framework</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">Financial oversight, international tax & commercial regulation, structured cross-border investment and seamless partner onboarding.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Where we operate</span>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Two anchors. One continental footprint.</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            { img: kigaliImg, city: "Kigali, Rwanda", role: "Regional Headquarters", addr: "Vision Arcade Executive Suites · KG 9 Avenue" },
            { img: darImg, city: "Dar es Salaam, Tanzania", role: "Operational Base", addr: "I Link Tanzania · Group operations" },
          ].map((c, i) => (
            <Reveal key={c.city} delay={i * 0.1}>
              <div className="group relative overflow-hidden">
                <img src={c.img} alt={c.city} width={1400} height={900} loading="lazy" className="h-[28rem] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper via-paper/60 to-transparent p-8">
                  <p className="eyebrow">{c.role}</p>
                  <p className="mt-2 font-display text-3xl text-ink">{c.city}</p>
                  <p className="mt-1 text-sm text-slate">{c.addr}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 border border-hairline p-10 lg:grid-cols-[1fr_1.4fr] lg:p-16">
          <Reveal>
            <span className="eyebrow">Founder legacy</span>
            <h2 className="mt-4 font-display text-4xl text-ink">The blueprint of tomorrow.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-slate">
              The Founder — the group's management consultancy arm — embodies the I Link ethos: how
              you structure and protect your assets today defines your legacy tomorrow. From family
              trust setup and corporate structuring to ongoing governance advisory, the practice
              gives high-net-worth families, entrepreneurs and institutions a cohesive strategy to
              <em className="text-ink not-italic"> build, protect and transition</span> wealth — the right way.
            </p>
            <a href="https://thefounder.ilinkbiz.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 link-underline text-[12px] uppercase tracking-[0.24em] text-ink">
              Visit The Founder ↗
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}