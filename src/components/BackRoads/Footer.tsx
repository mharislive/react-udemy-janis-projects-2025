import Container from "./Container";
import Navigation from "./Navigation";
import Section from "./Section";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer>
      <Section className="bg-blue-950">
        <Container className="text-white">
          <Navigation className="mb-6" aria-label="footer navigation" />
          <SocialIcons
            label="Footer social icons"
            color="text-white"
            className="justify-center mb-6"
          />
          <div className="capitalize tracking-widest flex justify-center">
            copyright © Backroads travel tours company{" "}
            {new Date().getFullYear()} all rights reserved
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
