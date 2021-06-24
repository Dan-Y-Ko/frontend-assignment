import logo from "../../images/logo.svg";
import closeIcon from "../../images/close-icon.svg";
import { Icon } from "../Icon";
import { renderWithThemeProvider, screen } from "../../test-utils";

describe("Icon component", () => {
  test("logo renders correctly", () => {
    renderWithThemeProvider(<Icon icon="timescale" alt="Timescale" />);

    const image = screen.getByAltText("Timescale");

    expect(image.src).toContain(logo);
  });

  test("logo styling gets applied correctly", () => {
    renderWithThemeProvider(
      <Icon styles={{ height: "6vh" }} icon="timescale" alt="Timescale" />
    );

    const image = screen.getByRole("img");
    const imageElement = document.getElementsByClassName(image.className);
    const style = window.getComputedStyle(imageElement[0]);

    expect(style.height).toBe("6vh");
  });

  test("close icon renders correctly", () => {
    renderWithThemeProvider(<Icon icon="closeIcon" alt="close-icon" />);

    const image = screen.getByAltText("close-icon");

    expect(image.src).toContain(closeIcon);
  });
});
