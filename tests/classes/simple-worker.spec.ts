import { SimpleConfig } from "./../../src/classes/simple-config";
import { ConfigProtocol } from "./../../src/protocol/config.protocol";
import { basename, join } from "path";
import { SimpleWorker } from "../../src/classes/simple-worker";
import { Point } from "../../src/meta";
import open from "open";
import chalk from "chalk";
import { WorkerProtocol } from "../../src/protocol/worker.protocol";

jest.mock("open");
const openMock = jest.mocked(open, { shallow: true });

describe(basename(__filename), () => {
  let simpleWorker: WorkerProtocol;
  let config: ConfigProtocol;
  const point: Point = {
    alias: "home",
    address: "/",
  };

  const errorSpy = jest.spyOn(console, "error").mockReturnThis();

  beforeEach(() => {
    config = new SimpleConfig({
      configPath: join(__dirname, "test.worker.config.yml"),
    });
    simpleWorker = new SimpleWorker(config);
  });

  afterEach(async () => {
    await config.destroy();
  });

  describe("#constructor", () => {
    it("should be created", () => {
      expect(simpleWorker).toBeTruthy();
    });
  });

  describe("#open", () => {
    it("should be throw an error when alias not found", async () => {
      await simpleWorker.open(point.alias);

      expect(errorSpy.mock.calls[0][0]).toContain(
        `Alias ${chalk.red(point.alias)} was not found`
      );
    });

    it("should be throw an error when alias not found", async () => {
      openMock.mockReturnThis();

      await simpleWorker.add({
        ...point,
      });

      await simpleWorker.open(point.alias);

      expect(openMock).toBeCalledWith(point.address);
    });
  });
});
