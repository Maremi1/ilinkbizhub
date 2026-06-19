import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — I Link Group" },
      { name: "description", content: "Reach the I Link Group head offices in Kigali and Dar es Salaam, or contact the right entity directly." },
      { property: "og:title", content: "Contact — I Link Group" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const offices = [
  { city: "Kigali · Rwanda", role: "Regional Headquarters", addr: "Vision Arcade Executive Suites\nKG 379 and KG 9 Avenue, Kigali", phone: "+250 793 146 087" },
  { city: "Dar es Salaam · Tanzania", role: "Operational Base", addr: "I Link Tanzania\nDar es Salaam", phone: "+255 765 658 595" },
];

function Contact() {
  return (
    <div className="pt-40">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Let's build the <span className="text-gold">future, together.</span>
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-10">
              {offices.map((o) => (
                <div key={o.city} className="border-l-2 border-gold pl-6">
                  <p className="eyebrow">{o.role}</p>
                  <p className="mt-2 font-display text-2xl text-ink">{o.city}</p>
                  <p className="mt-2 whitespace-pre-line text-sm text-slate">{o.addr}</p>
                  <p className="mt-2 text-sm text-ink">{o.phone}</p>
                </div>
              ))}
              <div className="border-l-2 border-ink pl-6">
                <p className="eyebrow">Email</p>
                <a href="mailto:info@ilinkbiz.com" className="mt-2 link-underline font-display text-2xl text-ink">info@ilinkbiz.com</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="border border-hairline p-8 md:p-10"
              action="mailto:info@ilinkbiz.com"
              method="post"
              encType="text/plain"
            >
              <p className="eyebrow">Send a message</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field label="Full name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" />
                <Field label="Country" name="country" />
              </div>
              <Field label="What would you like to discuss?" name="message" textarea />
              <button type="submit" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-[12px] uppercase tracking-[0.24em] text-paper transition hover:bg-ink/85">
                Send enquiry →
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const id = `f-${name}`;
  return (
    <label htmlFor={id} className={`block ${textarea ? "mt-6 sm:col-span-2" : ""}`}>
      <span className="text-[10px] uppercase tracking-[0.24em] text-slate">{label}</span>
      {textarea ? (
        <textarea id={id} name={name} rows={5} className="mt-2 block w-full border-b border-hairline bg-transparent py-3 text-sm text-ink focus:border-ink focus:outline-none" />
      ) : (
        <input id={id} name={name} type={type} className="mt-2 block w-full border-b border-hairline bg-transparent py-3 text-sm text-ink focus:border-ink focus:outline-none" />
      )}
    </label>
  );
}