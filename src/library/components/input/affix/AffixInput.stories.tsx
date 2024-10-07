import { AffixInput as Component } from "@/library/input/affix/AffixInput"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { DECIMAL_NUMBER_PATTERN, POSITIVE_DECIMAL_NUMBER_PATTERN, POSITIVE_INTEGER } from "@/library/validation/pattern"
import { CurrencyEur, Martini } from "@phosphor-icons/react/dist/ssr"
import { Input, Props } from "@/library/input/Input"
import IconConstants from "@/library/utils/IconConstants"
import { InputProps } from "react-aria-components"
import { InputEnum, TableProps } from "@/library/stories/types"
import Affix from "@/library/input/affix/Affix"

const meta = {
  title: "Input/AffixInput",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    prefix: {
      control: "select",
      options: ["None", "Long text", "Icon"],
      mapping: {
        None: undefined,
        "Long text": <Affix>Lorem ipsum dolor sit amet</Affix>,
        Icon: (
          <Affix>
            <Martini />
          </Affix>
        ),
      },
    } satisfies InputEnum<"None" | "Long text" | "Icon">,
    suffix: {
      control: "select",
      options: ["None", "Long text", "Icon"],
      mapping: {
        None: undefined,
        "Long text": <Affix>Lorem ipsum dolor sit amet</Affix>,
        Icon: (
          <Affix>
            <CurrencyEur />
          </Affix>
        ),
      },
    } satisfies InputEnum<"None" | "Long text" | "Icon">,
    regex: {
      control: "select",
      options: ["None", "Decimal number", "Positive decimal number", "Positive integer"],
      mapping: {
        None: undefined,
        "Decimal number": DECIMAL_NUMBER_PATTERN,
        "Positive decimal number": POSITIVE_DECIMAL_NUMBER_PATTERN,
        "Positive integer": POSITIVE_INTEGER,
      },
    } satisfies InputEnum<"None" | "Decimal number" | "Positive decimal number" | "Positive integer">,

    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    isInvalid: {
      control: "boolean",
      description: "Indicator of current state of the component. This can trigger additional styling",
    },
    value: { control: "text", description: "Value for controlled component" },
    className: { table: { disable: true } } satisfies TableProps,
    "aria-label": { table: { disable: true } } satisfies TableProps,
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
    "aria-label": "Show prefix and suffix",
    prefix: <Affix>Prefix value</Affix>,
    suffix: <Affix>Value of Suffix</Affix>,
  },
}

export const CurrencyAffixInput: Story = {
  args: {
    "aria-label": "Show affix how it would look like for currency",
    prefix: (
      <Affix>
        <CurrencyEur />
      </Affix>
    ),
    suffix: <div>asdasd</div>,
    regex: DECIMAL_NUMBER_PATTERN,
  },
}

export const LowercaseLettersOnlyAffixInput: Story = {
  args: {
    "aria-label": "label",
    prefix: <Affix>Only lowercase letters</Affix>,
    regex: new RegExp(/^[a-z]*$/),
  },
}

export const IntegerNumbersOnlyAffixInput: Story = {
  args: {
    "aria-label": "label",
    suffix: <Affix>Only single integer number</Affix>,
    regex: new RegExp(/^[0-9]*$/),
  },
}

export const AffixInputComparedToInput: Story = {
  args: {
    suffix: <Affix>Suffix</Affix>,
    prefix: (
      <Affix>
        <Martini size={IconConstants.lg} />
      </Affix>
    ),
  },
  decorators: [
    (Story) => {
      const props = Story().props as InputProps & Props

      return (
        <div className={"space-y-4"}>
          <div className={"flex gap-4"}>
            <Story />
            <Input value={props?.value} />
          </div>
          <Story />
          <Input value={props?.value as string} />
          <Input value={props?.value} size={"small"} />
        </div>
      )
    },
  ],
}
