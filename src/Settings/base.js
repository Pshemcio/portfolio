import { createGlobalStyle } from 'styled-components';
import Theme from '../Settings/theme';

const {
  typography: {
    primaryFont
  },
  colors: {
    secondaryColor,
    primaryColor,
    primaryColorLight,
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active
  {
    box-shadow: 0 0 0 30px ${primaryColorLight} inset !important;
    -webkit-box-shadow: 0 0 0 30px ${primaryColorLight} inset !important;
    background-clip: content-box !important;
    -webkit-text-fill-color: ${secondaryColor} !important;
  }
`

export default GlobalStyle;