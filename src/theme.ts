import { createTheme } from "@mui/material";
import { amber, deepPurple } from "@mui/material/colors";

// const purple = {
//   50: "#f3e5f5",
//   100: "#e1bee7",
//   200: "#ce93d8",
//   300: "#ba68c8",
//   400: "#ab47bc",
//   500: "#9c27b0",
//   600: "#8e24aa",
//   700: "#7b1fa2",
//   800: "#6a1b9a",
//   900: "#4a148c",
//   A100: "#ea80fc",
//   A200: "#e040fb",
//   A400: "#d500f9",
//   A700: "#aa00ff",
//   contrastText: "#fff",
// };

// const deepPurple = {
//   50: "#ede7f6",
//   100: "#d1c4e9",
//   200: "#b39ddb",
//   300: "#9575cd",
//   400: "#7e57c2",
//   500: "#673ab7",
//   600: "#5e35b1",
//   700: "#512da8",
//   800: "#4527a0",
//   900: "#311b92",
//   A100: "#b388ff",
//   A200: "#7c4dff",
//   A400: "#651fff",
//   A700: "#6200ea",
//   contrastText: "#fff",
// };

// const amber = {
//   50: "#fff8e1",
//   100: "#ffecb3",
//   200: "#ffe082",
//   300: "#ffd54f",
//   400: "#ffca28",
//   500: "#ffc107",
//   600: "#ffb300",
//   700: "#ffa000",
//   800: "#ff8f00",
//   900: "#ff6f00",
//   A100: "#ffe57f",
//   A200: "#ffd740",
//   A400: "#ffc400",
//   A700: "#ffab00",
//   contrastText: "#000",
// };

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: deepPurple[500],
      light: deepPurple[100],
      dark: deepPurple[900],
    },
    secondary: {
      main: amber[300],
      light: amber[100],
      dark: amber[900],
    },
  },
});
