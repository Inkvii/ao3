import { TableVariant } from "@/theme/table/TableVariant"

type ConfigVal = {
  wrapper: string[]
  form: string[]
}

const configClass = {
  gradient: {
    wrapper: ["@container"],
    form: [
      "py-2 px-4 flex flex-col @lg:flex-row gap-4 justify-between items-end @lg:items-center",
      "bg-neutral-100/80",
      "dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900",
    ],
  },
  flat: {
    wrapper: ["@container"],
    form: [
      "py-2 px-4 flex flex-col @lg:flex-row gap-4 justify-between items-end @lg:items-center",
      "bg-neutral-100/80 dark:bg-neutral-900",
    ],
  },
} satisfies Record<TableVariant, ConfigVal>

export default function useTheme(variant: TableVariant) {
  return configClass[variant]
}
