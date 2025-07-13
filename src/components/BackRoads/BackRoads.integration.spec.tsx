import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackRoads from "./BackRoads";
import { axe } from "vitest-axe";

describe("BackRoads with real components", () => {
  const setupScrollSpy = () => {
    const scrollMock = vi.fn();
    HTMLElement.prototype.scrollIntoView = scrollMock;
    return scrollMock;
  };

  it("renders all sections with real content", () => {
    render(<BackRoads />);

    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /services/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tours/i })).toBeInTheDocument();
  });

  it("navigates to About section on nav click", () => {
    const scrollMock = setupScrollSpy();
    const { container } = render(<BackRoads />);
    const header = container.querySelector("header") as HTMLElement;
    const aboutNav = within(header).getByText("About");
    fireEvent.click(aboutNav);

    expect(scrollMock).toHaveBeenCalled();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<BackRoads />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
