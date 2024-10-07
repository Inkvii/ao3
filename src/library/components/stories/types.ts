import { InputType } from "@storybook/types"

/**
 * @link https://storybook.js.org/docs/api/arg-types#table
 */
export type TableProps = {
  table?: {
    category?: string
    defaultValue?: {
      detail?: string
      summary: string
    }
    disable: boolean
    subcategory?: string
    type?: {
      detail?: string
      summary: string
    }
  }
}

export type InputEnum<T> = Omit<InputType, "options" | "control" | "defaultValue"> &
  TableProps & {
    control:
      | "radio"
      | "inlineRadio"
      | "check"
      | "inline-check"
      | "select"
      | "multi-select"
      | {
          type: "radio" | "inlineRadio" | "check" | "inline-check" | "select" | "multi-select"
          /**
           * Map options to labels. labels doesn't have to be exhaustive. If an option is not in the object's keys, it's used verbatim.
           * @link https://storybook.js.org/docs/api/arg-types#controllabels
           */
          labels: string[]
        }
    options: T[]
    /**
     *
     */
    mapping?: Partial<Record<T extends string ? string : never, unknown>>
    defaultValue?: T
  }

export type InputNumber = Omit<InputType, "control"> &
  TableProps & {
    control: {
      type: "number" | "range"
      min?: number
      max?: number
      step?: number
    }
  }

export type InputObject = Omit<InputType, "control"> &
  TableProps & {
    control: {
      type: "object"
    }
  }

export type InputFile = Omit<InputType, "control"> &
  TableProps & {
    control: {
      type: "file"
      accept?: string
    }
  }
