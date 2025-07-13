import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import ToursSection from "./ToursSection";
import { toursdata } from "./data";

describe("BackRoads - ToursSection", () => {
  it("renders the section title", () => {
    render(<ToursSection />);
    expect(
      screen.getByRole("heading", { name: /Featured Tours/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders a TourCard for each item in toursdata", () => {
    render(<ToursSection />);
    toursdata.forEach((tour) => {
      expect(screen.getByText(tour.title)).toBeInTheDocument();
    });
  });

  it("renders the correct number of TourCards", () => {
    render(<ToursSection />);
    const cards = toursdata.map((tour) => screen.getByText(tour.title));
    expect(cards).toHaveLength(toursdata.length);
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<ToursSection />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<ToursSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
