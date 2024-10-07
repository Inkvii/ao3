import type { Meta, StoryObj } from "@storybook/react"
import { default as Component } from "./PersistentMessage"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"
import { Button } from "@/library/button/Button"

const meta = {
  title: "Feedback/PersistentMessage",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    hue: { description: "Persistent message variant" },
    className: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    children: (
      <>
        <h1>This is a persistent message</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dolores eaque eos esse in minima
          mollitia natus non sit?
        </p>
        <Button variant={"solid"} hue={"danger"}>
          Check more
        </Button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dolores eaque eos esse in minima
          mollitia natus non sit?
        </p>
        <div>
          <h2>Inner div</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sunt.</p>
        </div>
        <div className={"flex gap-2"}>
          <Button variant={"outline"}>Cancel button</Button>
          <Button variant={"solid"}>Solid button</Button>
        </div>
      </>
    ),
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
  args: {
    hue: "primary",
  },
}
