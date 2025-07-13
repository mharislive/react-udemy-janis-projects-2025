import Container from "./Container";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./data";

const ServicesSection = () => {
  return (
    <Section
      title="Our Services"
      className="bg-slate-100"
      id="services-section"
    >
      <Container className="flex flex-col md:flex-row gap-8 ">
        {serviceData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </Container>
    </Section>
  );
};

export default ServicesSection;
