import { render, screen } from "@testing-library/react";
import Page from "./Page";

describe("Page", () => {
  const PageComponent = () => (
    <Page>
      <h1>Hello World</h1>
    </Page>
  );

  it("should render successfully", () => {
    render(<PageComponent />);
     expect(
       screen.getByRole("heading", { name: /hello world/i })
     ).toBeInTheDocument();
  });

  it("should render passed children successfully", () => {
    render(<PageComponent />);
    expect(screen.getByText(/hello world/i)).toBeVisible();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<PageComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
