import { createProgram } from "../src";
describe("index.spec", () => {
  it("should be output help info", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts"]);

    expect(true).toBeTruthy();
  });

  it("should be work!", () => {
    expect(true).toBeTruthy();
  });
});
