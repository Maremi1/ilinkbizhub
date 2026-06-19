import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { EntityCard } from "@/components/EntityCard";
import { entities } from "@/lib/entities";

export const Route = createFileRoute("/entities")({
  head: () => ({
    meta: [
      { title: "Group Entities — I Link" },
      { name: "description", content: "Explore every entity in the I Link Group — Global, International, Rwanda, Tanzania, The Founder, Ghana, Ethiopia — each with its own dedicated subsite." },
      { property: "og:title", content: "Group Entities — I Link" },
      { property: "og:url", content: "/entities" },
    ],
    links: [{ rel: "canonical", href: "/entities" }],
  }),
  component: Entities,
});

function Entities() {
  return (
    <div className="pt-40">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Group entities</span>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            One group. <em className="text-gold not-italic">Seven gateways.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate">
            Each entity operates its own brand, jurisdiction and dedicated subsite. Use this
            directory to jump straight to the one you need.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entities.map((e, i) => (
            <EntityCard key={e.slug} entity={e} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}