import { Point } from "../meta";

export interface AddOptions extends Point {
  /**
   *
   *
   * @type {boolean}
   * @memberof AddOptions
   */
  force?: boolean;
}

export interface WorkerProtocol {
  open(alias: string): Promise<void>;

  add(options: AddOptions): Promise<Point>;

  delete(alias: string): Promise<void>;

  list(alias?: string): Promise<void>;

  clean(force?: boolean): Promise<void>;
}
