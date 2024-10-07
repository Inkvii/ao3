"use client"
import { ColumnDef, getCoreRowModel, RowData, SortingState, useReactTable } from "@tanstack/react-table"
import { Dispatch, ReactNode, SetStateAction, useMemo, useRef } from "react"
import { deriveColumnsFromData } from "@/library/table/utils/tableColumnUtils"
import UniversalTableHead from "@/library/table/head/UniversalTableHead"
import UniversalTableBody from "@/library/table/body/UniversalTableBody"
import useTheme from "@/theme/table/useTheme"
import { TableVariant } from "@/theme/table/TableVariant"
import { twMerge } from "tailwind-merge"

export type Props<T extends RowData> = {
  columns?: ColumnDef<T>[]
  data: T[] | undefined
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
  isRefetching: boolean | undefined
  children?: ReactNode
  "data-testid"?: string
  variant: TableVariant
}

export default function UniversalTable<T extends RowData>(props: Props<T>) {
  const emptyArray = useRef([] as T[])
  const theme = useTheme(props.variant)
  const columns: ColumnDef<T>[] = useMemo(() => {
    if (props.columns) return props.columns
    return deriveColumnsFromData(props.data)
  }, [props.data, props.columns])

  const data: T[] = useMemo(() => {
    return props.data ?? emptyArray.current
  }, [props.data])

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),

    // this will assure that header width is calculated only when its not 0
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    state: {
      sorting: props.sorting,
    },
    onSortingChange: props.setSorting,
  })

  return (
    <div className={twMerge(theme.wrapper)} data-testid={props["data-testid"] ?? "universal-table"}>
      <div className={twMerge(theme.innerWrapper)}>
        <div className={"overflow-x-auto"}>
          <table className={twMerge(theme.table)}>
            <UniversalTableHead table={table} isRefetching={props.isRefetching} variant={props.variant} />
            <UniversalTableBody table={table} isRefetching={props.isRefetching} />
          </table>
        </div>
        {props.children}
      </div>
    </div>
  )
}
