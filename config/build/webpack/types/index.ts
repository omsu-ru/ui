export interface BuildPaths {
  entry: string;
  html?: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";

export type BuildLibrary = {
  name: string;
  type: "umd" | string;
  umdNamedDefine?: boolean;
};

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  library?: BuildLibrary;
}
