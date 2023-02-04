import Booking from "../pages/booking";
import { render, screen } from "@testing-library/react";

test("Renders the booking form", () => {
  render(<Booking />);

  const heading = screen.getByTestId("heading");

  expect(heading.textContent).toBe("Reserve a Table");
});
