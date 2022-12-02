import { basename } from "path";
import { createProgram } from "../../src";
import { simpleWorker } from "../../src/classes/simple-worker";

jest.mock("../../src/classes/simple-worker");
const simpleWorkerMock = jest.mocked(simpleWorker);

describe(basename(__filename), () => {
  it("should be clean when no args", async () => {
    const program = createProgram();

    const cleanSpy = simpleWorkerMock.clean.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "clean"]);

    expect(cleanSpy).toHaveBeenCalledWith(false);
  });

  it("should be force clean when force is true", async () => {
    const program = createProgram();

    const cleanSpy = simpleWorkerMock.clean.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "clean", "-f"]);

    expect(cleanSpy).toHaveBeenCalledWith(true);
  });
});
