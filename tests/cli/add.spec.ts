import { basename } from "path";
import { createProgram } from "../../src";
import { simpleWorker } from "../../src/classes/simple-worker";

jest.mock("../../src/classes/simple-worker");
const simpleWorkerMock = jest.mocked(simpleWorker);

describe(basename(__filename), () => {
  it("should be add current dirname as alias and current dir as address  when no args", async () => {
    const program = createProgram();

    const addSpy = simpleWorkerMock.add.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "add"]);

    const cwd = process.cwd();
    expect(addSpy).toHaveBeenCalledWith({
      alias: basename(cwd),
      address: cwd,
      force: false,
    });
  });

  it("should be add dynamic alias and current dir as address when only has alias", async () => {
    const program = createProgram();

    const addSpy = simpleWorkerMock.add.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "add", "home"]);

    const cwd = process.cwd();
    expect(addSpy).toHaveBeenCalledWith({
      alias: "home",
      address: cwd,
      force: false,
    });
  });

  it("should be add dynamic alias and dynamic dir as address when has alias and dir", async () => {
    const program = createProgram();

    const addSpy = simpleWorkerMock.add.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "add", "home", "/"]);

    expect(addSpy).toHaveBeenCalledWith({
      alias: "home",
      address: "/",
      force: false,
    });
  });

  it("should be add dynamic alias and dynamic dir as address when has alias, dir and force", async () => {
    const program = createProgram();

    const addSpy = simpleWorkerMock.add.mockReturnThis();

    await program.parseAsync(["ts-node", "index.ts", "add", "home", "/", "-f"]);

    expect(addSpy).toHaveBeenCalledWith({
      alias: "home",
      address: "/",
      force: true,
    });
  });
});
