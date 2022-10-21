import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const header = screen.getByText(/Thai Programmers in USA/i);
  expect(header).toBeInTheDocument();
});
