import { convertArrayToTableSort } from "@/library/table/utils/tableSortUtils"
import { ColumnSort } from "@tanstack/react-table"

const desc = `${process.env.NEXT_PUBLIC_SORT_SEPARATOR}${process.env.NEXT_PUBLIC_SORT_DESCENDING_FLAG}`
const asc = `${process.env.NEXT_PUBLIC_SORT_SEPARATOR}${process.env.NEXT_PUBLIC_SORT_ASCENDING_FLAG}`

describe("parseSort", () => {
  it("should work", () => {
    const fields = ["first", "second" + desc, "third" + asc]
    const expected: ColumnSort[] = [
      { id: "first", desc: false },
      { id: "second", desc: true },
      { id: "third", desc: false },
    ]
    expect(convertArrayToTableSort(fields)).toEqual(expected)
  })
})
