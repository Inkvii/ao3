import { default as Component } from "@/library/loader/skeleton/internal/SkeletonText"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "loader/Skeleton/Text",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
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

export const ControlledSkeleton: Story = {
  args: {},
}
