"use client"
import { Button } from "@/library/button/Button"
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { POSITIVE_INTEGER } from "@/library/validation/pattern"
import { Controller, useFormContext } from "react-hook-form"
import { createMaxValueRule, createValueIsRequiredRule } from "@/library/validation/rules"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import { useFormStatus } from "react-dom"
import { AffixInput } from "@/library/input/affix/AffixInput"

export default function TablePaginator(props: { totalPages: number }) {
  const methods = useFormContext<TablePaginationContext>()
  const { pending } = useFormStatus()
  return (
    <div className={"flex gap-2"} data-testid={"table-paginator"}>
      <div className={"inline-flex items-center gap-1"}>
        Page{" "}
        <Controller
          control={methods.control}
          name={"page"}
          rules={{
            max: createMaxValueRule(props.totalPages),
            required: createValueIsRequiredRule(),
          }}
          render={({ field, fieldState }) => (
            <AffixInput
              {...field}
              isInvalid={fieldState.invalid}
              aria-label={"Current page"}
              type={"text"}
              regex={POSITIVE_INTEGER}
              className={"w-16"}
              value={field.value?.toString()}
            />
          )}
        />
        of {props.totalPages}
      </div>
      {/*Note - this submit input handles situation when user changes page using input and hits enter, as its the first submit button in form*/}
      <input type={"submit"} hidden />
      <div className={"flex"}>
        <Controller
          control={methods.control}
          name={"page"}
          render={({ field }) => (
            <Button
              ref={field.ref}
              onBlur={field.onBlur}
              type={"submit"}
              variant={"hyperlink"}
              size={"none"}
              isDisabled={pending}
              onPress={() => {
                if (field.value > 1) field.onChange(field.value - 1)
              }}
            >
              <CaretLeft size={IconConstants.lg} />
            </Button>
          )}
        />
        <Controller
          control={methods.control}
          name={"page"}
          render={({ field }) => (
            <Button
              ref={field.ref}
              onBlur={field.onBlur}
              type={"submit"}
              variant={"hyperlink"}
              size={"none"}
              isDisabled={pending}
              onPress={() => {
                if (field.value < props.totalPages) field.onChange(field.value + 1)
              }}
            >
              <CaretRight size={IconConstants.lg} />
            </Button>
          )}
        />
      </div>
    </div>
  )
}
