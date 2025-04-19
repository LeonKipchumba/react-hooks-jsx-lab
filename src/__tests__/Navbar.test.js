import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { name, city } from "../data/User";

import Navbar from "../components/Navbar";

test("renders a <nav> element", () => {
  const { container } = render(<Navbar />);

  const nav = container.querySelector("nav");
  expect(nav).toBeInTheDocument();
});

test("renders two <a> elements inside the <nav> element", () => {
  const { container } = render(<Navbar />);

  const nav = container.querySelector("nav");
  const anchorTags = nav.querySelectorAll("a"); // find all the child <a> elements

  expect(anchorTags).toHaveLength(2);
});

test("renders each <a> element with the correct attributes", () => {
  render(<Navbar />);

  const home = screen.queryByText(/home/i);

  expect(home).toBeInTheDocument();
  expect(home).toHaveAttribute("href", expect.stringContaining("#home"));

  const about = screen.queryByText(/about/i);

  expect(about).toBeInTheDocument();
  expect(about).toHaveAttribute("href", expect.stringContaining("#about"));
});
