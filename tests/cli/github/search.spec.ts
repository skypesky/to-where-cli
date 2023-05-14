import { basename } from "path";
import { open } from "../../../src/classes/open";
import { createProgram } from "../../../src";

jest.mock("../../../src/classes/open");
const openMock = jest.mocked(open);

describe(basename(__filename), () => {
  const githubWebsite = `https://github.com/search?q=`;

  it("the github page should be opened when key is not set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "github"]);

    expect(openMock).toHaveBeenCalledWith(githubWebsite);
  });

  it("the github page should be opened when keyword was set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "github", "to-where-cli"]);

    expect(openMock).toHaveBeenCalledWith(`${githubWebsite}to-where-cli`);
  });
});
