import { simpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";
import { isEmpty } from "lodash";
import { multiselect } from "@clack/prompts";
import prompts from "prompts";

const removeCommand = new Command();

removeCommand
  .name("rm")
  .description("Remove an alias from your address")
  .argument("[point]", "Enter the point to be deleted")
  .action(async (alias: string) => {
    if (isEmpty(alias)) {
      const points = await simpleWorker.findAll();
      const choices = points.map((point) => ({
        value: point.alias,
        title: `${point.alias} => ${point.visits}`,
      }));

      const response = await prompts([
        {
          type: "multiselect",
          name: "Select the alias to be deleted",
          message: "Select the alias to be deleted233",
          choices: choices,
        },
      ]);

      return;
    }

    return simpleWorker.delete(alias);
  });

export { removeCommand };
