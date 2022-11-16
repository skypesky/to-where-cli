/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ActionOptions {
  opts?: () => Record<string, string | boolean>;
  args: string[];
  [key: string]: any;
}
