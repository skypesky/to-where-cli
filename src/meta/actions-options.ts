export interface ActionOptions {
  opts?: () => Record<string, string | boolean>;
  args: string[];
}
