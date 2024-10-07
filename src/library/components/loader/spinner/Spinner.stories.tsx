import { default as Component } from "@/library/loader/spinner/Spinner"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "loader/Spinner",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    className: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    size: "normal",
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
