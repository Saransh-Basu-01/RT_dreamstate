type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#4cd7f6]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-black tracking-normal text-white sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 max-w-2xl leading-7 text-[#c2c6d6]">{description}</p> : null}
    </div>
  );
}
