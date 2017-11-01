import { injectGlobal } from "styled-components";
import AvenirBook_EOT from '../assets/fonts/Avenir-Book.eot';
import AvenirBook_TTF from '../assets/fonts/Avenir-Book.ttf';
import AvenirBook_WOFF from '../assets/fonts/Avenir-Book.woff';
import FuturaMedium_OTF from '../assets/fonts/Futura-Medium.otf';
import FuturaMedium_TTF from '../assets/fonts/Futura-Medium.ttf';

export default () => injectGlobal`

  @font-face {
    font-family: 'Avenir Book';
    font-style: normal;
    font-weight: normal;
    src: url(${AvenirBook_EOT});
    src: url(${AvenirBook_EOT}) format('embedded-opentype'),
          url(${AvenirBook_TTF}) format('truetype'),
          url(${AvenirBook_WOFF}) format('woff');
  }

  @font-face {
    font-family: 'Futura Medium';
    font-style: normal;
    font-weight: normal;
    src: url(${FuturaMedium_OTF});
    src: url(${FuturaMedium_OTF}) format('truetype'),
          url(${FuturaMedium_TTF}) format('truetype');
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    overflow: auto;
    font-family: 'Avenir Book';
    font-size: 1.2rem;
    color: #aaa;

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    ul,
    ol {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    }

    p {
      margin: 0;
      line-height: 1.2;
    }
  }

  .fadeTranslate-enter {
    opacity: 0;
    transform: translate(0, -30px);
  }

  .fadeTranslate-enter.fadeTranslate-enter-active {
    opacity: 1;
    transition: all 500ms ease-in;
    transform: translate(0, 0);

  }

  .fadeTranslate-exit {
    opacity: 1;
  }

  .fadeTranslate-exit.fadeTranslate-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }

  .fix-container {
    position: fixed;
  }
`;
