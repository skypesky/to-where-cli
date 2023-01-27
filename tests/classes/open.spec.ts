import { basename } from "path";
import { open } from "../../src";
import { default as defaultOpen } from "open";
import exec from "shelljs.exec";

jest.mock("open");
const defaultOpenMock = jest.mocked(defaultOpen);

jest.mock("shelljs.exec");
const execMock = jest.mocked(exec);

// @see Jest - Mock a constant property from a module for a specific test https://stackoverflow.com/a/65082112
const currentOSMock = jest.requireMock("current-os");
jest.mock("current-os", () => {
  return {
    isWindows: false,
    isMac: false,
  };
});

describe(basename(__filename), () => {
  const target = "xxx";

  it("should be open when os is windows", async () => {
    currentOSMock.isWindows = true;
    execMock.mockReturnThis();
    await open(target);

    expect(execMock).toBeCalledWith(`start ${target}`);
  });

  it("should be open when os is other system", async () => {
    currentOSMock.isWindows = false;
    defaultOpenMock.mockReturnThis();
    await open(target);

    expect(defaultOpenMock).toBeCalledWith(target, undefined);
  });
});
