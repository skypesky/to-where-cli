import { PointMeta } from "../meta";

export interface ControlProtocol {
  cd(point: string): Promise<void>;

  create(point: string, path: string, force: boolean): Promise<PointMeta>;
  
  delete(point: string): Promise<void>;

  show(point: string): Promise<PointMeta>;

  list(): Promise<PointMeta[]>;

  clean(): Promise<void>;
}