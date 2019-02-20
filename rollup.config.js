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
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  external: ["antd", "monaco-editor"],
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
    babel({
      include: "node_modules/react-monaco-editor/**",
      runtimeHelpers: true,
      presets: ["@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-class-properties"]
    }),
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
