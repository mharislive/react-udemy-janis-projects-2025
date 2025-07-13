import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import BookList from "./BookList";

describe("BookList", () => {
  it("should render successfully", () => {
    render(<BookList />);
  });

  it("should render 3 books", () => {
    render(<BookList />);
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<BookList />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should match the snapshot", () => {
    const { asFragment } = render(<BookList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
