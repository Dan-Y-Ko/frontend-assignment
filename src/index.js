import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";
import theme from "./theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
