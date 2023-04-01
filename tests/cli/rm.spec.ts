import { basename } from "path";
import { createProgram } from "../../src";
import { simpleWorker } from "../../src/classes/simple-worker";

jest.mock("../../src/classes/simple-worker");
const simpleWorkerMock = jest.mocked(simpleWorker);

describe(basename(__filename), () => {
  // FIXME: 有空修复一下吧 @jianchao
  it.skip("should be rm when no args", async () => {
    const program = createProgram();
    const writeSpy = jest.spyOn(process.stderr, "write").mockReturnThis();
    const exitSpy = jest.spyOn(process, "exit").mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "rm"]);

    expect(writeSpy.mock.calls[0][0]).toContain(
      `error: missing required argument 'point'`
    );
    expect(exitSpy).toBeCalled();
  });

  it("should be rm dynamic point when has point", async () => {
    const program = createProgram();

    const deleteSpy = simpleWorkerMock.delete.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "rm", "home"]);

    expect(deleteSpy).toHaveBeenCalledWith("home");
  });
});
