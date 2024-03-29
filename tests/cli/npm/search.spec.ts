import { basename } from "path";
import { open } from "../../../src/classes/open";
import { createProgram } from "../../../src";

jest.mock("../../../src/classes/open");
const openMock = jest.mocked(open);

describe(basename(__filename), () => {
  const npmWebsite = `https://www.npmjs.com`;

  it("the npm page should be opened when key is not set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm"]);

    expect(openMock).toHaveBeenCalledWith(npmWebsite);
  });

  it("the npm page should be opened when keyword was set", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm", "to-where-cli"]);

    expect(openMock).toHaveBeenCalledWith(`${npmWebsite}/search?q=to-where-cli`);
  });

  it("the npm page should be opened when keyword was set && -c", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm", "to-where-cli", "-c"]);

    expect(openMock).toHaveBeenCalledWith(`${npmWebsite}/package/to-where-cli?activeTab=code`);
  });

  it("the npm page should be opened when keyword was set && -d", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm", "to-where-cli", "-d"]);

    expect(openMock).toHaveBeenCalledWith(`${npmWebsite}/package/to-where-cli?activeTab=dependencies`);
  });

  it("the npm page should be opened when keyword was set && -v", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "npm", "to-where-cli", "-v"]);

    expect(openMock).toHaveBeenCalledWith(`${npmWebsite}/package/to-where-cli?activeTab=versions`);
  });
});
