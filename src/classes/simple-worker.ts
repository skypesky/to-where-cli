import { AddOptions } from "./../protocol/worker.protocol";
import { SimpleConfig } from "./simple-config";
import { Point } from "../meta";
import { ConfigProtocol } from "../protocol/config.protocol";
import { WorkerProtocol } from "../protocol/worker.protocol";
import { logger } from "../utils/logger";
import { pick } from "lodash";
import chalk from "chalk";
import open from "open";


export class SimpleWorker implements WorkerProtocol {
  private readonly config: ConfigProtocol;

  constructor(config: ConfigProtocol = new SimpleConfig()) {
    this.config = config;
  }

  async open(alias: string): Promise<void> {
    const _point = await this.config.find(alias);

    if (!_point) {
      logger.error(`Alias ${chalk.red(alias)} was not found`);
      return;
    }

    await open(_point.address);
  }

  async add(options: AddOptions): Promise<Point> {
    const existsPoint: Point = await this.config.find(options.alias);

    if (existsPoint && !options.force) {
      logger.error(
        `Alias ${chalk.red(
          options.alias
        )} already exists, you can use '-f' or '--force' to overwrite it`
      );

      this.prettyPrint([existsPoint])

      return;
    }

    const point = pick(options, ["alias", "address"]);
    await this.config.add(point);

    logger.info('Added successfully')
    this.prettyPrint([point]);
    return point;
  }

  async delete(alias: string): Promise<void> {

    const point =await this.config.find(alias);
    
    if (!point) {
      logger.error(`Alias ${chalk.red(alias)} was not found`);
      return;
    }

    await this.config.delete(alias);

    logger.info(`Alias ${chalk.blue(alias)} has been removed`);
    this.prettyPrint([point])
  }

  async list(alias?: string): Promise<void> {
    if (alias) {
      const _point = await this.config.find(alias);

      if (!_point) {
        logger.error(`Alias ${chalk.red(alias)} was not found`);
        return;
      }

      this.prettyPrint([_point]);
      return;
    }

    const points = await this.config.findAll();

    this.prettyPrint(points);
  }

  async clean(force = false): Promise<void> {
    if (!force) {
      logger.error(
        "To make sure you know what you're doing, you must use '-f' or '--force' to empty"
      );
      return;
    }

    await this.config.deleteAll();
  }

   prettyPrint(points: Point[]): void {
    for (const point of points) {
      logger.info(`${chalk.blue(point.alias)} => ${chalk.cyan(point.address)}`);
    }
  }
}

export const simpleWorker = new SimpleWorker();
