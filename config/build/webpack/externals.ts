import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function externals(options: BuildOptions): Configuration["externals"] {
  return {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
  };
}
