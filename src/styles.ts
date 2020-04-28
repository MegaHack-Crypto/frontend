import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    /* 1rem = 10 */
    font-size: 62.5%;
  }

  body, #root {
    font-size: 1.6rem;
  }
`;
