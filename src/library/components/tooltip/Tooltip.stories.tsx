import { TooltipPrimitive as Component } from "library/components/tooltip/TooltipPrimitive"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"

const meta = {
  title: "Tooltip/Tooltip",
  component: Component,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    tooltip: <div>This is tooltip content</div>,
    children: <div className={"bg-primary-600 text-white p-2"}>Hover over me to see tooltip</div>,
    tooltipProps: {},
    tooltipTriggerProps: {
      delay: 500,
    },
  },
  decorators: [
    (Story) => {
      return (
        <ResizableBox className={"flex justify-center items-center"}>
          <Story />
        </ResizableBox>
      )
    },
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {
    tooltipProps: {},
    tooltipTriggerProps: { delay: 500 },
  },
}
export const TooltipOnLeft: Story = {
  args: {
    tooltipProps: { placement: "left" },
  },
}
export const TooltipOnRight: Story = {
  args: {
    tooltipProps: { placement: "right" },
  },
}
export const TooltipOnBottom: Story = {
  args: {
    tooltipProps: { placement: "bottom" },
  },
}
