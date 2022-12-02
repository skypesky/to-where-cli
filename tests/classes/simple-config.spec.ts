import yaml from "js-yaml";
import { basename } from "path";
import { SimpleConfig } from "../../src/classes/simple-config";
import fsExtra from "fs-extra";
import { Config } from "../../src/meta";
jest.mock("fs-extra");
const fsExtraMock = jest.mocked(fsExtra, { shallow: true });

describe(basename(__filename), () => {
  beforeEach(() => {
    fsExtraMock.ensureFileSync.mockReturnThis();
    fsExtraMock.outputFileSync.mockReturnThis();
  });

  describe("#constructor", () => {
    it("should be create instance when no args", async () => {
      const simpleConfig = new SimpleConfig();

      expect(simpleConfig).toBeTruthy();
      expect(simpleConfig.options.configPath).toEqual(
        SimpleConfig.DEFAULT_CONFIG_PATH
      );
      expect(fsExtraMock.ensureFileSync).toBeCalledWith(
        SimpleConfig.DEFAULT_CONFIG_PATH
      );
    });

    it("should be create instance when has configPath", async () => {
      const configPath = "/user/config.json";
      const simpleConfig = new SimpleConfig({ configPath });

      expect(simpleConfig).toBeTruthy();
      expect(simpleConfig.options.configPath).toEqual(configPath);

      expect(fsExtraMock.ensureFileSync).toBeCalledWith(configPath);
    });
  });

  describe("#set", () => {
    it("should be set config when config.points is []", async () => {
      const simpleConfig = new SimpleConfig();
      const config: Config = {
        points: [],
      };

      await simpleConfig.set(config);

      expect(fsExtraMock.outputFile.mock.calls[0][0]).toContain(
        simpleConfig.options.configPath
      );
      expect(fsExtraMock.outputFile.mock.calls[0][1]).toContain(
        yaml.dump(config)
      );
    });
  });
});
