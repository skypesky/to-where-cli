import { AddOptions } from "./../protocol/worker.protocol";
import { SimpleConfig, SimpleConfigOptions } from "./simple-config";
import { PointMeta } from "../meta";
import { ConfigProtocol } from "../protocol/config.protocol";
import { WorkerProtocol } from "../protocol/worker.protocol";
import { logger } from "../utils/logger";
import { omit, pick } from "lodash";

export class SimpleWorker implements WorkerProtocol {
  private readonly config: ConfigProtocol;

  constructor() {
    this.config = new SimpleConfig();
  }

  async cd(point: string): Promise<void> {
    const pointMeta = await this.config.findOne(point);

    if (!pointMeta) {
      logger.error("不存在的endpoint");
      process.exit(1);
    }
    logger.info(pointMeta);
  }
  async add(options: AddOptions): Promise<PointMeta> {
    const exits = await this.config.exists(options.point);

    if (exits && !options.force) {
      logger.error("重复了，除非你使用 --force");
      process.exit(1);
    }

    const pointMeta = pick(options, ["point", "path"]);

    await this.config.add(pointMeta);
    return pointMeta;
  }

  async delete(point: string): Promise<void> {
    await this.config.delete(point);
  }

  async list(): Promise<PointMeta[]> {
    return this.config.findAll();
  }

  async clean(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
