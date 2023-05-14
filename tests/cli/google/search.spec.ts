import { basename } from "path";
import { open } from "../../../src/classes/open";
import { createProgram } from "../../../src";

jest.mock("../../../src/classes/open");
const openMock = jest.mocked(open);

describe(basename(__filename), () => {
  const googleWebsite = `https://www.google.com/search?q=`;

  it("the bing google should be opened when key is not set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "google"]);

    expect(openMock).toHaveBeenCalledWith(googleWebsite);
  });

  it("the bing google should be opened when keyword was set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "google", "to-where-cli"]);

    expect(openMock).toHaveBeenCalledWith(`${googleWebsite}to-where-cli`);
  });
});
