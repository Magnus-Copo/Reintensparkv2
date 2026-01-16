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
      <p className="section-heading mx-auto md:mx-0">{kicker}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl text-center md:text-left">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg text-white/70 text-center md:text-left md:mx-0 mx-auto leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
