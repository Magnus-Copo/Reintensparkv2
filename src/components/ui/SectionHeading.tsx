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
    <div className="text-center md:text-left">
      <p className="section-heading mx-auto md:mx-0 text-xs sm:text-sm">{kicker}</p>
      <h2 className="text-xl sm:text-2xl font-semibold text-white text-center md:text-left">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-white/70 text-center md:text-left md:text-justify md:mx-0 mx-auto leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
