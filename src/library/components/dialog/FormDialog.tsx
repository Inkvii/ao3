"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { FormEvent, ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form"
import { Button, Props as ButtonProps } from "@/library/button/Button"
import { HueVariable } from "@/theme/css/HueVariable"

export type Props<TFieldValues extends FieldValues> = {
  title: string
  description: string
  trigger: ReactNode
  hue?: HueVariable
  defaultOpen?: boolean
  accept?: Partial<Omit<ButtonProps, "onPress">>
  decline?: Partial<ButtonProps>
  onSubmit: SubmitHandler<TFieldValues>
  resetFormOnSubmit?: boolean
  className?: string
  children: ReactNode
}
export default function FormDialog<TFieldValues extends FieldValues = FieldValues>({
  defaultOpen = false,
  ...props
}: Props<TFieldValues>) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen)

  const methods = useFormContext<TFieldValues>()

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      await methods.handleSubmit(props.onSubmit)(e)
      if (props.resetFormOnSubmit) {
        methods.reset()
      }
      setIsOpen(false)
    } catch (e) {
      console.error(e)
    }
  }
  const { isValid } = methods.formState

  return (
    <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
      <Dialog.Trigger asChild={true}>{props.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={twMerge("fixed inset-0", "bg-neutral-100/60 dark:bg-neutral-900/70", "backdrop-blur")}
        />
        <Dialog.Content
          className={twMerge(
            "fixed",
            "inset-x-8 top-1/2 -translate-y-1/2 max-h-[70dvh] max-w-4xl mx-auto",
            "overflow-y-auto",
            "rounded-xl border-2",
            "bg-neutral-50 dark:bg-neutral-900",
            "border-neutral-100 dark:border-neutral-800",
            "shadow-lg shadow-neutral-200 dark:shadow-neutral-950",
            "p-8"
          )}
        >
          <Dialog.Title asChild={true} className={"px-8"}>
            <h2>{props.title}</h2>
          </Dialog.Title>
          <Dialog.Description className={"px-8 pb-2"}>{props.description}</Dialog.Description>
          <form onSubmit={onFormSubmit} className={twMerge("flex flex-col gap-2 min-h-[15rem] px-6")}>
            <div className={"ps-2 pe-4 max-h-[50dvh] overflow-y-auto py-4"}>
              <div className={props.className}>{props.children}</div>
            </div>

            <div
              className={twMerge("flex gap-2 grow justify-end items-end", "*:grow", "@container", "*:@[300px]:grow-0")}
              data-testid={"actions"}
            >
              <Button
                {...props.decline}
                variant={"outline"}
                type={"button"}
                hue={props.hue}
                children={props.decline?.children ?? "Cancel"}
                onPress={(e) => {
                  props.decline?.onPress?.(e)
                  setIsOpen(false)
                }}
              />
              <Button
                {...props.accept}
                variant={"solid"}
                type={"submit"}
                hue={props.hue}
                isDisabled={!isValid}
                children={props.accept?.children ?? "Submit"}
              />
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
