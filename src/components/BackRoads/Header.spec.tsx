import { render, screen, within } from "@testing-library/react";
import { axe } from "vitest-axe";
import Header from "./Header";

describe("BackRoads - Header", () => {
  it("should render header", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "main navigation" });
    expect(nav).toBeInTheDocument();
  });

  it("should render site logo", () => {
    render(<Header />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });

  it("should render 4 nav links", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "main navigation" });
    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(4);
    expect(links.map((link) => link.textContent)).toEqual([
      "Home",
      "About",
      "Services",
      "Tours",
    ]);
  });

  it("should render 3 social media icons", () => {
    render(<Header />);
    const socialContainer = screen.getByLabelText(/header social icons/i);
    const links = within(socialContainer).getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/squarespace/i)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
