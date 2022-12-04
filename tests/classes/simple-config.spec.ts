import { basename, join } from "path";
import { SimpleConfig } from "../../src/classes/simple-config";
import { existsSync } from "fs-extra";
import { Config, Point } from "../../src/meta";

describe(basename(__filename), () => {
  const configPath = join(__dirname, "test.config.yaml");
  const point: Point = {
    alias: "home",
    address: "/",
  };

  let simpleConfig: SimpleConfig;

  beforeEach(() => {
    simpleConfig = new SimpleConfig({ configPath });
  });

  afterEach(async () => {
    await simpleConfig.destroy();
  });

  describe("#constructor", () => {
    it("should be create instance when no args", async () => {
      expect(existsSync(simpleConfig.options.configPath)).toBeTruthy();
    });
  });

  describe("#set", () => {
    it("should be set config when not config", async () => {
      const config: Config = {} as Config;
      await simpleConfig.set(config);

      const currentConfig: Config = await simpleConfig.get();

      expect(currentConfig).toStrictEqual({
        points: [],
      });
    });

    it("should be set config when has config.points", async () => {
      const config: Config = {
        points: [point],
      };
      await simpleConfig.set(config);

      const currentConfig: Config = await simpleConfig.get();

      expect(currentConfig).toStrictEqual(config);
    });
  });

  describe("#get", () => {
    it("should be get config when config is empty", async () => {
      const config: Config = await simpleConfig.get();

      expect(config).toMatchObject({
        points: [],
      });
    });

    it("should be get config when has config", async () => {
      const config: Config = {
        points: [point],
      };
      await simpleConfig.set(config);

      const currentConfig: Config = await simpleConfig.get();

      expect(currentConfig).toStrictEqual(config);
    });
  });

  describe("#add", () => {
    it("should be add dynamic point when point does exists", async () => {
      await simpleConfig.add(point);

      const config: Config = await simpleConfig.get();

      expect(config).toMatchObject({
        points: [point],
      });
    });

    it("should be override dynamic point when point exists", async () => {
      await simpleConfig.add({
        ...point,
        address: "/old",
      });
      await simpleConfig.add(point);

      const config: Config = await simpleConfig.get();

      expect(config).toMatchObject({
        points: [point],
      });
    });
  });

  describe("#delete", () => {
    it("should be work when point does exists", async () => {
      await simpleConfig.delete(point.alias);
      const latestConfig: Config = await simpleConfig.get();
      expect(latestConfig).toMatchObject({
        points: [],
      });
    });

    it("should be delete point when point exists", async () => {
      await simpleConfig.add(point);
      const config: Config = await simpleConfig.get();
      expect(config).toMatchObject({
        points: [point],
      });

      await simpleConfig.delete(point.alias);
      const latestConfig: Config = await simpleConfig.get();
      expect(latestConfig).toMatchObject({
        points: [],
      });
    });
  });

  describe("#deleteAll", () => {
    it("should be work when point does exists", async () => {
      await simpleConfig.add(point);
      await simpleConfig.deleteAll();
      const latestConfig: Config = await simpleConfig.get();
      expect(latestConfig).toMatchObject({
        points: [],
      });
    });
  });
});
