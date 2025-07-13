import logo from "../../assets/backroads/logo.svg";
import Container from "./Container";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

// Todo - mobile view
const Header = () => {
  return (
    <header className="py-4 px-3 md:px-0 fixed top-0 bg-white w-full shadow-2xl z-10">
      <Container className="flex justify-between items-center text-blue-950">
        <img src={logo} alt="logo" width="175" height="30" />
        <Navigation />
        <SocialIcons label="header social icons" />
      </Container>
    </header>
  );
};

export default Header;
