"use client"
import { useEffect, useMemo } from "react"
import { PaginatedMetadata } from "@/library/utils/types"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { convertToUrlParams } from "@/library/utils/requestTransformerUtils"
import { useRouter, useSearchParams } from "next/navigation"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import RowsPerPageSelector from "@/library/table/footer/fragment/RowsPerPageSelector"
import RowStatistics from "@/library/table/footer/fragment/RowStatistics"
import TablePaginator from "@/library/table/footer/fragment/TablePaginator"
import { getSearchParams } from "@/library/router/getSearchParams"
import useTheme from "@/theme/table/footer/useTheme"
import { TableVariant } from "@/theme/table/TableVariant"
import { twMerge } from "tailwind-merge"

export type Props = {
  totalPages: number
  pageSize: number
  totalRows: number
  variant: TableVariant
}

export default function TableFooter(props: Props) {
  const theme = useTheme(props.variant)
  const searchParams = useSearchParams()

  const router = useRouter()

  const methods = useForm<TablePaginationContext>({
    mode: "onChange",
    shouldFocusError: false,
    defaultValues: createDefaultParams(searchParams, props.pageSize),
  })

  const currentPage = methods.getValues("page")
  const toRow: number = useMemo(() => {
    if (currentPage === props.totalPages) return props.totalRows

    return currentPage * props.pageSize
  }, [props, currentPage])

  useEffect(() => {
    methods.reset(createDefaultParams(searchParams, props.pageSize))
  }, [methods, searchParams, props.pageSize])

  const onSubmit: SubmitHandler<TablePaginationContext> = async (data) => {
    if (!data.page) throw new Error("Page number was not set")

    const query: PaginatedMetadata = {
      page: data.page,
      limit: data.limit,
    }

    const url = convertToUrlParams(query, searchParams)
    router.push("?" + url.toString())
  }

  return (
    <div className={twMerge(theme.wrapper)} data-testid={"table-footer"}>
      <FormProvider {...methods}>
        <form
          className={twMerge(theme.form)}
          action={() => {
            methods.handleSubmit(onSubmit)()
          }}
        >
          <RowsPerPageSelector handleOnChange={() => methods.handleSubmit(onSubmit)()} />
          <RowStatistics fromRow={props.pageSize * (currentPage - 1) + 1} toRow={toRow} totalRows={props.totalRows} />
          <TablePaginator totalPages={props.totalPages} />
        </form>
      </FormProvider>
    </div>
  )
}

function createDefaultParams(searchParams: URLSearchParams, pageSize: number): TablePaginationContext {
  return {
    page: Number(getSearchParams<PaginatedMetadata>("page", searchParams) ?? "1"),
    limit: pageSize,
  }
}
