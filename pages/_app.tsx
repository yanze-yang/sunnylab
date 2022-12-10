import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import "bootstrap/dist/css/bootstrap.css";
import { CartProvider } from "../contexts/cart.context";
import { ProductsProvider } from "../contexts/products.context";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
  fonts: {
    monument: "Monument Extended",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductsProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}
