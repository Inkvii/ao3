import { Skeleton as Component } from "library/components/loader/skeleton/index"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"

const meta = {
  title: "loader/Skeleton/Wrapper",
  // component: Component,
  tags: ["autodocs"],
  argTypes: {},
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
  render: () => {
    return (
      <Component.Root>
        <Component.Circle size={"4rem"} />
        <Component.Text />
        <div className={"flex"}>
          <Component.Rectangle width={"20rem"} height={"10rem"} />
          <Component.Text lineCount={8} />
        </div>
        <div className={"flex items-center"}>
          <Component.Circle size={"4rem"} />
          <Component.Text lineCount={3} />
        </div>
      </Component.Root>
    )
  },
}
