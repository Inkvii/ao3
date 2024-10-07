import type { Meta, StoryObj } from "@storybook/react"
import { Button as Component } from "./Button"
import { ArrowLeft, ArrowRight, Martini, MathOperations } from "@phosphor-icons/react/dist/ssr"
import ResizableBox from "@/library/stories/ResizableBox"
import { HueVariable } from "@/theme/css/HueVariable"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Button",
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
    isLoading: { description: "If set to true, loading icon will be switched to dominant icon side position." },
    isDisabled: { control: "boolean", description: "Disabled button cannot be clicked on" },
    className: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
    onPress: { table: { disable: true } } satisfies TableProps,
    "data-testid": { table: { disable: true } } satisfies TableProps,
    loadingIcon: { table: { disable: true } } satisfies TableProps,
    dominantIcon: { table: { disable: true } } satisfies TableProps,
    subdominantIcon: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    variant: "solid",
    hue: "primary",
    dominantIcon: <Martini />,
    subdominantIcon: <MathOperations />,
    dominantIconSide: "left",
    children: "Big Beautiful Button",
    onPress: () => console.log("Pressed"),
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

export const TextOnlyBasicButton: Story = {
  args: {
    dominantIcon: undefined,
    subdominantIcon: undefined,
  },
}

export const ButtonsInGrid: Story = {
  args: {
    dominantIcon: <ArrowLeft />,
    subdominantIcon: <ArrowRight />,
    children: "But ton",
    variant: "solid",
  },

  decorators: [
    (Story, context) => {
      return (
        <div className={"flex flex-col gap-8"}>
          {[
            "",
            "bg-primary-50",
            "bg-primary-100",
            "bg-primary-200",
            "bg-primary-300",
            "bg-primary-400",
            "bg-primary-500",
            "bg-primary-600",
            "bg-primary-700",
            "bg-primary-800",
            "bg-primary-900",
            "bg-primary-950",
          ].map((bg) => {
            return (
              <div key={bg} className={"p-4"}>
                <h3 className={"pb-2"}>{bg}</h3>
                <div className={`${context.args.hue} ${bg} p-4`}>
                  <Story />
                </div>
              </div>
            )
          })}
        </div>
      )
    },
  ],

  render: (props) => {
    return (
      <div className={"flex gap-2"}>
        {["primary", "secondary", "success", "danger"].map((hue) => (
          <div key={hue} className={"flex flex-col gap-2"}>
            <Component {...props} hue={hue as HueVariable} variant={"solid"} isDisabled={false} />
            <Component {...props} hue={hue as HueVariable} variant={"solid"} isDisabled={true} />
            <Component {...props} hue={hue as HueVariable} variant={"outline"} isDisabled={false} />
            <Component {...props} hue={hue as HueVariable} variant={"outline"} isDisabled={true} />
            <Component {...props} hue={hue as HueVariable} variant={"hyperlink"} isDisabled={false} />
            <Component {...props} hue={hue as HueVariable} variant={"hyperlink"} isDisabled={true} />
          </div>
        ))}
      </div>
    )
  },
}
