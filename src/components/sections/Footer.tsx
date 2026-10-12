import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/logo1.png"
              alt="Origin Studio Lagree"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Studio de Pilates Lagree premium. Un espace dédié à la force, la posture et la
              sérénité.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-widest uppercase text-brand-accent">Navigation</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a href="#disciplines" className="hover:text-cream">
                  Cours
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-cream">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#fondatrice" className="hover:text-cream">
                  Notre histoire
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cream">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-widest uppercase text-brand-accent">
              Informations
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a href="/mentions-legales" className="hover:text-cream">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/politique-de-confidentialite" className="hover:text-cream">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-cream">
                  Gestion des cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Origin Studio Lagree. Tous droits réservés.</p>
          <p>
            Fait avec <span className="text-brand-accent">♥</span> par{" "}
            <a
              href="https://agence-grey.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cream"
            >
              Agence Grey
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-4 text-center text-[11px] text-cream/40">
        Ce site utilise des cookies pour améliorer votre expérience.
        <button type="button" className="ml-2 underline hover:text-cream">
          En savoir plus
        </button>
      </div>
    </footer>
  );
}
