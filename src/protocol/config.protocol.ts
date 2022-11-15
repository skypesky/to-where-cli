import { Point } from "../meta";
import { Config } from "./../meta/config.meta";

export interface ConfigProtocol {
  set(config: Config): Promise<void>;
  get(): Promise<Config>;

  add(point: Point): Promise<void>;
  delete(alias: string): Promise<void>;
  update(point: Point): Promise<void>;

  exists(alias: string): Promise<boolean>;
  findOne(alias: string): Promise<Point | undefined>;
  findAll(): Promise<Point[]>;
}
