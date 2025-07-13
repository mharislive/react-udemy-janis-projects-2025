import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import SocialIcons from "./SocialIcons";

describe("SocialIcons", () => {
  it("renders a container with the correct aria-label", () => {
    render(<SocialIcons label="header social icons" />);
    const container = screen.getByLabelText(/header social icons/i);
    expect(container).toBeInTheDocument();
  });

  it("renders three social icon links", () => {
    render(<SocialIcons />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders the Facebook icon with correct aria-label", () => {
    render(<SocialIcons />);
    const facebookIcon = screen.getByLabelText(/facebook/i);
    expect(facebookIcon).toBeInTheDocument();
  });

  it("renders the Twitter icon with correct aria-label", () => {
    render(<SocialIcons />);
    const twitterIcon = screen.getByLabelText(/twitter/i);
    expect(twitterIcon).toBeInTheDocument();
  });

  it("renders the Squarespace icon with correct aria-label", () => {
    render(<SocialIcons />);
    const squarespaceIcon = screen.getByLabelText(/squarespace/i);
    expect(squarespaceIcon).toBeInTheDocument();
  });

  it("applies the color prop to all anchor elements", () => {
    render(<SocialIcons color="text-white" />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass("text-white");
    });
  });

  it("applies the className prop to the container", () => {
    render(<SocialIcons className="test" />);
    const container = screen.getByLabelText(/social icons/i);
    expect(container).toHaveClass("test");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<SocialIcons />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<SocialIcons />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
