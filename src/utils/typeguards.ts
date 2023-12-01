import { TypeGuard } from "./utilTypes.js";

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isObject<T = unknown>(value: T): value is T & object {
  return typeof value === "object" && value !== null;
}

export function withField<T extends object, FieldName extends PropertyKey>(
  fieldName: FieldName,
  value: object
): value is T & { [key in FieldName]: unknown } {
  return fieldName in value;
}

export function isObjWithField<T, FieldName extends PropertyKey>(
  fieldName: FieldName,
  value: T
): value is T & Record<FieldName, unknown>;

export function isObjWithField<T, FieldName extends PropertyKey, FieldType>(
  fieldName: FieldName,
  value: T,
  typeguard: TypeGuard<unknown, FieldType>
): value is T & Record<FieldName, FieldType>;

export function isObjWithField<
  T,
  FieldName extends PropertyKey,
  FieldType = unknown
>(
  fieldName: FieldName,
  value: T,
  typeguard?: TypeGuard<unknown, FieldType>
): value is T & Record<FieldName, FieldType> {
  if (!isObject(value)) return false;
  if (!withField(fieldName, value)) return false;
  if (!typeguard) return true;
  return typeguard(value[fieldName]);
}

export function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}
