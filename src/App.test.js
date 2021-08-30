import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Bienvenido link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenido/i);
  expect(linkElement).toBeInTheDocument();
});
