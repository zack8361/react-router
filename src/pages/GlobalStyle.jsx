import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'KOTRAHOPE';
    padding-top: 1em;
    white-space: pre-wrap;
  }
  ul, ol {
    list-style: none; padding-left: 0px;
  } 
`;
export default GlobalStyle;
