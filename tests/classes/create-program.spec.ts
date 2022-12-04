import { basename } from "path";
import { createProgram } from "../../src";
import { simpleWorker } from "../../src/classes/simple-worker";

jest.mock("../../src/classes/simple-worker");
const simpleWorkerMock = jest.mocked(simpleWorker);

describe(basename(__filename), () => {
  it("should be output help info when no args", async () => {
    const program = createProgram();

    const helpSpy = jest.spyOn(program, "help").mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts"]);

    expect(helpSpy).toHaveBeenCalled();
  });

  it("should be invoke worker when alias has value", async () => {
    simpleWorkerMock.open.mockResolvedValue();
    const existSpy = jest.spyOn(process, "exit").mockReturnThis();

    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "home"]);

    expect(simpleWorkerMock.open).toHaveBeenCalled();
    expect(existSpy).toHaveBeenCalled();
  });
});
