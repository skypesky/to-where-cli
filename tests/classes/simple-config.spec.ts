import yaml from "js-yaml";
import { basename, join } from "path";
import { SimpleConfig } from "../../src/classes/simple-config";
import { existsSync } from "fs-extra";

describe(basename(__filename), () => {
  const configPath = join(__dirname, "test.config.yaml");

  beforeEach(() => {});

  describe("#constructor", () => {
    it("should be create instance when no args", async () => {
      const simpleConfig = new SimpleConfig();

      expect(existsSync(simpleConfig.options.configPath)).toBeTruthy();

      await simpleConfig.destroy();
    });
  });

  //describe("#set", () => {
  //  it("should be set config when config.points is []", async () => {
  //    const simpleConfig = new SimpleConfig();
  //    const config: Config = {
  //      points: [],
  //    };

  //    await simpleConfig.set(config);

  //    expect(fsExtraMock.outputFile.mock.calls[0][0]).toContain(
  //      simpleConfig.options.configPath
  //    );
  //    expect(fsExtraMock.outputFile.mock.calls[0][1]).toContain(
  //      yaml.dump(config)
  //    );
  //  });
  //});

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
