export {};

declare global {
  type $ZcnValidationParams<T = {}> = { error: string } & T;
}
