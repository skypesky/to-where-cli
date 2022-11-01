import { PointMeta } from "../meta";

export interface WorkerProtocol {
  cd(point: string): Promise<void>;

  create(point: string, path: string, force: boolean): Promise<PointMeta>;

  delete(point: string): Promise<void>;

  list(): Promise<PointMeta[]>;

  clean(): Promise<void>;
}