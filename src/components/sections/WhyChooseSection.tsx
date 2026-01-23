import { whyChooseUs } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseSection() {
  return (
    <section className="mt-20" id="why-us">
      <div className="rounded-3xl sm:rounded-[36px] border border-primary/20 bg-black/60 p-5 sm:p-8 lg:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.7)]">
        <SectionHeading
          kicker="Why Choose Us"
          title="Engineering with a neon edge"
          description="Three pillars that power our innovation studio—each card pulses with a neon border hover to emphasize focus."
        />
        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl sm:rounded-[28px] border border-white/10 bg-card/70 p-5 sm:p-6 text-center transition hover:border-primary hover:shadow-[0_0_40px_rgba(57,255,20,0.35)] md:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">{card.title}</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/75 leading-[1.65] text-left sm:text-justify">{card.description}</p>
              <div className="mt-6 sm:mt-8 h-1 w-20 bg-gradient-to-r from-primary to-transparent transition group-hover:w-32 mx-auto md:mx-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
