import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it("renders heading with text", () => {
    render(<HelloWorld />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render correct text message of hello World", () => {
    render(<HelloWorld />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello World"
    );
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<HelloWorld />);
    expect(asFragment()).toMatchSnapshot();
  });
});
