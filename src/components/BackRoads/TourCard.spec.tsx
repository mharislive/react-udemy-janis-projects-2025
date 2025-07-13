import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import TourCard from "./TourCard";
import { toursdata } from "./data";

const mockProps = toursdata[0];

describe("BackRoads - TourCard", () => {
  it("renders the image with correct src and alt", () => {
    render(<TourCard {...mockProps} />);
    const img = screen.getByRole("img", { name: mockProps.title });
    expect(img).toHaveAttribute("src", mockProps.image);
    expect(img).toHaveAttribute("alt", mockProps.title);
  });

  it("displays the date badge", () => {
    render(<TourCard {...mockProps} />);
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<TourCard {...mockProps} />);
    expect(
      screen.getByRole("heading", { name: mockProps.title })
    ).toBeInTheDocument();
  });

  it("renders the content/description", () => {
    render(<TourCard {...mockProps} />);
    expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  });

  it("renders the country with map icon", () => {
    render(<TourCard {...mockProps} />);
    expect(screen.getByText(mockProps.country)).toBeInTheDocument();
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the duration", () => {
    render(<TourCard {...mockProps} />);
    expect(screen.getByText(mockProps.duration)).toBeInTheDocument();
  });

  it("renders the price with 'From' prefix", () => {
    render(<TourCard {...mockProps} />);
    expect(screen.getByText(`From ${mockProps.price}`)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<TourCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<TourCard {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
