import { Point } from "../meta";

export interface AddOptions extends Point {
  /**
   *
   * @default false
   * @type {boolean}
   * @memberof AddOptions
   */
  force: boolean;
}

export interface WorkerProtocol {
  cd(point: string): Promise<void>;

  add(options: AddOptions): Promise<Point>;

  delete(point: string): Promise<void>;

  list(): Promise<void>;

  clean(): Promise<void>;
}
