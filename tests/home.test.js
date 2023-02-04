import Home from "../pages/index";
import { render, screen } from "@testing-library/react";

test("Renders the home page", () => {
  render(<Home />);

  const specials = screen.getByTestId("specials");

  expect(specials.textContent).toBe("Specials of This Week");
});

test("Renders the home page", () => {
  render(<Home />);

  const menu = screen.getByTestId("menu");

  expect(menu.textContent).toBe("Explore Our Menu");
});
