"use client"
import { useEffect } from "react"
import UniversalTable from "@/library/table/UniversalTable"
import TableFooter from "@/library/table/footer/TableFooter"
import { ColumnDef } from "@tanstack/react-table"
import { TableVariant } from "@/theme/table/TableVariant"
import { useUrlForSorting } from "@/library/table/useUrlForSorting"

export default function PaginatedTableContainer<T>(props: {
  columns?: ColumnDef<T>[]
  data: T[]
  pageSize: number
  totalPages: number
  totalRows: number
  isRefetching: boolean
  variant: TableVariant
}) {
  const { sorting, handleSorting } = useUrlForSorting()

  useEffect(() => {
    // reset scrolling to top when page changes
    window.scrollTo({ top: 0 })
  }, [props.data])

  return (
    <div data-testid={"universal-table-container"}>
      <UniversalTable
        variant={props.variant}
        columns={props.columns}
        data={props.data}
        sorting={sorting}
        setSorting={handleSorting}
        isRefetching={props.isRefetching}
      >
        <TableFooter
          pageSize={props.pageSize}
          totalPages={props.totalPages}
          totalRows={props.totalRows}
          variant={props.variant}
        />
      </UniversalTable>
    </div>
  )
}
