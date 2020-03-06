import "typeface-montserrat";
import "typeface-varela-round";
import "typeface-fira-code";

export interface Bounds {
  min: number;
  max: number;
}

export interface Theme {
  media: {
    between: (lowerBound: Bounds, upperBound: Bounds, excludeLarge?: boolean) => string;
    greaterThan: (size: Bounds) => string;
    lessThan: (size: Bounds) => string;
    size: (size: Bounds) => string;
  };
  breakpoints: {
    mobileSmall: { min: 0; max: 320 };
    mobileMedium: { min: 321; max: 375 };
    mobileLarge: { min: 376; max: 425 };
    tablet: { min: 426; max: 768 };
    laptop: { min: 769; max: 1024 };
    laptopLarge: { min: 1025; max: 1440 };
    desktop: { min: 1441; max: 1920 };
    desktopLarge: { min: 1921; max: 999e308 };
  };
  fonts: {
    /** Headers, Body Text, Forms */
    primary: "'Montserrat', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif";
    /** Code Blocks, Pre-Formatted Text */
    code: "'Fira Code', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace";
    /** Tabular Numbers, Prices, Counters */
    numbers: "'Varela Round', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif";
  };
  fontSizes: {
    /** Footer Text, Captions, Code Blocks */
    tiny: "1.8rem";
    /** Body Text, H6 */
    body: "2.15rem";
    /** Form Elements, H5 */
    form: "2.8rem";
    /** H4 */
    headline: "3.2rem";
    /** H3 */
    subtitle: "3.75rem";
    /** H1, H2 */
    title: "4.8rem";
  };
  weights: {
    thin: 100;
    extralight: 200;
    light: 300;
    regular: 400;
    medium: 500;
    semibold: 600;
    bold: 700;
    extrabold: 800;
  };
  colors: {
    primary: {
      light: "#76DAFE";
      normal: "#00A3E0";
      dark: "#008ABC";
    };
    secondary: {
      light: "#FD1F9E";
      normal: "#D9027D";
      dark: "#A1025C";
    };
    tertiary: {
      light: "#FEDE5A";
      normal: "#FEDD00";
      dark: "#F2B903";
    };
    grays: {
      100: "#F9F9F9";
      /** ltgray */
      200: "#F3EFEB";
      /** mdgray */
      300: "#EAE7E2";
      400: "#DEDAD4";
      /** wmgray */
      500: "#D7D4CD";
      600: "#B2AEA6";
      700: "#7C7A75";
      /** dkgray */
      800: "#56534F";
      900: "#3C3C3C";
    };
    white: "#fff";
    black: "#000";
  };
  padding: ("0.4rem" | "0.8rem" | "1.2rem" | "1.6rem" | "2rem" | "2.4rem" | "2.8rem" | "3.2rem" | "3.6rem" | "4rem")[];
  corners: ("0.4rem" | "0.6rem" | "0.8rem" | "1.2rem")[];
}

export const theme: Theme = {
  media: {
    between(lowerBound, upperBound, excludeLarge = false) {
      if (excludeLarge) {
        return `@media (min-width: ${lowerBound.min}px) and (max-width: ${upperBound.min - 1}px)`;
      }
      if (upperBound.max === Infinity) {
        return `@media (min-width: lowerBound.min}px)`;
      }
      return `@media (min-width: lowerBound.min}px) and (max-width: ${upperBound.max}px)`;
    },

    greaterThan(size) {
      return `@media (min-width: ${size.min}px)`;
    },

    lessThan(size) {
      return `@media (max-width: ${size.min - 1}px)`;
    },

    size(size) {
      if (size.min === null) return theme.media.lessThan(size);
      if (size.max === null) return theme.media.greaterThan(size);
      return theme.media.between(size, size);
    }
  },
  breakpoints: {
    mobileSmall: { min: 0, max: 320 },
    mobileMedium: { min: 321, max: 375 },
    mobileLarge: { min: 376, max: 425 },
    tablet: { min: 426, max: 768 },
    laptop: { min: 769, max: 1024 },
    laptopLarge: { min: 1025, max: 1440 },
    desktop: { min: 1441, max: 1920 },
    desktopLarge: { min: 1921, max: 999e308 }
  },
  fonts: {
    primary: `'Montserrat', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    code: `'Fira Code', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace`,
    numbers: `'Varela Round', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`
  },
  fontSizes: {
    tiny: `1.8rem`,
    body: `2.15rem`,
    form: `2.8rem`,
    headline: `3.2rem`,
    subtitle: `3.75rem`,
    title: `4.8rem`
  },
  weights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  colors: {
    primary: {
      light: `#76DAFE`,
      normal: `#00A3E0`,
      dark: `#008ABC`
    },
    secondary: {
      light: `#FD1F9E`,
      normal: `#D9027D`,
      dark: `#A1025C`
    },
    tertiary: {
      light: `#FEDE5A`,
      normal: `#FEDD00`,
      dark: `#F2B903`
    },
    grays: {
      100: `#F9F9F9`,
      200: `#F3EFEB`, // ltgray
      300: `#EAE7E2`, // mdgray
      400: `#DEDAD4`,
      500: `#D7D4CD`, // wmgray
      600: `#B2AEA6`,
      700: `#7C7A75`,
      800: `#56534F`, // dkgray
      900: `#3C3C3C`
    },
    white: `#fff`,
    black: `#000`
  },
  padding: [`0.4rem`, `0.8rem`, `1.2rem`, `1.6rem`, `2rem`, `2.4rem`, `2.8rem`, `3.2rem`, `3.6rem`, `4rem`],
  corners: [`0.4rem`, `0.6rem`, `0.8rem`, `1.2rem`]
};
