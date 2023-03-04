import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme, regularFontTheme, boldFontTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={regularFontTheme}>
      <ThemeProvider theme={boldFontTheme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
