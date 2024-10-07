import { TableVariant } from "@/theme/table/TableVariant"

type ConfigVal = {
  thead: string[]
  row: string[]
  column: {
    base: string[]
    wrapper: string[]
    sortable: string[]
  }
}
//@tw
const configClass = {
  gradient: {
    thead: ["divide-y-2", "divide-neutral-200/50 dark:divide-neutral-700"],
    row: ["bg-gradient-to-b", "from-neutral-200/80 dark:from-neutral-800", "to-neutral-100/80 dark:to-neutral-900"],
    column: {
      wrapper: ["text-left", "group"],
      base: ["px-4 py-2 text-sm"],
      sortable: [
        "rounded",
        "flex gap-2 items-center justify-between transition-all",
        "cursor-pointer select-none",
        "hover:bg-neutral-300 dark:hover:bg-primary-900",
        "hover:typography-header dark:hover:typography-dark-header",
      ],
    },
  },
  flat: {
    thead: ["divide-y-2", "divide-neutral-200/50 dark:divide-neutral-700"],
    row: ["bg-neutral-100 dark:bg-neutral-900"],
    column: {
      wrapper: ["text-left", "group"],
      base: ["px-4 py-2 text-sm"],
      sortable: [
        "rounded",
        "flex gap-2 items-center justify-between transition-all",
        "cursor-pointer select-none",
        "hover:bg-neutral-200 dark:hover:bg-primary-900",
        "hover:typography-header dark:hover:typography-dark-header",
      ],
    },
  },
} satisfies Record<TableVariant, ConfigVal>
//@tw-end

export default function useTheme(variant: TableVariant) {
  return configClass[variant]
}
