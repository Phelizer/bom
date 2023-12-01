export interface TypeGuard<Input, Output extends Input> {
  (value: Input): value is Output;
}
