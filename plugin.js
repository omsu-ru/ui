import { withOptions } from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

export const omsuPlugin = withOptions(
  () => {
    return ({ addBase, addComponents, addUtilities, addVariant, theme }) => {
      addComponents({
        ".card": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            zIndex: "-1",
            width: "100%",
            height: "100%",
            borderRadius: "0.8rem",
            top: "7px",
            left: "7px",
            border: "1px solid black",
            transition: "all 0.3s ease-in-out",
            backgroundImage: "linear-gradient(to right, #F98F48, #F54242)",
          },
        },
      });
    };
  },
  () => {
    return {
      darkMode: "class",
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          backgroundImage: {
            omsu: "linear-gradient(to right, #F98F48, #F54242)",
          },
          colors: {
            omsu: "linear-gradient(to right, #F98F48, #F54242)",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
          },
          borderRadius: {
            lg: `var(--radius)`,
            md: `calc(var(--radius) - 2px)`,
            sm: "calc(var(--radius) - 4px)",
          },
          fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
          },
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
          },
          animation: {
            "accordion-down": "accordion-down  0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
        },
      },
    };
  }
);
