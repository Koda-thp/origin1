import Image from "next/image";
import { NAV_LINKS } from "@/data/mock";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-900/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logo1.png"
            alt="Origin Studio Lagree"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-display text-xl tracking-widest text-cream">ORIGIN</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wider text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#tarifs"
          className="border border-cream px-5 py-2 text-xs tracking-widest text-cream uppercase transition-colors hover:bg-cream hover:text-brand-900"
        >
          Réserver
        </a>
      </nav>
    </header>
  );
}
