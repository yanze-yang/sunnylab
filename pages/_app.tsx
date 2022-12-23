import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import "../styles/globals.css";
import GlobalStyle from "../styles/globalstyles";
import { CartProvider } from "../contexts/cart.context";
import { ProductsProvider } from "../contexts/products.context";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    tertiary: "#4579ac",
    grey: "#F3F3F3",
  },
  fonts: {
    monument: "Monument Extended",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ProductsProvider>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
          </ProductsProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
