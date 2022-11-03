import { PointMeta } from "../meta";

export interface AddOptions extends PointMeta {
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

  add(options: AddOptions): Promise<PointMeta>;

  delete(point: string): Promise<void>;

  list(): Promise<PointMeta[]>;

  clean(): Promise<void>;
}
