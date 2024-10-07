"use client"
import { useEffect } from "react"
import { ColumnDef, RowData } from "@tanstack/react-table"
import VirtualTable from "@/library/table/virtual/VirtualTable"
import { TableVariant } from "@/theme/table/TableVariant"

export type Props<T extends RowData> = {
  columns?: ColumnDef<T>[]
  data: T[]
  variant: TableVariant
}

export default function VirtualTableContainer<T extends RowData>(props: Props<T>) {
  useEffect(() => {
    // reset scrolling to top when page changes
    window.scrollTo({ top: 0 })
  }, [props.data])

  return (
    <div data-testid={"virtual-table-container"} className={"py-4"}>
      <VirtualTable
        variant={props.variant}
        columns={props.columns}
        data={props.data}
        isRefetching={false}
        onPageChanged={() => window.scrollTo({ top: 0 })}
      />
    </div>
  )
}
