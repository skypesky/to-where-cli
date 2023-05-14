import { basename } from "path";
import { open } from "../../../src/classes/open";
import { createProgram } from "../../../src";

jest.mock("../../../src/classes/open");
const openMock = jest.mocked(open);

describe(basename(__filename), () => {
  const baiduWebsite = `https://www.baidu.com/s?wd=`;

  it("the baidu page should be opened when key is not set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "baidu"]);

    expect(openMock).toHaveBeenCalledWith(baiduWebsite);
  });

  it("the baidu page should be opened when keyword was set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "baidu", "to-where-cli"]);

    expect(openMock).toHaveBeenCalledWith(`${baiduWebsite}to-where-cli`);
  });
});
