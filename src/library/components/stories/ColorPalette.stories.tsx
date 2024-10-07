import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { HueVariable } from "@/theme/css/HueVariable"

const meta = {
  title: "ColorPalette",
  tags: ["autodocs"],
  argTypes: {
    hue: {
      control: "radio",
      options: ["primary", "secondary", "success", "danger", "neutral"] satisfies HueVariable[],
    },
  },
  args: {
    hue: "primary",
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<{ hue: HueVariable }>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledStory: Story = {
  args: {},
  render: (props) => (
    <div className={"*:flex *:gap-8 space-y-4"}>
      <div>
        <Palette {...props} variant={backgroundHue} />
        <CardRecursion hue={props.hue} currentIndex={0} variant={backgroundHue} />
      </div>
    </div>
  ),
}

function Palette(props: { hue: HueVariable; variant: string[] }) {
  return (
    <div className={`flex flex-col w-fit ${props.hue}`}>
      {props.variant.map((value) => (
        <div key={value} className={`w-40 h-20 ${value}`} />
      ))}
    </div>
  )
}

function CardRecursion(props: { hue: HueVariable; currentIndex: number; variant: string[] }) {
  const value = props.variant.at(props.currentIndex)

  return (
    <div className={props.hue}>
      <div key={value} className={`p-8 rounded-xl ${value}`}>
        <h2
          className={
            props.currentIndex >= props.variant.length / 2
              ? "text-hue-50 dark:text-hue-50"
              : "text-hue-950 dark:text-hue-950"
          }
        >
          Content of {value}
        </h2>
        {props.currentIndex < props.variant.length - 1 && (
          <CardRecursion hue={props.hue} currentIndex={props.currentIndex + 1} variant={props.variant} />
        )}
      </div>
    </div>
  )
}

//@tw
const backgroundHue = [
  "bg-hue-50",
  "bg-hue-100",
  "bg-hue-200",
  "bg-hue-300",
  "bg-hue-400",
  "bg-hue-500",
  "bg-hue-600",
  "bg-hue-700",
  "bg-hue-800",
  "bg-hue-900",
  "bg-hue-950",
]
//@tw-end
