import logo from "../../images/logo.svg";
import { Icon } from "../Icon";
import { renderWithThemeProvider, screen } from "../../test-utils";

test("logo renders correctly", () => {
  renderWithThemeProvider(
    <Icon styles={{ height: "6vh" }} icon="timescale" alt="Timescale" />
  );

  const image = screen.getByRole("img");

  expect(image.src).toContain(logo);
});
