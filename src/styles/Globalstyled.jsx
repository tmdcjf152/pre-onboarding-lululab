import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Contrail+One&family=Jua&family=Pacifico&display=swap');
  ${reset}

  * {
    box-sizing: border-box;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  ul,ol,li{
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  body {

  }
  .hidden{
    position: absolute;
    top: -999999999px;
    opacity: 0;
  }
`;

export default GlobalStyle;
