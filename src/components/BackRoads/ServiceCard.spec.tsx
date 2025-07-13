import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./data";

const service = serviceData[0];

describe("BackRoads - Service Card", () => {
  it("should render successfully", () => {
    render(<ServiceCard {...service} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("should render icon", () => {
    render(<ServiceCard {...service} />);
    expect(screen.getByLabelText(service.title)).toBeInTheDocument();
  });

  it("should render title", () => {
    render(<ServiceCard {...service} />);
    expect(screen.getByRole("heading", { name: service.title })).toBeVisible();
  });

  it("should render content", () => {
    render(<ServiceCard {...service} />);
    expect(screen.getByRole("paragraph")).toBeVisible();
    expect(screen.getByText(/lorem/i)).toBeVisible();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<ServiceCard {...service} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    let { container } = render(<ServiceCard {...service} />);
    let results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
