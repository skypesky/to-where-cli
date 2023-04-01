import { simpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";
import { isEmpty } from "lodash";
import prompts from "prompts";
import { Point } from "../meta";
import { logger } from "../utils/logger";

const removeCommand = new Command();
removeCommand
  .name("rm")
  .description("Remove an alias from your address")
  .argument("[alias]", "Enter the point to be deleted")
  .action(async (alias: string) => {
    if (isEmpty(alias)) {
      const points = await simpleWorker.findAll();
      const sorted = (a: Point, b: Point): number => {
        const aVisits = a?.visits ?? 0;
        const bVisits = b?.visits ?? 0;
        return aVisits - bVisits;
      };

      const choices = points.sort(sorted).map((point) => ({
        value: point.alias,
        // @FIXME：point?.visits 需要修改一下，解决脏数据的问题 @jianchao
        title: `${point.alias} => ${point.address} => ${point?.visits ?? 0}`,
      }));

      const response = await prompts([
        {
          type: "multiselect",
          name: "removeAliases",
          message: "Select the alias to be deleted233",
          choices: choices,
        },
      ]);

      const aliases: string[] = response?.["removeAliases"] ?? [];

      for (const _alias of aliases) {
        // @FIXME: 请使用更加优雅的方法，目前的代码效率略低 @jianchao
        await simpleWorker.delete(_alias);
      }

      logger.info(`Deleted successfully!`);

      return;
    }

    return simpleWorker.delete(alias);
  });

export { removeCommand };
