import { render, screen, within } from "@testing-library/react";
import { axe } from "vitest-axe";
import Footer from "./Footer";

describe("BackRoads - Footer", () => {
  it("renders navigation links", () => {
    render(<Footer />);
    const nav = screen.getByRole("navigation", { name: /footer navigation/i });
    expect(within(nav).getByText(/Home/i)).toBeInTheDocument();
    expect(within(nav).getByText(/About/i)).toBeInTheDocument();
    expect(within(nav).getByText(/Services/i)).toBeInTheDocument();
    expect(within(nav).getByText(/Tours/i)).toBeInTheDocument();
  });

  it("renders SocialIcons with correct props", () => {
    render(<Footer />);
    const socialIcons = screen.getByLabelText(/footer social icons/i);
    expect(socialIcons).toBeInTheDocument();
  });

  it("renders copyright text with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(
        new RegExp(
          `copyright © Backroads travel tours company ${year} all rights reserved`,
          "i"
        )
      )
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
