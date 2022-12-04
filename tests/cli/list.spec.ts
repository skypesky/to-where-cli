import { basename } from "path";
import { createProgram } from "../../src";
import { simpleWorker } from "../../src/classes/simple-worker";

jest.mock("../../src/classes/simple-worker");
const simpleWorkerMock = jest.mocked(simpleWorker);

describe(basename(__filename), () => {
  it("should be list when no args", async () => {
    const program = createProgram();

    const listSpy = simpleWorkerMock.list.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "list"]);

    expect(listSpy).toHaveBeenCalledWith(undefined);
  });

  it("should be list dynamic point when has dynamic", async () => {
    const program = createProgram();

    const listSpy = simpleWorkerMock.list.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "list", "home"]);

    expect(listSpy).toHaveBeenCalledWith("home");
  });
});
