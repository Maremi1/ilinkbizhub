import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import foundationImg from "@/assets/foundation.jpg";

export const Route = createFileRoute("/foundation")({
  head: () => ({
    meta: [
      { title: "Mama Mia's Foundation — i Link Group" },
      { name: "description", content: "The philanthropic arm of the i Link Group — catalysing sustainable socio-economic empowerment, humanitarian support and community resilience." },
      { property: "og:title", content: "Mama Mia's Foundation" },
      { property: "og:url", content: "/foundation" },
    ],
    links: [{ rel: "canonical", href: "/foundation" }],
  }),
  component: Foundation,
});

const goals = [
  { t: "Foster Inclusion", d: "Close the gap in digital literacy and financial access for underserved individuals and SMEs." },
  { t: "Empower & Connect", d: "Create economic opportunities and market access for women and youth." },
  { t: "Promote Well-being", d: "Improve community health through affordable insurance and healthcare." },
  { t: "Drive Sustainability", d: "Champion climate-resilient practices, clean energy and carbon/energy credits." },
  { t: "Uphold Rights", d: "Conflict resolution for legal & land disputes and advocacy for women's rights." },
  { t: "Build Capacity", d: "Targeted training in leadership, critical thinking and soft skills." },
];

function Foundation() {
  return (
    <div className="pt-40">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-16 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <span className="eyebrow">Mama Mia's Foundation</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
              From profit, <span className="text-gold">to people.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate">
              Operating as an International NGO, the foundation transforms i Link's strategic
              objectives into measurable, life-changing outcomes — moving beyond charity to create
              mechanisms for sustainable socio-economic empowerment.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={foundationImg} alt="Hands holding a sapling in soil" width={1400} height={900} loading="lazy" className="h-[24rem] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Six strategic objectives</span>
          <h2 className="mt-4 font-display text-3xl text-ink md:text-5xl">Driving sustainable growth across six core fronts.</h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {goals.map((g, i) => (
            <Reveal key={g.t} delay={i * 0.05}>
              <div className="h-full bg-paper p-10 transition-colors hover:bg-gold-soft/40">
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold">0{i + 1}</span>
                <p className="mt-4 font-display text-2xl text-ink">{g.t}</p>
                <p className="mt-3 text-sm text-slate">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}