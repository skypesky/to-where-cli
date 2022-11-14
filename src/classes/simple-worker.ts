import { AddOptions } from "./../protocol/worker.protocol";
import { SimpleConfig } from "./simple-config";
import { Config, Point } from "../meta";
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
    const _point = await this.config.findOne(point);

    if (!_point) {
      logger.error(`Alias ${chalk.red(_point)} was not found`);
      process.exit(1);
    }

    await open(_point.address);

    process.exit(0);
  }

  async add(options: AddOptions): Promise<Point> {
    const exits = await this.config.exists(options.alias);

    if (exits && !options.force) {
      logger.error(
        `Alias(${chalk.blue(
          options.alias
        )}) already exists, you can use '-f' or '--force' to overwrite it`
      );
      process.exit(1);
    }

    const point = pick(options, ["alias", "address"]);
    await this.config.add(point);

    logger.info(`added ${point.alias} => ${point.address}`);
    return point;
  }

  async delete(point: string): Promise<void> {
    if (!(await this.config.exists(point))) {
      logger.error(`Alias ${chalk.red(point)} was not found`);
      process.exit(1);
    }
    await this.config.delete(point);
    logger.info(`Alias ${chalk.blue(point)} has been removed`);
  }

  async list(point?: string): Promise<void> {
    if (point) {
      const _point = await this.config.findOne(point);

      if (!_point) {
        logger.error(`Alias ${chalk.red(_point.alias)} was not found`);
        process.exit(1);
      }

      logger.info(
        `${chalk.blue(_point.alias)} => ${chalk.cyan(_point.address)}`
      );
      process.exit();
    }

    const points = await this.config.findAll();

    for (const point of points) {
      logger.info(`${chalk.blue(point.alias)} => ${chalk.cyan(point.address)}`);
    }
  }

  async clean(force = false, all = false): Promise<void> {
    if (!force) {
      logger.error("force = true");
      process.exit(1);
    }

    const configs: Config = await this.config.get();
    if (all) {
      configs.points.length = 0;
    } else {
      configs.points = configs.points.filter((p) => fs.existsSync(p.address));
    }

    await this.config.set(configs);
  }
}
