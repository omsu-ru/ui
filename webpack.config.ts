import webpack from "webpack";

import { buildWebpack } from "./config";
import { type BuildLibrary, type BuildMode, type BuildPaths } from "./config";
import path from "path";
import pkg from "./package.json";

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    // html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
  };

  const library: BuildLibrary = {
    name: pkg.name,
    type: "umd",
    umdNamedDefine: true,
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    library,
  });
  return config;
};
