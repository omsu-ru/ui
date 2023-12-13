import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function plugins(options: BuildOptions): Configuration["plugins"] {
  const { paths, mode } = options;
  const isDev = mode === "development";

  const plugins: Configuration["plugins"] = [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ];

  return plugins;
}
