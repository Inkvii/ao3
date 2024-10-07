import type { Meta, StoryObj } from "@storybook/react"
import { default as Component } from "./Badge"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Badge",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    hue: { description: "Color theme of the variant" },
    tooltip: {
      type: "string",
      description: "Content of the tooltip. If no content is provided, defaults to badge text",
    },
    className: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    hue: "primary",
    children: "Badge text",
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
}

export const DefaultTooltip: Story = {
  args: {},
}
