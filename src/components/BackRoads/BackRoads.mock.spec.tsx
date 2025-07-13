import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe } from "vitest-axe";
import BackRoads from "./BackRoads";

vi.mock("./Header", () => ({
  default: () => <div data-testid="header" />,
}));
vi.mock("./HeroSection", () => ({
  default: () => <div data-testid="hero-section" />,
}));
vi.mock("./AboutSection", () => ({
  default: () => <div data-testid="about-section" />,
}));
vi.mock("./ServicesSection", () => ({
  default: () => <div data-testid="services-section" />,
}));
vi.mock("./ToursSection", () => ({
  default: () => <div data-testid="tours-section" />,
}));
vi.mock("./Footer", () => ({
  default: () => <div data-testid="footer" />,
}));

describe("BackRoads with mocked components", () => {
  it("renders Header component", () => {
    render(<BackRoads />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders HeroSection component", () => {
    render(<BackRoads />);
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
  });

  it("renders AboutSection component", () => {
    render(<BackRoads />);
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("renders Services component", () => {
    render(<BackRoads />);
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
  });

  it("renders ToursSection component", () => {
    render(<BackRoads />);
    expect(screen.getByTestId("tours-section")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<BackRoads />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders all main sections in correct order", () => {
    render(<BackRoads />);
    const children = screen.getByRole("main").children;
    expect(children?.[0]).toBe(screen.getByTestId("hero-section"));
    expect(children?.[1]).toBe(screen.getByTestId("about-section"));
    expect(children?.[2]).toBe(screen.getByTestId("services-section"));
    expect(children?.[3]).toBe(screen.getByTestId("tours-section"));
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<BackRoads />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
