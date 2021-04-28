import { createGlobalStyle } from 'styled-components';
import Theme from '../Settings/theme';

const {
  typography: {
    primaryFont
  },
  colors: {
    secondaryColor,
    primaryColor,
    quaternaryColor
  }
} = Theme;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${primaryFont};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: contain;
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;
  }

  ::selection {
    background: ${quaternaryColor};
    color: ${secondaryColor};
  }
`

export default GlobalStyle;