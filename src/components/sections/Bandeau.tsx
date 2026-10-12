const BANNER_ITEMS = [
  "banner-1",
  "banner-2",
  "banner-3",
  "banner-4",
  "banner-5",
  "banner-6",
  "banner-7",
  "banner-8",
  "banner-9",
  "banner-10",
  "banner-11",
  "banner-12",
];

export default function Bandeau() {
  return (
    <div className="bg-brand-accent py-4 overflow-hidden">
      <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
        {BANNER_ITEMS.map((item) => (
          <span
            key={item}
            className="mx-8 font-display text-xl tracking-widest text-cream uppercase md:text-2xl"
          >
            Réserve ton cours • Origin Studio Lagree •
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
