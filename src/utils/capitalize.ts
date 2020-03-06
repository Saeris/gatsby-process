type Capitalize = (str: string) => string;

export const capitalize: Capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
