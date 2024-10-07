"use client"
import { ReactNode, useMemo, useRef, useState } from "react"
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowData,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { deriveColumnsFromData } from "@/library/table/utils/tableColumnUtils"
import { twMerge } from "tailwind-merge"
import UniversalTableHead from "@/library/table/head/UniversalTableHead"
import UniversalTableBody from "@/library/table/body/UniversalTableBody"
import VirtualTableFooter from "@/library/table/footer/VirtualTableFooter"
import useTheme from "@/theme/table/useTheme"
import { TableVariant } from "@/theme/table/TableVariant"
import { RowsPerPage } from "@/library/table/footer/fragment/RowsPerPage"

export type Props<T extends RowData> = {
  variant: TableVariant
  columns?: ColumnDef<T>[]
  data: T[] | undefined
  isRefetching: boolean | undefined
  children?: ReactNode
  "data-testid"?: string
  onPageChanged?: () => void
  className?: string
}

export default function VirtualTable<T extends RowData>(props: Props<T>) {
  const emptyArray = useRef([] as T[])

  const theme = useTheme(props.variant)

  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: RowsPerPage[0],
  })

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
      pagination,
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className={twMerge(theme.wrapper, props.className)} data-testid={props["data-testid"] ?? "virtual-table"}>
      <div className={twMerge(theme.innerWrapper)}>
        <div className={twMerge("overflow-x-auto")}>
          <table className={twMerge(theme.table)}>
            <UniversalTableHead table={table} isRefetching={props.isRefetching} variant={props.variant} />
            <UniversalTableBody table={table} isRefetching={props.isRefetching} />
          </table>
        </div>
        <VirtualTableFooter
          table={table}
          totalRows={props.data?.length ?? 0}
          onPaginationChange={(context) => {
            table.setPagination({
              pageIndex: context.page - 1,
              pageSize: context.limit,
            })
            props.onPageChanged?.()
          }}
          variant={props.variant}
        />
        {props.children}
      </div>
    </div>
  )
}
