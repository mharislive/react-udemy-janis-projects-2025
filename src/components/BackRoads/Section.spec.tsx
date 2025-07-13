import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import Section from "./Section";

describe("BackRoads - Section", () => {
  const SectionWithHeading = () => (
    <Section title="Heading" className="test" id="test">
      <p>Lorem Ipsum</p>
    </Section>
  );

  const SectionWithoutHeading = () => (
    <Section as="footer">
      <p>Lorem Ipsum</p>
    </Section>
  );

  it("should render successfully", () => {
    const { container } = render(<SectionWithHeading />);
    expect(container).toBeInTheDocument();
  });

  it("should render section tag by default", () => {
    const { container } = render(<SectionWithHeading />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should render footer tag if as props is set as footer", () => {
    const { container } = render(<SectionWithoutHeading />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("should render successfully with heading", () => {
    render(<SectionWithHeading />);
    expect(
      screen.getByRole("heading", { name: /heading/i })
    ).toBeInTheDocument();
  });

  it("should render successfully without heading", () => {
    render(<SectionWithoutHeading />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("should have the passed class to the parent container", () => {
    const { container } = render(<SectionWithHeading />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("test");
  });

  it("should have the passed id to the parent container", () => {
    const { container } = render(<SectionWithHeading />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "test");
  });

  it("should render passed children successfully", () => {
    render(<SectionWithHeading />);
    expect(screen.getByText(/lorem ipsum/i)).toBeVisible();
  });

  it("should match snapshot with heading", () => {
    const { asFragment } = render(<SectionWithHeading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot without heading", () => {
    const { asFragment } = render(<SectionWithoutHeading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    let { container } = render(<SectionWithHeading />);
    let results = await axe(container);
    expect(results).toHaveNoViolations();

    ({ container } = render(<SectionWithoutHeading />));
    results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
