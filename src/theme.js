import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00374E",
    },
    secondary: {
      main: "#C7D300",
    },
    otherColor: {
      main: "#BEC3C6",
    },
  },
});

export const regularFontTheme = createTheme({
  typography: {
    fontFamily: "VagRoundedRegular,Arial,sans-serif",
  },
});

export const boldFontTheme = createTheme({
  typography: {
    fontFamily: "VagRoundedBold,Arial,sans-serif",
  },
});
