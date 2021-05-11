import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  body {
    box-sizing: border-box;
    font-family: "nunito", Avenir, Arial, sans-serif;
    height: 100%;
    width: 100%;
    line-height: 1.2;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  p, dl, dd {
    margin: 0;
  }
  code, pre {
    font-family: Menlo, Consolas, monospace,monospace;
  }
`;
