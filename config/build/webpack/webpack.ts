import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { devServer } from "./devServer";
import { loaders } from "./loaders";
import { plugins } from "./plugins";
import { resolvers } from "./resolvers";
import { externals } from "./externals";
import { BuildOptions } from "./types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths, library } = options;
  const isDev = options.mode === "development";
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(options),
    output: {
      path: paths.output,
      filename: "[name].js",
      library,
      globalObject: this,
      clean: true,
    },
    externals: externals(options),
    plugins: plugins(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? devServer(options) : undefined,
  };
}
