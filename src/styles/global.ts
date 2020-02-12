import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    ::selection {
      color: ${theme.colors.black};
      background-color: ${theme.colors.tertiary.normal};
    }

    html {
      margin: 0;
      border: 0;
      font-size: 62.5%;
      overflow-x: hidden;

      ${theme.media.lessThan(theme.breakpoints.small)} {
        font-size: calc(62.5% * 0.6);
      }
    }

    body {
      padding: 0;
      margin: 0;
      border: 0;
      background: ${theme.colors.white};
      color: ${theme.colors.black};
      font-family: ${theme.fonts.primary};
      font-size: ${theme.fontSizes.body};
    }

    a {
      border-bottom: 2px solid ${theme.colors.primary.normal};
      color: ${theme.colors.primary.normal};
      text-decoration: none;
      transition: border 0.3s ease-in-out, color 0.3s ease-in-out;

      &:hover,
      &:focus {
        border-color: ${theme.colors.secondary.normal};
        color: ${theme.colors.secondary.normal};
        text-decoration: none;
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
