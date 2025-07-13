import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import Book from "./Book";
import { BOOKS } from "./data";

describe("Book", () => {
  it("should render successfully", () => {
    render(<Book {...BOOKS[0]} />);
  });

  it("should render title", () => {
    render(<Book {...BOOKS[0]} />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Atomic Habits");
  });

  it("should render author name", () => {
    render(<Book {...BOOKS[0]} />);
    const author = screen.getByRole("heading", { level: 3 });
    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent("James Clear");
  });

  it("should render the image", () => {
    render(<Book {...BOOKS[0]} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Atomic Habits");
  });

  it("should match the snapshot", () => {
    const { asFragment } = render(<Book {...BOOKS[0]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Book {...BOOKS[0]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
