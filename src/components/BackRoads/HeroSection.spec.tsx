import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import HeroSection from "./HeroSection";

describe("BackRoads - Hero section", () => {
  it("should render successfully", () => {
    render(<HeroSection />);
    expect(screen.getByLabelText(/continue exploring/i)).toBeInTheDocument();
  });

  it("should render hero image", () => {
    render(<HeroSection />);
    expect(screen.getByAltText(/hero/i)).toBeInTheDocument();
  });

  it("should render heading", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("heading", { name: /continue exploring/i })
    ).toBeInTheDocument();
  });

  it("should render paragraph", () => {
    render(<HeroSection />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toHaveTextContent(/lorem/i);
  });

  it("should render link", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("link", { name: /explore tours/i })
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<HeroSection />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<HeroSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
