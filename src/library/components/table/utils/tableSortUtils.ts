import { ColumnSort, SortingState } from "@tanstack/react-table"
import { parseQueryArray } from "@/library/utils/urlParserUtils"

/**
 * Flag used to recognize if value in string should be sorted as descended
 */
export const SORT_DESCENDING_FLAG = process.env.NEXT_PUBLIC_SORT_DESCENDING_FLAG
export const SORT_ASCENDING_FLAG = process.env.NEXT_PUBLIC_SORT_ASCENDING_FLAG

/**
 * Separator used between value and SORT_DESCENDING_FLAG
 *
 * Example: "value1.desc" where "." is separator which results in
 * <pre>
 *   {id: "value1", desc: true}
 * </pre>
 */
export const SORT_SEPARATOR = process.env.NEXT_PUBLIC_SORT_SEPARATOR

/**
 * Converts sorting state from React table to array of strings.
 * @param fields sorting state held by react table
 * @param allowAscendingFlag if enabled, ascending flag will be added to the array of possible states (by default, mere existence of the field determines its sorting in ascending order
 */
export function convertTableSortToArray<T = string>(fields: SortingState, allowAscendingFlag = false) {
  return fields.map((f) => {
    if (!f.desc) return allowAscendingFlag ? f.id + SORT_SEPARATOR + SORT_ASCENDING_FLAG : f.id
    return f.id + SORT_SEPARATOR + SORT_DESCENDING_FLAG
  }) as T[]
}

/**
 * Converts array of strings (typically from url query params) into array usable in react table
 * @param fields array of strings to be converted
 */
export function convertArrayToTableSort(fields: string[]): ColumnSort[] {
  return fields.map((value) => {
    const splitter = value.split(SORT_SEPARATOR)
    return {
      id: splitter[0],
      desc: splitter.length > 1 && splitter[1].startsWith(SORT_DESCENDING_FLAG),
    } satisfies ColumnSort
  })
}

/**
 * Converts sorting array from url search params to api.graphql accepted enum value array
 * @param fields
 */
export function convertQueryParamsSort<T>(fields: string[]) {
  return parseQueryArray(fields).map((s) => s.replace(SORT_SEPARATOR, "_") as T)
}
