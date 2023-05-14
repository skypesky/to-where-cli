import { basename } from "path";
import { open } from "../../../src/classes/open";
import { createProgram } from "../../../src";

jest.mock("../../../src/classes/open");
const openMock = jest.mocked(open);

describe(basename(__filename), () => {
  it("the npm page should be opened when key is not set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm"]);

    expect(openMock).toHaveBeenCalledWith(`https://www.npmjs.com/search?q=`);
  });

  it("the npm page should be opened when keyword was set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm", "to-where-cli"]);

    expect(openMock).toHaveBeenCalledWith(
      `https://www.npmjs.com/search?q=to-where-cli`
    );
  });
});
