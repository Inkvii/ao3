import { RowData, Table } from "@tanstack/react-table"
import { twMerge } from "tailwind-merge"
import IndeterminateProgressBar from "@/library/loader/progressbar/IndeterminateProgressBar"
import useTheme from "@/theme/table/head/useTheme"
import { TableVariant } from "@/theme/table/TableVariant"
import TableHeaderColumn from "@/library/table/head/TableHeaderColumn"

export type Props<T extends RowData> = {
  table: Table<T>
  isRefetching?: boolean
  variant: TableVariant
}

export default function UniversalTableHead<T extends RowData>(props: Props<T>) {
  const theme = useTheme(props.variant)
  return (
    <thead data-testid={"universal-table-head"} className={twMerge(theme.thead)}>
      {props.table.getHeaderGroups().map((group) => (
        <tr key={"header-" + group.id} className={twMerge(theme.row)}>
          {group.headers.map((header) => (
            <TableHeaderColumn
              key={"header-cell-" + header.id}
              header={header}
              columnBaseClassName={twMerge(theme.column.base)}
              columnSortableClassName={twMerge(theme.column.sortable)}
              thClassName={twMerge(theme.column.wrapper)}
            />
          ))}
        </tr>
      ))}
      <tr className={twMerge(props.isRefetching && "border-none")}>
        <th colSpan={props.table.getAllColumns().length}>
          <IndeterminateProgressBar isFetching={props.isRefetching} />
        </th>
      </tr>
    </thead>
  )
}
