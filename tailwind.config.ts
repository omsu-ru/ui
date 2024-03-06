import type { Config } from "tailwindcss";
import { omsuTwPreset } from "./tailwind.preset";

const twConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [omsuTwPreset],
} satisfies Config;

export default twConfig;
