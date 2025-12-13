import "../src/index.css";
import { withThemeByClassName } from "@storybook/addon-themes";

/** THEME CLASS DECORATOR */
export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

/** PREVIEW CONFIG */
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },

  /** SYNC BACKGROUND WITH THEME */
  globals: {
    backgrounds: {
      value: "light",
    },
  },
};

export default preview;
