import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "./theme/index";

function renderWithThemeProvider(ui, { ...renderOptions } = {}) {
  function wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return render(ui, { wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { renderWithThemeProvider };
