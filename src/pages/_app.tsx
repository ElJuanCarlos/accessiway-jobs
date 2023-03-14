import type { AppProps } from "next/app";
import GlobalStyle, { theme } from "../theme/theme";
import { ThemeProvider } from "styled-components";
import RootLayout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
}
