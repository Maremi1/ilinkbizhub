import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/entities", label: "Entities" },
  { to: "/services", label: "Services" },
  { to: "/foundation", label: "Foundation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/80 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label="I Link home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/80 text-ink transition group-hover:border-gold group-hover:text-gold">
            <span className="font-display text-lg leading-none">i</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ink">I Link</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-slate">Group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`link-underline text-[13px] uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-ink" : "text-slate hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:info@ilinkbiz.com"
          className="hidden items-center gap-2 rounded-full border border-ink px-5 py-2 text-[12px] uppercase tracking-[0.22em] text-ink transition hover:bg-ink hover:text-paper lg:inline-flex"
        >
          Partner with us
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center border border-hairline rounded-full"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-paper">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-hairline py-3 text-sm uppercase tracking-[0.22em] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <a href="mailto:info@ilinkbiz.com" className="mt-4 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[12px] uppercase tracking-[0.22em] text-paper">
              Partner with us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}