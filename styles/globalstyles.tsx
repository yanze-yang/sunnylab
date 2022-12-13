import { createGlobalStyle } from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: Source Sans Pro, Monument Extended, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

@font-face {
  font-family: "Monument Extended";
  src: url("/fonts/MonumentExtended-Regular.woff2") format("woff2"),
}

`;

export default GlobalStyle;