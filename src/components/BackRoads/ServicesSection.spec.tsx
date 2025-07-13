import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import ServicesSection from "./ServicesSection";
import { serviceData } from "./data";

describe("BackRoads - Services", () => {
  it("should render successfully", () => {
    render(<ServicesSection />);
    expect(
      screen.getByRole("heading", { name: /our services/i })
    ).toBeInTheDocument();
  });

  it("should render 3 service cards", () => {
    render(<ServicesSection />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(3);
    expect(
      articles.map((item) => item.querySelector("h3")?.textContent)
    ).toEqual(serviceData.map((item) => item.title));
  });

  it("should render 3 icons", () => {
    render(<ServicesSection />);
    expect(screen.getAllByTestId("icon")).toHaveLength(3);
  });

  it("should render 3 paragraphs", () => {
    render(<ServicesSection />);
    expect(screen.getAllByRole("paragraph")).toHaveLength(3);
    expect(screen.getAllByText(/lorem/i)).toHaveLength(3);
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<ServicesSection />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    let { container } = render(<ServicesSection />);
    let results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
