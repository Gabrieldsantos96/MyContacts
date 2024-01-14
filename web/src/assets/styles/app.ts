import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
:root {
    --background-color: #F6F5FC;
    --text-color: #151618;
    --inverted-background-color: #06092b;
    --inverted-text-color: #F6F5FC;
  }
  
  html.dark {
    --background-color: #06092b;
    --text-color: #F6F5FC;
    --inverted-background-color: #F6F5FC;
    --inverted-text-color: #151618;
  }

* {
    font-family: 'Sora', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    background: var(--background-color);
    color: var(--text-color);
    transition: background 0.2s linear, color 0.2s linear;
  }
 

  body {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
    `}

  }

  button {
    cursor: pointer;
  }
`
