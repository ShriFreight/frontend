type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-display mt-5 text-3xl sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:mt-5 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
