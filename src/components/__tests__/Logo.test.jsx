import Logo from "../Logo";
import logo from "../../images/logo.svg";
import { renderWithThemeProvider, screen } from "../../test-utils";

test("logo renders correctly", () => {
  renderWithThemeProvider(<Logo />);

  const image = screen.getByRole("img");

  expect(image.src).toContain(logo);
});
