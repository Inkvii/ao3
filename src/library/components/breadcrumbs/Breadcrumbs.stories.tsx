import type { Meta, StoryObj } from "@storybook/react"
import { default as Component } from "./Breadcrumbs"
import ResizableBox from "@/library/stories/ResizableBox"

const meta = {
  title: "Breadcrumb",
  component: Component,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    paths: [
      { path: "#", name: "Path" },
      { path: "#/to", name: "To" },
      { path: "#/to/another", name: "Another" },
      { path: "#/to/another/page", name: "Page" },
    ],
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

export const ControlledComponent: Story = {}

export const SingleBreadrumb: Story = {
  args: {
    paths: [{ path: "#", name: "Path" }],
  },
}

export const DoubleBreadcrumb: Story = {
  args: {
    paths: [
      { path: "#", name: "Path" },
      { path: "#/to", name: "To" },
    ],
  },
}
