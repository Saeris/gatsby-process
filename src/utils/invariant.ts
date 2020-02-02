const production: boolean = process.env.NODE_ENV === `production`;

/**
 * Provided a condition, an Invariant will throw the given Message
 * when the condition evaluates to false while not interrupting execution.
 *
 * Error messages are hidden in production builds.
 */
export const invariant = (condition: boolean, message: string): boolean => {
  if (!production && typeof message !== `string`) throw new Error(`invariant(...): Second argument must be a string.`);
  if (!condition) {
    let err = production
      ? new Error(`An error has occured. For more information please switch to a development build.`)
      : new Error(message);
    err.name = `Invariant Violation`;
    throw err;
  }
  return true;
};

type ArgType = "boolean" | "number" | "string" | "symbol" | "array" | "function" | "object";

export const missingArgument = (argName: { [key: string]: any }, argType?: ArgType): string => {
  invariant(
    argName && typeof argName === `object` && Object.keys(argName).length === 1,
    `Missing Required Argument: Must pass a hash containing a single key.`
  );

  if (argType) {
    throw new Error(
      `Optional argument 'Type' must be a string with one of these values: boolean, number, string, symbol, array, function, or object`
    );
  }

	if (production) return `Missing Required Argument`;

	return `Missing Required Argument: '${Object.keys(argName)[0]}' cannot be empty.${!!argType &&
    ` Expected a value of type: ${argType}`}`;
};
