import { DateField as Component } from "./DateField"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { getLocalTimeZone, now } from "@internationalized/date"
import { InputEnum, TableProps } from "@/library/stories/types"

const meta = {
  title: "Input/DateField",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    isInvalid: {
      control: "boolean",
      description: "Indicator of current state of the component. This can trigger additional styling",
    },
    isOpen: { control: "boolean", description: "Controls if date picker should be open" },
    value: { control: "text", description: "Value for controlled component" },
    className: { table: { disable: true } } satisfies TableProps,
    "aria-label": { table: { disable: true } } satisfies TableProps,
    granularity: {
      control: "radio",
      description: "Date field granularity",
      options: ["day", "hour", "minute", "second"],
    } satisfies InputEnum<"day" | "hour" | "minute" | "second">,
  },
  args: {
    granularity: "day",
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
export const ContainsError: Story = {
  args: {
    isInvalid: true,
  },
}

export const DateAlreadyPrefilled: Story = {
  args: {
    defaultValue: now(getLocalTimeZone()),
  },
}
