import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: "inline",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: "inline",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      }),
      postcss(),
      image({ extract: "src/assets/icons" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
