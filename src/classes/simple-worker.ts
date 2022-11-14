import { AddOptions } from "./../protocol/worker.protocol";
import { SimpleConfig } from "./simple-config";
import { ConfigMeta, PointMeta } from "../meta";
import { ConfigProtocol } from "../protocol/config.protocol";
import { WorkerProtocol } from "../protocol/worker.protocol";
import { logger } from "../utils/logger";
import { pick } from "lodash";
import fs from "fs-extra";
import chalk from "chalk";
import open from "open";

export class SimpleWorker implements WorkerProtocol {
  private readonly config: ConfigProtocol;

  constructor() {
    this.config = new SimpleConfig();
  }

  async cd(point: string): Promise<void> {
    const pointMeta = await this.config.findOne(point);

    if (!pointMeta) {
      logger.error(`Unknown point: ${chalk.red(point)}`);
      process.exit(1);
    }

    await open(pointMeta.dir);

    process.exit(0);
  }

  async add(options: AddOptions): Promise<PointMeta> {
    const exits = await this.config.exists(options.point);

    if (exits && !options.force) {
      logger.error(
        `Point(${chalk.blue(
          options.point
        )}) already exists, you can use '-f' or '--force' to overwrite it`
      );
      process.exit(1);
    }

    const pointMeta = pick(options, ["point", "dir"]);
    await this.config.add(pointMeta);

    logger.info(`added ${pointMeta.point} => ${pointMeta.dir}`);
    return pointMeta;
  }

  async delete(point: string): Promise<void> {
    await this.config.delete(point);
  }

  async list(point?: string): Promise<void> {
    if (point) {
      const pointMeta = await this.config.findOne(point);

      if (!pointMeta) {
        // FIXME: this should
        logger.info("TODO point not found!");
        process.exit(1);
      }

      logger.info(`${pointMeta.point} => ${pointMeta.dir}`);
      return;
    }

    const pointMetas = await this.config.findAll();

    for (const pointMeta of pointMetas) {
      logger.info(`${pointMeta.point} => ${pointMeta.dir}`);
    }
  }

  async clean(force = false, all = false): Promise<void> {
    if (!force) {
      logger.error("force = true");
      process.exit(1);
    }

    const configMetas: ConfigMeta = await this.config.get();
    if (all) {
      configMetas.pointMetas.length = 0;
    } else {
      configMetas.pointMetas = configMetas.pointMetas.filter((p) =>
        fs.existsSync(p.dir)
      );
    }

    await this.config.set(configMetas);
  }
}
