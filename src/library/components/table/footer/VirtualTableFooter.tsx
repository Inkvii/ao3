import { useMemo } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import { PaginatedMetadata } from "@/library/utils/types"
import RowsPerPageSelector from "@/library/table/footer/fragment/RowsPerPageSelector"
import RowStatistics from "@/library/table/footer/fragment/RowStatistics"
import TablePaginator from "@/library/table/footer/fragment/TablePaginator"
import { Table } from "@tanstack/react-table"
import useTheme from "@/theme/table/footer/useTheme"
import { TableVariant } from "@/theme/table/TableVariant"
import { twMerge } from "tailwind-merge"

export type Props<T> = {
  table: Table<T>
  totalRows: number
  onPaginationChange: (context: Required<PaginatedMetadata>) => void
  variant: TableVariant
}

export default function VirtualTableFooter<T>(props: Props<T>) {
  const theme = useTheme(props.variant)

  const methods = useForm<TablePaginationContext>({
    mode: "onChange",
    shouldFocusError: false,
    defaultValues: {
      page: props.table.getState().pagination.pageIndex + 1,
      limit: props.table.getState().pagination.pageSize,
    },
  })

  const recordsPerPage = props.table.getState().pagination.pageSize
  const currentPage = methods.getValues("page")

  const toRow: number = useMemo(() => {
    if (currentPage === props.table.getPageCount()) return props.totalRows

    return currentPage * recordsPerPage
  }, [currentPage, recordsPerPage, props.table, props.totalRows])

  const onSubmit: SubmitHandler<TablePaginationContext> = async (data) => {
    if (!data.page) throw new Error("Page number was not set")

    const hasLimitChanged = data.limit !== props.table.getState().pagination.pageSize
    const query: Required<PaginatedMetadata> = {
      page: hasLimitChanged ? 1 : data.page,
      limit: data.limit,
    }
    methods.setValue("page", query.page)
    props.onPaginationChange(query)
  }

  return (
    <div className={twMerge(theme.wrapper)} data-testid={"table-footer"}>
      <FormProvider {...methods}>
        <form className={twMerge(theme.form)} onSubmit={methods.handleSubmit(onSubmit)}>
          <RowsPerPageSelector handleOnChange={() => methods.handleSubmit(onSubmit)()} />
          <RowStatistics fromRow={recordsPerPage * (currentPage - 1) + 1} toRow={toRow} totalRows={props.totalRows} />
          <TablePaginator totalPages={props.table.getPageCount()} />
        </form>
      </FormProvider>
    </div>
  )
}
