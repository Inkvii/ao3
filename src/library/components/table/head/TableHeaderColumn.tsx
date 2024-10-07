import { twMerge } from "tailwind-merge"
import { flexRender, Header } from "@tanstack/react-table"
import { CaretDown, CaretUp, CaretUpDown } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { useCallback } from "react"

export type Props<T> = {
  header: Header<T, unknown>
  thClassName?: string
  columnBaseClassName?: string
  columnSortableClassName?: string
}

export default function TableHeaderColumn<T>({ header, ...props }: Props<T>) {
  const { handleOnClick } = useTableHeaderToggleSorting(header)

  // width is set as a workaround since mix of auto with fixed size cells doesnt work well in react-table
  return (
    <th
      colSpan={header.colSpan}
      className={twMerge(props.thClassName)}
      style={{
        width: header.getSize() !== 0 ? header.getSize() : undefined,
      }}
      data-sortingid={header.id}
    >
      {header.isPlaceholder ? null : (
        <div
          {...{
            className: twMerge(props.columnBaseClassName, header.column.getCanSort() && props.columnSortableClassName),
            onClick: handleOnClick,
          }}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          <SortingIcon header={header} />
        </div>
      )}
    </th>
  )
}

function SortingIcon<T>(props: { header: Header<T, unknown> }) {
  if (!props.header.column.getCanSort()) return null

  switch (props.header.column.getIsSorted()) {
    case "asc":
      return (
        <CaretUp
          weight={"fill"}
          className={"text-primary-600 dark:text-primary-500 shrink-0"}
          size={IconConstants.md}
          data-sortdirection={process.env.NEXT_PUBLIC_SORT_ASCENDING_FLAG}
        />
      )
    case "desc":
      return (
        <CaretDown
          weight={"fill"}
          className={"text-primary-600 dark:text-primary-500 shrink-0"}
          size={IconConstants.md}
          data-sortdirection={process.env.NEXT_PUBLIC_SORT_DESCENDING_FLAG}
        />
      )
    default:
      return (
        <CaretUpDown
          weight={"fill"}
          className={"text-primary-600 dark:text-primary-500 shrink-0"}
          size={IconConstants.md}
        />
      )
  }
}

function useTableHeaderToggleSorting<T>(header: Header<T, unknown>) {
  const handleOnClick = useCallback(() => {
    if (!header.column.getCanSort()) return

    switch (header.column.getIsSorted()) {
      case false:
        header.column.toggleSorting(true)
        break
      case "asc":
        header.column.clearSorting()
        break
      case "desc":
        header.column.toggleSorting(false)
        break
    }
  }, [header.column])

  return { handleOnClick }
}
