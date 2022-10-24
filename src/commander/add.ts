import { Command } from "commander";

const addCommander = new Command();

addCommander.option("<point>");

export {
    addCommander
}
