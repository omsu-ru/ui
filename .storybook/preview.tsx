import type { Preview } from "@storybook/react";
import "../src/main.css";
import React from "react";
// .storybook/preview.js
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { withToaster } from "../src/decorators";
import { Toaster } from "../src/components/toast";

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

const preview: Preview = {
  decorators: [
    (Story) => (
      <main className="container max-w-lg ">
        <Story />
        <Toaster />
      </main>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: "dark", value: "#333" },
        { name: "light", value: "#F2F0F4" },
      ],
    },

    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
