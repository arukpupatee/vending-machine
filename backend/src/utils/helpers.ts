import R from 'ramda';

export function isExistValue<T>(optionalValue: T | undefined | null): optionalValue is T {
  return !R.isNil(optionalValue);
}

export function optionalToNullable<T>(optionalValue: T | undefined): T | null {
  return optionalValue ?? null;
}
