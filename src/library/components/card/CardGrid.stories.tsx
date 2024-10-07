import type { Meta, StoryObj } from "@storybook/react"
import { default as Component } from "./CardGrid"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"
import Card from "@/library/card/Card"
import { Skeleton } from "@/library/loader/skeleton"

const meta = {
  title: "Layout/CardGrid",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    className: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
  },
  args: {},
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
  args: {
    children: (
      <>
        <Card>
          <Skeleton.Root className={"flex gap-2"}>
            <Skeleton.Rectangle width={"200px"} height={"200px"} />
            <Skeleton.Text />
          </Skeleton.Root>
        </Card>
        <Card>
          <Skeleton.Root className={"flex gap-2"}>
            <Skeleton.Rectangle width={"100px"} height={"200px"} />
            <Skeleton.Text />
          </Skeleton.Root>
        </Card>
        <Card>
          <Skeleton.Root className={"flex gap-2"}>
            <Skeleton.Rectangle width={"200px"} height={"100px"} />
            <Skeleton.Text />
          </Skeleton.Root>
        </Card>
        <Card>
          <Skeleton.Root className={"flex gap-2"}>
            <Skeleton.Rectangle width={"400px"} height={"400px"} />
            <Skeleton.Text />
          </Skeleton.Root>
        </Card>
        <Card>
          <Skeleton.Root className={"flex gap-2"}>
            <Skeleton.Rectangle width={"200px"} height={"200px"} />
            <Skeleton.Text />
          </Skeleton.Root>
        </Card>
      </>
    ),
  },
}
