// @see Global .d.ts https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
declare namespace Commander {
  export interface ActionOptions {
    opts: () => any;
    args: string[];
  }
}
