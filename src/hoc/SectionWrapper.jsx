export default function SectionWrapper({
  id,
  children,
  title,
  className,
  ...props
}) {
  const [firstWord, secondWord] = title.split(" ");
  let classes = "section";
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <section className={classes} id={id} {...props}>
      <div className="section-title">
        <h2>
          {firstWord} <span>{secondWord}</span>
        </h2>
      </div>
      <div className={`section-center ${id}-center`}>{children}</div>
    </section>
  );
}
