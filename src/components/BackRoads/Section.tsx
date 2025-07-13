type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  title?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

const Section = (props: SectionProps) => {
  const { children, title, className = "", as: Component = "section", id="" } = props;
  let formattedTitle: React.ReactNode = null;

  if (title) {
    const [first, ...rest] = title.trim().split(/\s+/);
    formattedTitle = (
      <h2 className="text-4xl font-bold text-center uppercase tracking-widest mb-16">
        {first}
        {rest.length > 0 && (
          <>
            {" "}
            <span className="text-cyan-500">{rest.join(" ")}</span>
          </>
        )}
      </h2>
    );
  }

  return (
    <Component className={`py-20 ${className}`} id={id}>
      {formattedTitle}
      {children}
    </Component>
  );
};

export default Section;
