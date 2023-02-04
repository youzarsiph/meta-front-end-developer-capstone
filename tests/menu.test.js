import Menu from "../pages/menu";
import { render, screen } from "@testing-library/react";

test("Renders the menu page", () => {
  render(<Menu />);

  const heading = screen.getByTestId("heading");

  expect(heading.textContent).toBe("Menu");
});
