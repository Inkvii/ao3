import type { Meta, StoryObj } from "@storybook/react"
import { ButtonLink as Component } from "./ButtonLink"
import { ArrowLeft, ArrowRight, Martini, MathOperations } from "@phosphor-icons/react/dist/ssr"
import ResizableBox from "@/library/stories/ResizableBox"
import { ButtonVariant } from "@/theme/button/type/ButtonVariant"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Button/ButtonLink",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    variant: { description: "General look and feel of the button" },
    hue: { description: "Color theme of the variant" },
    size: { description: "Prepared size options of the component" },
    dominantIconSide: {
      description:
        "Declares position where dominant icon will appear. If component contains both dominant and subdominant icon, the subdominant icon will take the other place. Dominant icon side also decides where loader icon will be placed",
    },
    disabled: { control: "boolean", description: "Disabled button cannot be clicked on" },
    className: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
    "data-testid": { table: { disable: true } } satisfies TableProps,
    loadingIcon: { table: { disable: true } } satisfies TableProps,
    dominantIcon: { table: { disable: true } } satisfies TableProps,
    subdominantIcon: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    url: { path: "#" },
    variant: "solid",
    hue: "primary",
    dominantIcon: <Martini />,
    subdominantIcon: <MathOperations />,
    dominantIconSide: "left",
    children: "Big Beautiful Button",
    onClick: () => console.log("Pressed"),
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

export const TextOnlyBasicLink: Story = {
  args: {
    dominantIcon: undefined,
    subdominantIcon: undefined,
  },
}

export const ButtonsInGrid: Story = {
  args: {
    dominantIcon: <ArrowLeft />,
    subdominantIcon: <ArrowRight />,
  },
  decorators: [
    () => (
      <div className={"flex gap-4 p-4"}>
        <ButtonLinkByVariant variant={"solid"} isDisabled={false} />
        <ButtonLinkByVariant variant={"solid"} isDisabled={true} />

        <ButtonLinkByVariant variant={"outline"} isDisabled={false} />
        <ButtonLinkByVariant variant={"outline"} isDisabled={true} />

        <ButtonLinkByVariant variant={"hyperlink"} isDisabled={false} />
        <ButtonLinkByVariant variant={"hyperlink"} isDisabled={true} />
      </div>
    ),
  ],
}

function ButtonLinkByVariant(props: { variant: ButtonVariant; isDisabled?: boolean }) {
  return (
    <div className={"flex flex-col gap-2 p-4"}>
      <Component
        hue={"primary"}
        url={{ path: "#" }}
        variant={props.variant}
        disabled={props.isDisabled}
        onClick={() => {}}
      >
        Primary
      </Component>
      <Component
        hue={"secondary"}
        url={{ path: "#" }}
        variant={props.variant}
        disabled={props.isDisabled}
        onClick={() => {}}
      >
        Secondary
      </Component>
      <Component
        hue={"success"}
        url={{ path: "#" }}
        variant={props.variant}
        disabled={props.isDisabled}
        onClick={() => {}}
      >
        Success
      </Component>
      <Component
        hue={"danger"}
        url={{ path: "#" }}
        variant={props.variant}
        disabled={props.isDisabled}
        onClick={() => {}}
      >
        Danger
      </Component>
    </div>
  )
}
