export interface IsActive {
  name: string;
  values: Record<any, any> | undefined;
  value: any;
}

export const isActive = ({ name, values, value }: IsActive): boolean => {
  const currentValue = values?.[name];
  switch (true) {
    case values && Array.isArray(currentValue):
      return currentValue.includes(value);
    case typeof currentValue === `string`:
      return currentValue === value;
    default:
      return !!values?.[name];
  }
};
