import { default as Component } from "./ConfirmationDialog"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { Button } from "@/library/button/Button"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Modals/ConfirmationDialog",
  component: Component,
  tags: [],
  argTypes: {
    title: { control: "text", description: "Header of the open modal" },
    defaultOpen: { table: { disable: true } } satisfies TableProps,
    trigger: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
    className: { table: { disable: true } } satisfies TableProps,
    accept: { table: { disable: true } } satisfies TableProps,
    decline: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    defaultOpen: true,
    trigger: (
      <Button hue={"primary"} variant={"solid"} type={"button"} className={"min-w-full sm:w-fit sm:min-w-fit"}>
        Show dialog
      </Button>
    ),
    accept: { onPress: () => alert("Confirmation dialog accepted") },
    decline: { onPress: () => alert("Confirmation dialog declined") },
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
    title: "Title header",
    children: null,
  },
  render: (props) => {
    return (
      <Component {...props} defaultOpen={true}>
        <p>Are you sure you want to proceed?</p>
      </Component>
    )
  },
}
