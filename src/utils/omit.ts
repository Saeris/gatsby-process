/**
 * Takes an Object and returns a new Object which excludes the given keys
 */
export const omit = (props: Record<any, any>, exclude: string[]) =>
  Object.entries(props).reduce((prev: Record<any, any>, [key, value]) => {
    if (!exclude.includes(key)) {
      prev[key] = value;
    }
    return prev;
  }, {});
