import { ComboBox } from "@/library/ui/combobox/ComboBox"
import { useFormContext } from "react-hook-form"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import { RowsPerPage } from "@/library/table/footer/fragment/RowsPerPage"

export default function RowsPerPageSelector(props: { handleOnChange: () => void }) {
  const methods = useFormContext<TablePaginationContext>()

  const rowsPerPageWatch = methods.watch("limit")
  return (
    <div>
      <ComboBox
        aria-label={"rows page selector"}
        items={RowsPerPage.map((value) => ({ label: `${value} rows`, value }))}
        propertyOfValue={"value"}
        propertyOfKey={"label"}
        value={`${rowsPerPageWatch}`}
        onChange={(selected) => {
          methods.setValue("limit", Number(selected.value))
          methods.setValue("page", 1)
          props.handleOnChange()
        }}
      />
    </div>
  )
}
