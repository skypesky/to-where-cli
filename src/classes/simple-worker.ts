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

  cd(point: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async add(options: AddOptions): Promise<PointMeta> {
    const exits = await this.config.exists(options.point);

    if (exits && !options.force) {
      logger.error("重复了，除非你使用 --force");
      process.exit(1);
    }

    const meta = pick(options, ["point", "path"]);

    await this.config.add(meta);
    return meta;
  }

  delete(point: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  list(): Promise<PointMeta[]> {
    throw new Error("Method not implemented.");
  }

  clean(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
