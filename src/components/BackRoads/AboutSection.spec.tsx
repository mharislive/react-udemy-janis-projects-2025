import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import AboutSection from "./AboutSection";

describe("BackRoads - AboutSection", () => {
  it("renders the section title", () => {
    render(<AboutSection />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it("renders the image with correct alt text", () => {
    render(<AboutSection />);
    const img = screen.getByAltText(/about/i);
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe("IMG");
  });

  it("renders the heading 'explore the difference'", () => {
    render(<AboutSection />);
    expect(screen.getByText(/explore the difference/i)).toBeInTheDocument();
  });

  it("renders two paragraphs with lorem ipsum text", () => {
    render(<AboutSection />);
    const paragraphs = screen.getAllByText(/lorem ipsum/i);
    expect(paragraphs).toHaveLength(2);
  });

  it("renders the 'read more' button", () => {
    render(<AboutSection />);
    const button = screen.getByRole("button", { name: /read more/i });
    expect(button).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<AboutSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
