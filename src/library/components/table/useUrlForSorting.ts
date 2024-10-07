import { useRouter, useSearchParams } from "next/navigation"
import { SetStateAction, useCallback, useEffect, useState } from "react"
import { SortingState } from "@tanstack/react-table"
import { convertArrayToTableSort, convertTableSortToArray } from "@/library/table/utils/tableSortUtils"
import { convertToUrlParams } from "@/library/utils/requestTransformerUtils"

/**
 * Used mainly for server side rendered tables. Sorting state will be persisted to search params, appending existing
 * (if there are any)
 */
export function useUrlForSorting() {
  const searchParams = useSearchParams()
  const [sorting, setSorting] = useState<SortingState>(convertArrayToTableSort(searchParams.getAll("sort")))
  const router = useRouter()

  const handleSorting = useCallback(
    (newSorting: SetStateAction<SortingState>) => {
      setSorting(newSorting)
      if (typeof newSorting === "function") {
        const newSortingState: SortingState = (newSorting as () => SortingState)()

        const url = convertToUrlParams({ sort: convertTableSortToArray(newSortingState, true) }, searchParams)
        router.replace("?" + url.toString())
      }
    },
    [router, searchParams]
  )

  useEffect(() => {
    // reset sorting when search params change
    setSorting(convertArrayToTableSort(searchParams.getAll("sort")))
  }, [searchParams])

  return { sorting, handleSorting }
}
