import { ChildProcess } from "child_process";
import currnetOS from "current-os";
import { default as defaultOpen, Options } from "open";
import exec from "shelljs.exec";

export function open(target: string, options?: Options): Promise<ChildProcess> {
  if (currnetOS.isWindows) {
    // @see https://www.npmjs.com/package/shelljs.exec
    exec(`start ${target}`);
    return null;
  }

  return defaultOpen(target, options);
}
