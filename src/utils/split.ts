type Diff<T, U> = T extends U ? never : T;

type Index = string | number | symbol;

interface Extracted<T, K extends Index> {
  original: T;
  extracted: Omit<T, K> | Record<Index, any>;
  excluded: Diff<T, K> | Record<Index, any>;
}

export const split = <T, K extends keyof T>(original: T, keys: K): Extracted<T, K> =>
  Object.entries(original).reduce(
    (prev, [key, value]) => {
      if ((Array.isArray(keys) && keys.includes(String(key))) || typeof keys === `string` || `number` || `symbol`) {
        prev.extracted[key] = value;
      } else {
        prev.excluded[key] = value;
      }
      return prev;
    },
    { original, extracted: {} as Record<Index, any>, excluded: {} as Record<Index, any> }
  );
