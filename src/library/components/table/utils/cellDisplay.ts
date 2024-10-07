import { CellContext } from "@tanstack/react-table"

export function getValueOrDefault<TData, TValue>(context: CellContext<TData, TValue>, defaultValue: string = "-") {
  return context.getValue() ?? defaultValue
}
