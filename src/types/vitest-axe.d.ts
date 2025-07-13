import "vitest";

declare module "vitest" {
  interface Assertion<T = any> {
    toHaveNoViolations(): void;
  }
}
