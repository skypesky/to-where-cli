import { basename } from "path";
import { open } from "../../../src/classes/open";
import { createProgram } from "../../../src";

jest.mock("../../../src/classes/open");
const openMock = jest.mocked(open);

describe(basename(__filename), () => {
  const bingWebsite = `https://www.bing.com/search?q=`;

  it("the bing page should be opened when key is not set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "bing"]);

    expect(openMock).toHaveBeenCalledWith(bingWebsite);
  });

  it("the bing page should be opened when keyword was set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "bing", "to-where-cli"]);

    expect(openMock).toHaveBeenCalledWith(`${bingWebsite}to-where-cli`);
  });
});
