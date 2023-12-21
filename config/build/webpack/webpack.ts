import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { devServer } from "./devServer";
import { loaders } from "./loaders";
import { plugins } from "./plugins";
import { resolvers } from "./resolvers";
import { externals } from "./externals";
import { BuildOptions } from "./types";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths, library } = options;
  const isDev = options.mode === "development";
  return {
    mode: "production",
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
    // devtool: isDev && "inline-source-map",
    devServer: isDev ? devServer(options) : undefined,
    target: ["web", "es5"],
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        `...`,
        new CssMinimizerPlugin(),
        new TerserPlugin({
          include: /\.min\.(css|js)$/,
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
  };
}
