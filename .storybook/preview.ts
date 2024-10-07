import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
import "styles/globals.css"
import { DocsContainer } from "./DocsContainer"

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: "dark",
      darkClass: "dark",
      dark: { ...themes.dark },
      light: { ...themes.light },
      classTarget: "html",
      stylePreview: true,
    },
    docs: {
      container: DocsContainer,
    },
  },
}

export default preview
