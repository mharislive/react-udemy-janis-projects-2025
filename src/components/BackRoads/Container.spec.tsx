import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import Container from "./Container";

describe("BackRoads - Container", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Container>
        <span>Test Child</span>
      </Container>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("container");
    expect(div.className).toContain("max-w-[1210px]");
    expect(div.className).toContain("mx-auto");
    expect(div.className).toContain("px-5");
  });

  it("appends custom className", () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>
    );
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("custom-class");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Container id="test-id" data-testid="container">
        Content
      </Container>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
