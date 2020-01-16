import { createGlobalStyle, css } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>(
  ({ theme }) => css`
    *::before,
    *::after {
      box-sizing: border-box;
    }
    ::selection {
      color: white;
      background-color: #f6993f;
    }
    html {
      box-sizing: border-box;
      border: 0;
      margin: 0;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: ${theme.fontWeights.bold};
      }

      h1 {
        font-size: ${theme.fontSizes[5]};
      }
      h2 {
        font-size: ${theme.fontSizes[4]};
      }
      h3 {
        font-size: ${theme.fontSizes[3]};
      }
      h4 {
        font-size: ${theme.fontSizes[2]};
      }
      h5 {
        font-size: ${theme.fontSizes[1]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }

      @media (max-width: 600px) {
        font-size: 16px;

        h1 {
          font-size: ${theme.fontSizes[4]};
        }
        h2 {
          font-size: ${theme.fontSizes[3]};
        }
        h3 {
          font-size: ${theme.fontSizes[2]};
        }
        h4 {
          font-size: ${theme.fontSizes[1]};
        }
        h5 {
          font-size: ${theme.fontSizes[0]};
        }
        h6 {
          font-size: ${theme.fontSizes[0]};
        }
      }
    }
    body {
      border: 0;
      margin: 0;
      padding: 0;
      color: black;
      font-family: "Work Sans", "-apple-system", "Roboto", "Helvetica", "Arial", sans-serif;
      background: white;
      font-size: 18px;
    }
    a {
      transition: all 0.3s ease-in-out;
      color: black;
      text-decoration: underline;
      &:hover,
      &:focus {
        color: ${theme.colors.primary};
      }
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    a {
      background-color: transparent;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    figure {
      margin: 0 0 1rem 0;
    }
    img {
      vertical-align: middle;
      border-style: none;
    }
    [role="button"] {
      cursor: pointer;
    }
    a,
    area,
    button,
    [role="button"],
    input,
    label,
    select,
    summary,
    textarea {
      touch-action: manipulation;
    }
  `
);
