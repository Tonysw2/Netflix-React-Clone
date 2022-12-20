import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    background-color: ${(props) => props.theme.gray900};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme.gray100};
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
