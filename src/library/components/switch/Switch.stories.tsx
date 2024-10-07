import { default as Component, Props, Switch } from "./Switch"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { useState } from "react"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Switch",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isSelected: { table: { disable: true } } satisfies TableProps,
    label: { description: "Label of the component" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
  },
  args: {
    label: "My label",
  },
  decorators: [
    (Story) => {
      const props = Story().props as Props
      const [selected, setSelected] = useState<boolean>(!!props.isSelected)
      return (
        <ResizableBox>
          <Switch {...props} isSelected={selected} onChange={setSelected} />
        </ResizableBox>
      )
    },
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {}
export const WithoutLabel: Story = {
  args: {
    label: "",
  },
}
export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
export const DisabledReadonlySelected: Story = {
  args: {
    isDisabled: true,
    isReadOnly: true,
    isSelected: true,
  },
}
