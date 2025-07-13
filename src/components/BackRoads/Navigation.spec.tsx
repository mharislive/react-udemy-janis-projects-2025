import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "vitest-axe";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders all navigation links", () => {
    render(<Navigation />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Tours")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Navigation className="test" />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("test");
  });

  it("calls scrollIntoView on click with correct section", () => {
    const scrollIntoViewMock = vi.fn();
    const sectionId = "about-section";
    const section = document.createElement("div");
    section.id = sectionId;
    section.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(section);

    render(<Navigation />);
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    document.body.removeChild(section);
  });

  it("prevents default link behavior", () => {
    render(<Navigation />);
    const homeLink = screen.getByText("Home");
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(event, "target", { value: homeLink });
    const preventDefault = vi.fn();
    homeLink.addEventListener("click", (e) => {
      e.preventDefault = preventDefault;
    });
    homeLink.dispatchEvent(event);
    expect(preventDefault).toHaveBeenCalled();
  });

  it("does not throw if section does not exist", () => {
    render(<Navigation />);
    const servicesLink = screen.getByText("Services");
    expect(() => fireEvent.click(servicesLink)).not.toThrow();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Navigation />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
