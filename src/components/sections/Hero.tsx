import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <Image src="/images/photo1.png" alt="" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 via-brand-900/30 to-brand-900" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs tracking-[0.4em] text-brand-accent uppercase">
          Studio de Lagree
        </p>

        <h1 className="font-display text-5xl leading-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl">
          Forge ton corps.
          <br />
          <span className="italic text-brand-accent">Libère ton esprit.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Une méthode exigeante, un espace pensé pour toi. Rejoins un studio où chaque séance
          sculpte le corps et apaise le mental.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#tarifs"
            className="bg-brand-accent px-8 py-4 text-sm tracking-widest text-cream uppercase transition-colors hover:bg-white hover:text-brand-900"
          >
            Réserver un cours
          </a>
          <a
            href="#disciplines"
            className="border border-cream/40 px-8 py-4 text-sm tracking-widest text-cream uppercase transition-colors hover:border-cream hover:bg-cream hover:text-brand-900"
          >
            Découvrir
          </a>
        </div>
      </div>
    </section>
  );
}
