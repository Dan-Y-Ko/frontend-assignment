import logo from "../../images/logo.svg";
import closeIcon from "../../images/close-icon.svg";
import { Icon } from "../Icon";
import { renderWithThemeProvider, screen } from "../../test-utils";

describe("Icon component", () => {
  test("logo renders correctly", () => {
    renderWithThemeProvider(
      <Icon styles={{ height: "6vh" }} icon="timescale" alt="Timescale" />
    );

    const image = screen.getByRole("img");

    expect(image.src).toContain(logo);
  });

  test("close icon renders correctly", () => {
    renderWithThemeProvider(<Icon icon="closeIcon" alt="close-icon" />);

    const image = screen.getByRole("img");

    expect(image.src).toContain(closeIcon);
  });
});
