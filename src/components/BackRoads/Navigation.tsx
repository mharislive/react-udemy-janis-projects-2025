type NavigationProps = React.HTMLAttributes<HTMLElement> & {};

const Navigation = ({
  className = "",
  "aria-label": ariaLabel = "main navigation",
}: NavigationProps) => {
  // better approach would be to use refs but it would be too much work for this demo app
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(`${section}-section`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`flex gap-3 justify-center ${className}`}
      aria-label={ariaLabel}
    >
      <a
        href="#"
        className="transition duration-500 hover:text-cyan-500 tracking-widest"
        onClick={(e) => handleScroll(e, "hero")}
      >
        Home
      </a>
      <a
        href="#"
        className="transition duration-500 hover:text-cyan-500 tracking-widest"
        onClick={(e) => handleScroll(e, "about")}
      >
        About
      </a>
      <a
        href="#"
        className="transition duration-500 hover:text-cyan-500 tracking-widest"
        onClick={(e) => handleScroll(e, "services")}
      >
        Services
      </a>
      <a
        href="#"
        className="transition duration-500 hover:text-cyan-500 tracking-widest"
        onClick={(e) => handleScroll(e, "tours")}
      >
        Tours
      </a>
    </nav>
  );
};

export default Navigation;
