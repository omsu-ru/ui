import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function devServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: false,
  };
}
