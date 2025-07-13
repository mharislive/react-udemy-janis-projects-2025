import Container from "./Container";
import Section from "./Section";
import aboutImage from "../../assets/backroads/about.jpeg";

const AboutSection = () => {
  return (
    <Section title="About Us" id="about-section">
      <Container className="flex flex-col md:flex-row gap-8 ">
        <div className="flex-1 relative before:absolute before:w-full before:h-full before:-ml-6 before:-mt-6 before:border-8 before:border-cyan-500 before:-z-10">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold capitalize mb-3">
            explore the difference
          </h3>
          <p className="mb-5 text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p className="mb-5 text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button className="py-1 px-3 bg-cyan-500 text-white hover:text-blue-950 hover:bg-cyan-300 tracking-widest uppercase shadow cursor-pointer transition duration-500">
            read more
          </button>
        </div>
      </Container>
    </Section>
  );
};
export default AboutSection;
