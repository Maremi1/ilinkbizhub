import { Link } from "@tanstack/react-router";
import { entities } from "@/lib/entities";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-hairline bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-3xl text-ink">i Link Group</Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate">
              A diversified holding architecture connecting global capital, proprietary IP and national execution across Africa and beyond.
            </p>
            <p className="eyebrow mt-8">Headquarters</p>
            <p className="mt-3 text-sm text-ink">Vision Arcade Executive Suites<br />KG 9 Avenue, Kigali · Rwanda</p>
            <p className="mt-3 text-sm text-slate">Operational base · Dar es Salaam, Tanzania</p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {["/about", "/ecosystem", "/services", "/foundation", "/contact"].map((to) => (
                <li key={to}>
                  <Link to={to} className="link-underline text-ink/80 hover:text-ink">
                    {to.replace("/", "").replace(/^./, (c) => c.toUpperCase()) || "Home"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Group entities</p>
            <ul className="mt-5 space-y-3 text-sm">
              {entities.filter(e => e.status === "live").map((e) => (
                <li key={e.slug}>
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ink/80 hover:text-ink">
                    {e.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li><a className="link-underline" href="mailto:info@ilinkbiz.com">info@ilinkbiz.com</a></li>
              <li>+250 793 146 087 · Rwanda</li>
              <li>+255 765 658 595 · Tanzania</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs uppercase tracking-[0.22em] text-slate md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} i Link Group. All rights reserved.</span>
          <span>Bridging capital · innovation · markets</span>
        </div>
      </div>
    </footer>
  );
}