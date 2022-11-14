import { Config, Point } from "../meta";
import { ConfigProtocol } from "./../protocol/config.protocol";
import yaml from "js-yaml";
import { ensureFileSync, outputFile, readFile } from "fs-extra";
import { isUndefined } from "lodash";
import { join } from "path";
import { homedir } from "os";

export interface SimpleConfigOptions {
  configPath: string;
}

export class SimpleConfig implements ConfigProtocol {
  private readonly options: SimpleConfigOptions = {} as SimpleConfigOptions;
  public static readonly DEFAULT_CONFIG_PATH: string = join(
    homedir(),
    ".config.yml"
  );

  constructor(options: SimpleConfigOptions = {} as SimpleConfigOptions) {
    this.options.configPath =
      options.configPath ?? SimpleConfig.DEFAULT_CONFIG_PATH;
    ensureFileSync(this.options.configPath);
  }

  async set(config: Config): Promise<void> {
    await outputFile(this.options.configPath, yaml.dump(config));
  }

  async get(): Promise<Config> {
    const yamlStr = await readFile(this.options.configPath, "utf-8");

    const config: Config = <Config>yaml.load(yamlStr) ?? <Config>{};

    config.points = config.points ?? [];

    return config;
  }

  async add(point: Point): Promise<void> {
    const config: Config = await this.get();

    if (await this.exists(point.alias)) {
      await this.update(point);
    } else {
      config.points.push(point);
      await this.set(config);
    }
  }

  async delete(point: string): Promise<void> {
    const config: Config = await this.get();

    for (let i = 0; i < config.points.length; i++) {
      if (config.points[i].alias === point) {
        config.points.splice(i, 1);
      }
    }

    await this.set(config);
  }

  async update(point: Point): Promise<void> {
    const config: Config = await this.get();

    for (const element of config.points) {
      if (element.alias === point.alias) {
        element.address = point.address;
        break;
      }
    }

    await this.set(config);
  }

  async exists(point: string): Promise<boolean> {
    const _point = await this.findOne(point);
    return !isUndefined(_point);
  }

  async findOne(point: string): Promise<Point | undefined> {
    const points: Point[] = await this.findAll();
    return points.find((p) => p.alias === point);
  }

  async findAll(): Promise<Point[]> {
    const config: Config = await this.get();
    return config.points;
  }
}
