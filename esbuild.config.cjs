// eslint-disable-next-line @typescript-eslint/no-var-requires
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/cli/index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    platform: "node",
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
