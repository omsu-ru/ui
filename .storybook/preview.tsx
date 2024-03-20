import type { Preview } from "@storybook/react";
import "../src/main.css";
import * as React from "react";
// .storybook/preview.js
import { withThemeByClassName } from "@storybook/addon-themes";
import { withToaster } from "../src/decorators";
import { Toaster } from "../src/components/toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { darkTheme } from "./constants";
import { DocsContainer } from "./DocsContainer";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
      white: "white",
    },
    defaultTheme: "light",
  }),
];

const queryClient = new QueryClient();
const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <main
            className=" relative p-0 grid items-center  h-screen min-h-screen content-center"
            style={{ minHeight: "100vh" }}
          >
            <Story />
            <Toaster />
          </main>
        </QueryClientProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    default: "white",
    darkMode: {
      classTarget: "html",
      dark: darkTheme,
      stylePreview: true,
    },
    docs: {
      container: DocsContainer,
    },
    backgrounds: {
      values: [
        { name: "dark", value: "#333" },
        { name: "light", value: "#F2F0F4" },
        { name: "white", value: "#fff" },
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
