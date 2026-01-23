interface SectionHeadingProps {
  readonly kicker: string;
  readonly title: string;
  readonly description?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
}: Readonly<SectionHeadingProps>) {
  return (
    <div className="text-center md:text-left px-2 sm:px-0">
      <p className="section-heading mx-auto md:mx-0 text-[0.65rem] sm:text-sm tracking-[0.3em] sm:tracking-[0.5em]">{kicker}</p>
      <h2 className="text-lg sm:text-2xl font-semibold text-white text-center md:text-left leading-tight mt-2">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 sm:mt-4 max-w-2xl text-[0.875rem] leading-[1.6] sm:text-base text-white/75 text-left sm:text-center md:text-left md:text-justify md:mx-0 mx-auto">{description}</p>
      ) : null}
    </div>
  );
}
