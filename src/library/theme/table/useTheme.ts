import { TableVariant } from "@/theme/table/TableVariant"

type ConfigVal = {
  wrapper: string[]
  innerWrapper: string[]
  table: string[]
}
//@tw
const configClass = {
  gradient: {
    wrapper: ["flex flex-col relative bg-neutral-50 dark:bg-neutral-800 rounded max-w-max"],
    innerWrapper: [
      "border rounded overflow-hidden",
      "shadow",
      "border-neutral-200 dark:border-neutral-700",
      "overflow-x-auto rounded",
    ],
    table: ["table table-fixed", "bg-white dark:bg-neutral-800"],
  },
  flat: {
    wrapper: ["flex flex-col relative bg-neutral-50 dark:bg-neutral-800 rounded max-w-max"],
    innerWrapper: [
      "border rounded overflow-hidden",
      "border-neutral-200 dark:border-neutral-700",
      "overflow-x-auto rounded",
    ],
    table: ["table table-fixed", "bg-white dark:bg-neutral-800"],
  },
} satisfies Record<TableVariant, ConfigVal>
//@tw-end

export default function useTheme(variant: TableVariant) {
  return configClass[variant]
}
