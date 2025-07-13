import Container from "./Container";
import Section from "./Section";
import TourCard from "./TourCard";
import { toursdata } from "./data";

const ToursSection = () => {
  return (
    <Section title="Featured Tours" id="tours-section">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {toursdata.map((item) => (
          <TourCard {...item} key={item.title} />
        ))}
      </Container>
    </Section>
  );
};

export default ToursSection;
