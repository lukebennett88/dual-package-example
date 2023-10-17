import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  cjsInterop: true,
  clean: !options.watch,
  dts: true,
  entry: ["src/*.ts"],
  format: ["cjs", "esm"],
  splitting: true,
}));
