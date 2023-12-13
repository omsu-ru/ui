import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function resolvers(options: BuildOptions): Configuration["resolve"] {
  const {
    paths: { src },
  } = options;

  const extensions = [".tsx", ".ts", ".js", ".jsx", ".css"];

  const alias = {
    "@": src,
    "@components": `${src}/components`,
    "@webpack": `${src}/config/build/webpack`,
    "@utils": `${src}/utils`,
  };

  return {
    extensions,
    alias,
  };
}
