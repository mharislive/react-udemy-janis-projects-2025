import Container from "./Container";
import main from "../../assets/backroads/main.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      aria-label="Continue exploring"
      className="bg-gradient-to-b from-cyan-600/70 to-gray-500/70 bg-cover bg-center h-dvh relative overflow-hidden flex items-center justify-center"
    >
      <img
        src={main}
        alt="Hero"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-auto h-full md:h-auto md:w-full -z-10"
      />
      <Container>
        <div className="flex flex-col gap-3 items-center text-white tracking-widest text-center">
          <h1 className="text-6xl uppercase font-bold">continue exploring</h1>
          <p className="max-w-[720px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a
            href="#"
            className="text-xl px-6 py-3 text-cyan-500 hover:text-white bg-white hover:bg-transparent border border-white uppercase transition duration-500"
          >
            explore tours
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
