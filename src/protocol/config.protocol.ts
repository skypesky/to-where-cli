import { Point } from "../meta";
import { Config } from "./../meta";

export interface ConfigProtocol {
  set(config: Config): Promise<void>;
  get(): Promise<Config>;

  add(point: Point): Promise<void>;
  update(point: Point): Promise<void>;

  exists(alias: string): Promise<boolean>;
  find(alias: string): Promise<Point | undefined>;
  findAll(): Promise<Point[]>;

  delete(alias: string): Promise<void>;
  deleteAll(): Promise<void>;

  destroy(): Promise<void>;
}
