import About from "../pages/about";
import { render, screen } from "@testing-library/react";

test("Renders the about page", () => {
  render(<About />);

  const heading = screen.getByTestId("heading");

  expect(heading.textContent).toBe("About Us");
});
