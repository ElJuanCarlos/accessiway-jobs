import { createGlobalStyle } from "styled-components";

const fontFamily = "'Atkinson Hyperlegible', sans-serif";

const colors = {
  black: "#000",
  white: "#fff",
  primaryBlue: "#185cff",
  darkBlue: "#002070",
  primaryGray: "#2d2d2d",
  secondaryGray: "#4c4c4c",
};
const breakpoints = {
  xs: "0px",
  ms: "360px",
  sm: "770px",
  md: "920px",
  lg: "1270px",
  xl: "1520px",
};

export interface StyleClosetTheme {
  breakpoints: {
    xs: string;
    ms: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fontFamily: string;
  colors: Record<keyof typeof colors, string>;
}

const theme: StyleClosetTheme = {
  breakpoints,
  fontFamily,
  colors,
};

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Atkinson', sans-serif;
  }  
`;

export { theme };
export default GlobalStyle;
