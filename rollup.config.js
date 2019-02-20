import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
// import lessModules from "rollup-plugin-less-modules";
import json from "rollup-plugin-json";
import NpmImport from "less-plugin-npm-import";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  external: ["antd"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      autoModules: true,
      use: [
        [
          "less",
          {
            plugins: [new NpmImport({ prefix: "~" })],
            javascriptEnabled: true
          }
        ]
      ]
    }),
    // lessModules({
    //   output: true,
    //   options: {
    //     javascriptEnabled: true
    //   }
    // }),
    json(),
    url({ exclude: ["**/*.svg"] }),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      tsconfig: "tsconfig.lib.json"
    }),
    commonjs()
  ]
};
