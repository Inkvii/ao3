import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { HueVariable } from "@/theme/css/HueVariable"
import { Input } from "@/library/input/Input"
import { twMerge } from "tailwind-merge"
import { Switch } from "@/library/switch/Switch"
import { useState } from "react"
import { Button } from "@/library/button/Button"
import { InputEnum } from "@/library/stories/types"
import { FormField } from "@/library/form/field"

const hueDefault = [
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
]

const meta = {
  title: "Mock/Form",
  tags: ["autodocs"],
  argTypes: {
    hue: {
      control: "radio",
      options: ["primary", "secondary", "success", "danger"],
    } satisfies InputEnum<HueVariable>,
    backgroundHue: { control: "select", options: [undefined, ...hueDefault] },
  },
  args: {
    hue: "primary",
    backgroundHue: undefined,
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<{ hue: HueVariable; backgroundHue: string | undefined }>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledStory: Story = {
  args: {},
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isSelected, setIsSelected] = useState<boolean>(false)

    return (
      <div className={twMerge(props.backgroundHue, "rounded transition-all", "p-8 flex flex-col gap-2")}>
        <FormField.Root>
          <FormField.Label>Standard textfield</FormField.Label>
          <FormField.Controller.Input />
          <FormField.Description>My description</FormField.Description>
        </FormField.Root>

        <FormField.Root>
          <FormField.Label>Contains error</FormField.Label>
          <FormField.Controller.Input />
          <FormField.Description>My description</FormField.Description>
          <FormField.ErrorMessage>Something is not alright</FormField.ErrorMessage>
        </FormField.Root>

        <FormField.Controller.ComboBox
          placeholder={"Choose your combo"}
          items={items}
          propertyOfValue={"value"}
          propertyOfKey={"id"}
          onChange={() => {}}
        />

        <Input placeholder={"Standard input"} />

        <Switch label={"Agree with terms and conditions"} isSelected={isSelected} onChange={setIsSelected} />
        <div className={"pt-8 flex gap-2"}>
          <Button hue={props.hue} variant={"hyperlink"}>
            Reset form
          </Button>
          <Button hue={props.hue} variant={"outline"}>
            Cancel
          </Button>
          <Button hue={props.hue} variant={"solid"}>
            OK
          </Button>
        </div>
      </div>
    )
  },
}

const items = [
  { id: "1", value: "one" },
  { id: "2", value: "two" },
  { id: "3", value: "three" },
  { id: "4", value: "four" },
  { id: "5", value: "five" },
  { id: "6", value: "six" },
]
