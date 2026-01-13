import { milestones } from "@/data/content";

export function MilestonesSection() {
  return (
    <section className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-black via-slate-950 to-black p-10 text-center">
      <p className="section-heading">Milestones</p>
      <h2 className="text-4xl font-semibold text-white">
        Numbers that define our momentum
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((item) => (
          <div
            key={item.label}
            className="rounded-[28px] border border-white/10 bg-black/40 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
          >
            <p className="text-4xl font-semibold text-primary">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.4em] text-white/60">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
