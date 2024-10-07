import { flexRender, RowData, Table } from "@tanstack/react-table"
import useTheme from "@/theme/table/body/useTheme"
import { twMerge } from "tailwind-merge"

export default function UniversalTableBody<T extends RowData>(props: {
  table: Table<T>
  isRefetching: boolean | undefined
}) {
  const theme = useTheme()
  return (
    <tbody className={twMerge(theme.tbody)} data-testid={"universal-table-body"}>
      {!props.table.getRowModel().rows.length && !props.isRefetching && (
        <tr>
          <td colSpan={props.table.getAllColumns().length} className={"text-center p-4"}>
            No data found
          </td>
        </tr>
      )}
      {props.table.getRowModel().rows.map((row) => (
        <tr key={"row-" + row.id} className={theme.row}>
          {row.getVisibleCells().map((cell) => (
            <td key={"cell-" + cell.id} className={twMerge(theme.column)}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
