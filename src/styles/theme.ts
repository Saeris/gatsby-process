export interface Bounds {
  min: number
  max: number
}

export interface Theme {
  media: {
    between: (
      lowerBound: Bounds,
      upperBound: Bounds,
      excludeLarge?: boolean
    ) => string
    greaterThan: (size: Bounds) => string
    lessThan: (size: Bounds) => string
    size: (size: Bounds) => string
  }
  breakpoints: string[]
  fontSizes: string[]
  colors: {
    [key: string]: string
  }
  space: string[]
  fontWeights: {
    [key: string]: number
  }
  sidebarWidth: {
    [key: string]: string
  }
}

export const theme: Theme = {
  media: {
    between(lowerBound, upperBound, excludeLarge = false) {
      if (excludeLarge)
        return `@media (min-width: ${
          lowerBound.min
        }px) and (max-width: ${upperBound.min - 1}px)`
      if (upperBound.max === Infinity)
        return `@media (min-width: lowerBound.min}px)`
      return `@media (min-width: lowerBound.min}px) and (max-width: ${
        upperBound.max
      }px)`
    },

    greaterThan(size) {
      return `@media (min-width: ${size.min}px)`
    },

    lessThan(size) {
      return `@media (max-width: ${size.min - 1}px)`
    },

    size(size) {
      if (size.min === null) return theme.media.lessThan(size)
      if (size.max === null) return theme.media.greaterThan(size)
      return theme.media.between(size, size)
    }
  },
  breakpoints: ["480px", "650px", "1000px", "1200px", "1400px"],
  fontSizes: ["1rem", "1.2rem", "1.44rem", "1.728rem", "2.074rem", "2.488rem"],
  colors: {
    primary: "#c66131",
    secondary: "#494992",
    grey: "#58545a",
    shade: "#f5f5f5"
  },
  space: [
    "0",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
    "12rem",
    "16rem"
  ],
  fontWeights: {
    normal: 400,
    bold: 700
  },
  sidebarWidth: {
    big: "375px",
    normal: "320px"
  }
}
