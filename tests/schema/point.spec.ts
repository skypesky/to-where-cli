import { basename } from "path";
import { Point } from "../../src/meta";
import { PointSchema } from "../../src/schema";

describe(basename(__filename), () => {
  const point: Point = {
    alias: "google",
    address: "https://www.google.com",
  };

  it("should work", async () => {
    const { error, value } = PointSchema.validate(point);

    expect(error).toBeUndefined();
    expect(value).toEqual({
      ...point,
      visits: 0,
    });
  });
});
