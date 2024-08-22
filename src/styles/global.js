import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  #wrap {
    padding: 0 20px 90px 20px;
  }
`;

export default GlobalStyle;
