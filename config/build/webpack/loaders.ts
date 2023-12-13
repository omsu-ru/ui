import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export function loaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const svgr_loader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: { icon: true, outDir: "../../../icons" },
      },
    ],
  };

  const babel_loader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const tailwind_loader = {
    test: /\.css$/i,
    use: [
      // Creates `style` nodes from JS strings
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles tailwind classes to CSS
      "postcss-loader",
    ],
  };

  const ts_loader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",

        options: {
          transpileOnly: true,
        },
      },
    ],

    exclude: /node_modules/,
  };

  return [ts_loader, tailwind_loader, babel_loader, svgr_loader];
}
