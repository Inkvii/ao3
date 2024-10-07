import { default as Component } from "./IndeterminateProgressBar"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "loader/Progressbar",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isFetching: { description: "IF set to true, activates indeterminate progressbar" },
    className: { table: { disable: true } } satisfies TableProps,
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {},
}
