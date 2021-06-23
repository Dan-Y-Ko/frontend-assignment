import Searchbar from "../Searchbar";
import { renderWithThemeProvider, screen, fireEvent } from "../../test-utils";

describe("tests related to search bar", () => {
  test("input text renders correctly", () => {
    renderWithThemeProvider(<Searchbar />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Cruella" } });
    expect(input.value).toBe("Cruella");
  });
});
