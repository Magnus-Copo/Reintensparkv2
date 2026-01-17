import { ReactNode } from "react";

interface PageHeroProps {
  kicker: string;
  title: string;
  description: string;
  highlight?: string;
  children?: ReactNode;
}

export function PageHero({
  kicker,
  title,
  description,
  highlight,
  children,
}: Readonly<PageHeroProps>) {
  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-white/10 bg-gradient-to-br from-black via-slate-950 to-black px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,255,20,0.2),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:120px_120px]" />
      </div>
      <div className="relative space-y-4 sm:space-y-6 text-white">
        <p className="pill w-fit bg-white/5 text-primary text-xs sm:text-sm">{kicker}</p>
        <h1 className="display-font text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          {title}
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed text-justify">{description}</p>
        {highlight ? (
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary/80">
            {highlight}
          </p>
        ) : null}
        {children ? <div className="pt-3 sm:pt-4">{children}</div> : null}
      </div>
    </section>
  );
}
