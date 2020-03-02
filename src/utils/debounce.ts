/**
 * A function that emits a side effect and does not return anything.
 */
export type Procedure = (...args: any[]) => void;

type Debounced<F> = (this: ThisParameterType<F>, ...args: Parameters<Procedure>) => void

export type Options = {
  isImmediate: boolean;
};

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false
  }
): Debounced<F> & { clear(): void } {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  function debounced(this: ThisParameterType<F>, ...args: Parameters<Procedure>) {
    const context = this;

    const doLater = () => {
      // eslint-disable-next-line no-undefined
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(context, args);
      }
    };

    // eslint-disable-next-line no-undefined
    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    // eslint-disable-next-line no-undefined
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  }

  debounced.clear = () => {
    clearTimeout(timeoutId);
  };

  return debounced;
}
