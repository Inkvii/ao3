"use client"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  RowData,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { ReactNode, useMemo, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import TableHeaderColumn from "@/library/table/head/TableHeaderColumn"

export type Props<T extends RowData> = {
  columns: ColumnDef<T>[]
  data: T[] | undefined
  children?: ReactNode
  "data-testid"?: string
}

export default function CleanTable<T extends RowData>(props: Props<T>) {
  const emptyArray = useRef([] as T[])

  const data: T[] = useMemo(() => {
    return props.data ?? emptyArray.current
  }, [props.data])

  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),

    // this will assure that header width is calculated only when its not 0
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className={"overflow-x-auto"}>
      <table className={"w-full"}>
        <thead data-testid={"universal-table-head"}>
          {table.getHeaderGroups().map((group) => (
            <tr key={"header-" + group.id} className={twMerge("bg-neutral-100 dark:bg-neutral-800/40")}>
              {group.headers.map((header) => (
                <TableHeaderColumn
                  key={"header-cell-" + header.id}
                  header={header}
                  thClassName={twMerge("text-left", "group")}
                  columnBaseClassName={twMerge("px-4 py-2 dark:text-primary-50 text-sm")}
                  columnSortableClassName={twMerge(
                    "rounded",
                    "flex gap-2 items-center justify-between transition-all",
                    "cursor-pointer select-none",
                    "hover:bg-neutral-200 dark:hover:bg-neutral-800",
                    "hover:typography-header dark:hover:typography-dark-header"
                  )}
                />
              ))}
            </tr>
          ))}
        </thead>

        <tbody className={twMerge("")} data-testid={"universal-table-body"}>
          {!table.getRowModel().rows.length && (
            <tr>
              <td colSpan={table.getAllColumns().length} className={"text-center p-4"}>
                No data found
              </td>
            </tr>
          )}
          {table.getRowModel().rows.map((row) => (
            <tr key={"row-" + row.id} className={twMerge("")}>
              {row.getVisibleCells().map((cell) => (
                <td key={"cell-" + cell.id} className={twMerge("px-4 py-2 text-sm")}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
