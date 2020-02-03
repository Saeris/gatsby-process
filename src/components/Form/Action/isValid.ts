export interface IsValid {
  name: string;
  value?: string;
  group?: boolean;
  errors: Record<any, any> | undefined;
}

export const isValid = ({ name, value, group = false, errors }: IsValid): boolean => {
  if (!errors) return false;
  if (value && group) return !errors?.[value];
  return !errors?.[name];
};
