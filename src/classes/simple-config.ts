import { ConfigMeta, PointMeta } from "../meta";
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

  async set(configMeta: ConfigMeta): Promise<void> {
    await outputFile(this.options.configPath, yaml.dump(configMeta));
  }

  async get(): Promise<ConfigMeta> {
    const yamlStr = await readFile(this.options.configPath, "utf-8");

    const configMeta: ConfigMeta =
      <ConfigMeta>yaml.load(yamlStr) ?? <ConfigMeta>{};

    configMeta.pointMetas = configMeta.pointMetas ?? [];

    return configMeta;
  }

  async add(pointMeta: PointMeta): Promise<void> {
    const configMeta: ConfigMeta = await this.get();

    if (await this.exists(pointMeta.point)) {
      await this.update(pointMeta);
    } else {
      configMeta.pointMetas.push(pointMeta);
    }

    await this.set(configMeta);
  }

  async delete(point: string): Promise<void> {
    const configMeta: ConfigMeta = await this.get();

    for (let i = 0; i < configMeta.pointMetas.length; i++) {
      if (configMeta.pointMetas[i].point === point) {
        configMeta.pointMetas.splice(i, 1);
      }
    }
  }

  async update(pointMeta: PointMeta): Promise<void> {
    const configMeta: ConfigMeta = await this.get();

    for (const meta of configMeta.pointMetas) {
      if (meta.point === pointMeta.point) {
        meta.path = pointMeta.path;
        break;
      }
    }

    await this.set(configMeta);
  }

  async exists(point: string): Promise<boolean> {
    const pointMeta = await this.findOne(point);
    return !isUndefined(pointMeta);
  }

  async findOne(point: string): Promise<PointMeta | undefined> {
    const pointMetas: PointMeta[] = await this.findAll();
    return pointMetas.find((p) => p.point === point);
  }

  async findAll(): Promise<PointMeta[]> {
    const configMeta: ConfigMeta = await this.get();
    return configMeta.pointMetas;
  }
}
