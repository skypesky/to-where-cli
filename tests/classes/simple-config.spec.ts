import yaml from "js-yaml";
import { basename, join } from "path";
import { SimpleConfig } from "../../src/classes/simple-config";
import { existsSync } from "fs-extra";
import { Config } from "../../src/meta";

describe(basename(__filename), () => {
  const configPath = join(__dirname, "test.config.yaml");

  let simpleConfig: SimpleConfig;

  beforeEach(() => {
    simpleConfig = new SimpleConfig();
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
        points: [
          {
            alias: "home",
            address: "/",
          },
        ],
      };
      await simpleConfig.set(config);

      const currentConfig: Config = await simpleConfig.get();

      expect(currentConfig).toStrictEqual(config);
    });
  });

  //describe("#get", () => {
  //  it("should be get config when config is empty", async () => {
  //    const simpleConfig = new SimpleConfig();

  //    const config: Config = await simpleConfig.get();

  //    expect(fsExtraMock.readFile).toHaveBeenCalledWith(
  //      simpleConfig.options.configPath,
  //      "utf-8"
  //    );

  //    expect(config).toMatchObject({
  //      points: [],
  //    });
  //  });

  //  it("should be get config when has config", async () => {
  //    const simpleConfig = new SimpleConfig();

  //    const config: Config = await simpleConfig.get();

  //    expect(fsExtraMock.readFile).toHaveBeenCalledWith(
  //      simpleConfig.options.configPath,
  //      "utf-8"
  //    );

  //    expect(config).toMatchObject({
  //      points: [],
  //    });
  //  });
  //});
});
