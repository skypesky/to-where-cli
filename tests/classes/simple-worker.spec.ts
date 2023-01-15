import { SimpleConfig } from "./../../src/classes/simple-config";
import { ConfigProtocol } from "./../../src/protocol/config.protocol";
import { basename, join } from "path";
import { SimpleWorker } from "../../src/classes/simple-worker";
import { Point } from "../../src/meta";
import open from "open";
import chalk from "chalk";
import { WorkerProtocol } from "../../src/protocol/worker.protocol";
import { cwd } from "process";

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
  const infoSpy = jest.spyOn(console, "info").mockReturnThis();

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

    it("should be open when point exists", async () => {
      openMock.mockReturnThis();

      await simpleWorker.add({
        ...point,
      });

      await simpleWorker.open(point.alias);

      expect(openMock).toBeCalledWith(point.address);
    });
  });

  describe("#add", () => {
    it("should be add point when point does not exists && is local dir path", async () => {
      await simpleWorker.add(point);

      expect(infoSpy).toBeCalledWith(`Added successfully`);
      expect(infoSpy).toBeCalledWith(
        `${chalk.blue(point.alias)} => ${chalk.cyan(
          point.address
        )} => ${chalk.green(point?.visits ?? 0)}`
      );
    });

    it("should be add point when point does not exists && address is local file path", async () => {
      await simpleWorker.add({
        ...point,
        address: "./index.html",
      });

      expect(infoSpy).toBeCalledWith(`Added successfully`);
      expect(infoSpy).toBeCalledWith(
        `${chalk.blue(point.alias)} => ${chalk.cyan(
          join(cwd(), "./index.html")
        )} => ${chalk.green(point?.visits ?? 0)}`
      );
    });

    it("should be throw an error when point exists and not force", async () => {
      await simpleWorker.add(point);
      await simpleWorker.add(point);

      expect(errorSpy).toBeCalledWith(
        `Alias ${chalk.red(
          point.alias
        )} already exists, you can use '-f' or '--force' to overwrite it`
      );

      expect(infoSpy).toBeCalledWith(
        `${chalk.blue(point.alias)} => ${chalk.cyan(
          point.address
        )} => ${chalk.green(point?.visits ?? 0)}`
      );
    });

    it("should be force add point when point exists and not force", async () => {
      await simpleWorker.add(point);
      await simpleWorker.add({
        ...point,
        force: true,
      });

      expect(infoSpy).toBeCalledWith(`Added successfully`);
      expect(infoSpy).toBeCalledWith(
        `${chalk.blue(point.alias)} => ${chalk.cyan(
          point.address
        )} => ${chalk.green(point?.visits ?? 0)}`
      );
    });
  });

  describe("#delete", () => {
    it("should be throw an error when alias not found", async () => {
      await simpleWorker.delete(point.alias);

      expect(errorSpy).toBeCalledWith(
        `Alias ${chalk.red(point.alias)} was not found`
      );
    });

    it("should be delete point when alias exists", async () => {
      await simpleWorker.add(point);
      await simpleWorker.delete(point.alias);

      expect(infoSpy).toBeCalledWith(
        `Alias ${chalk.blue(point.alias)} has been removed`
      );
      expect(infoSpy).toBeCalledWith(
        `${chalk.blue(point.alias)} => ${chalk.cyan(
          point.address
        )} => ${chalk.green(point?.visits ?? 0)}`
      );
    });
  });

  describe("#list", () => {
    it("should be list all points when not point arg", async () => {
      await simpleWorker.add(point); // times: 1
      await simpleWorker.add({
        ...point,
        alias: "test",
      }); // times: 1

      await simpleWorker.list(); // times: 2

      expect(infoSpy).toHaveBeenCalled();
    });

    it("should be list single point when has alias arg && alias not found", async () => {
      await simpleWorker.add(point);
      await simpleWorker.add({
        ...point,
        address: "test",
      });

      await simpleWorker.list("notFoundAlias");

      expect(errorSpy).toBeCalledWith(
        `Alias ${chalk.red("notFoundAlias")} was not found`
      );
    });

    it("should be list single point when has alias arg && alias exists", async () => {
      await simpleWorker.add(point);
      await simpleWorker.add({
        ...point,
        address: "test",
      });

      await simpleWorker.list(point.alias);

      expect(infoSpy).toHaveBeenCalled();
    });
  });

  describe("#clean", () => {
    it("should be throw an error when force is false", async () => {
      await simpleWorker.add(point);

      const allPoints: Point[] = await config.findAll();
      expect(allPoints.length).toEqual(1);

      await simpleWorker.clean();
      expect(errorSpy).toBeCalledWith(
        `To make sure you know what you're doing, you must use '-f' or '--force' to empty`
      );

      const finalPoints: Point[] = await config.findAll();
      expect(finalPoints.length).toEqual(1);
    });

    it("should be throw an error when force is false", async () => {
      await simpleWorker.add(point);

      const allPoints: Point[] = await config.findAll();
      expect(allPoints.length).toEqual(1);

      await simpleWorker.clean(true);

      const finalPoints: Point[] = await config.findAll();
      expect(finalPoints.length).toEqual(0);
    });
  });
});
