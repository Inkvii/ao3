import { default as Component } from "./FormDialog"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@/library/button/Button"
import { POSITIVE_INTEGER } from "@/library/validation/pattern"
import { Skeleton } from "@/library/loader/skeleton"
import { TableProps } from "@/library/stories/types"
import { FormField } from "@/library/form/field"

const meta = {
  title: "Modals/FormDialog",
  component: Component,
  tags: [],
  argTypes: {
    title: { description: "Header of the open modal" },
    defaultOpen: { table: { disable: true } } satisfies TableProps,
    trigger: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
    className: { table: { disable: true } } satisfies TableProps,
    resetFormOnSubmit: { table: { disable: true } } satisfies TableProps,
    onSubmit: { table: { disable: true } } satisfies TableProps,
    accept: { table: { disable: true } } satisfies TableProps,
    decline: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    onSubmit: () => {},
    defaultOpen: true,
    description: "Some kind of description",
    trigger: (
      <Button hue={"primary"} variant={"solid"} type={"button"} className={"min-w-full sm:w-fit sm:min-w-fit"}>
        Show dialog
      </Button>
    ),
  },

  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

type FormContext = {
  name: string
  age: string
}

export const ControlledComponent: Story = {
  args: {
    title: "Title header",
    children: null,
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { name: "", age: "" },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <FormProvider {...methods}>
        <Component {...props} defaultOpen={true} onSubmit={onSubmit}>
          <Controller
            control={methods.control}
            name={"name"}
            rules={{
              required: { value: true, message: "Cannot be empty" },
              minLength: { value: 2, message: "Value is too small" },
            }}
            render={({ field, fieldState }) => (
              <FormField.Root>
                <FormField.Label>First name</FormField.Label>
                <FormField.Controller.Input {...field} />
                <FormField.Description>Insert first name of your name</FormField.Description>
                <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
              </FormField.Root>
            )}
          />
          <Controller
            control={methods.control}
            name={"age"}
            rules={{
              required: { value: true, message: "Cannot be empty" },
              minLength: { value: 2, message: "Value is too small" },
            }}
            render={({ field, fieldState }) => (
              <FormField.Root>
                <FormField.Label>Age</FormField.Label>
                <FormField.Controller.AffixInput
                  {...field}
                  aria-label={"Age"}
                  regex={POSITIVE_INTEGER}
                  isInvalid={!!fieldState.error?.message}
                />
                <FormField.Description>Age (numeric)</FormField.Description>
                <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
              </FormField.Root>
            )}
          />
        </Component>
      </FormProvider>
    )
  },
}

export const LongDialog: Story = {
  args: {
    title: "Title header",
    children: null,
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { name: "", age: "" },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <FormProvider {...methods}>
        <Component {...props} defaultOpen={true} onSubmit={onSubmit}>
          <Controller
            control={methods.control}
            name={"name"}
            rules={{
              required: { value: true, message: "Cannot be empty" },
              minLength: { value: 2, message: "Value is too small" },
            }}
            render={({ field, fieldState }) => (
              <FormField.Root>
                <FormField.Label>First name</FormField.Label>
                <FormField.Controller.Input {...field} />
                <FormField.Description>Insert first name of your name</FormField.Description>
                <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
              </FormField.Root>
            )}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio minima, nesciunt nisi odio
            optio veniam voluptate! Accusantium consequatur fugiat itaque nihil. Eaque earum facilis fugiat, harum, id
            illum iusto molestiae nam natus nemo nobis perferendis quae quam, quo ut. Accusamus ad adipisci commodi, cum
            cupiditate deleniti dolores dolorum eos est ex exercitationem explicabo facere illo illum incidunt
            laboriosam laudantium libero nobis non odio officia perspiciatis possimus quis quo quod ratione recusandae
            rerum sit tempore tenetur. Ab aliquam blanditiis consequuntur corporis, cum deleniti eaque esse facilis
            harum impedit in incidunt ipsam ipsum itaque iure laboriosam libero magni minus nemo, non numquam obcaecati
            officia quaerat quibusdam quisquam ratione recusandae rerum similique sunt ut veniam, voluptate voluptates
            voluptatum? Alias dolorum enim eum facere in ipsa laudantium molestias, numquam officia perferendis soluta
            temporibus? Accusamus atque debitis dolor dolores, incidunt maxime mollitia omnis rem repellat ullam! Ab
            deserunt dignissimos fugit, molestias nam sunt suscipit. Aliquid architecto beatae consectetur culpa cum
            cumque dolorum esse eveniet, excepturi in non quis soluta vitae voluptas voluptate voluptatem voluptatibus.
            Amet animi consequatur cum cupiditate delectus dicta dolore et excepturi expedita iure laboriosam, maxime
            nostrum odio optio possimus provident quaerat quidem repellat repudiandae saepe sunt suscipit tempora ullam
            unde voluptates?
          </p>
          <Controller
            control={methods.control}
            name={"age"}
            rules={{
              required: { value: true, message: "Cannot be empty" },
              minLength: { value: 2, message: "Value is too small" },
            }}
            render={({ field, fieldState }) => (
              <FormField.Root>
                <FormField.Label>Age</FormField.Label>
                <FormField.Controller.AffixInput
                  {...field}
                  aria-label={"Age"}
                  regex={POSITIVE_INTEGER}
                  isInvalid={!!fieldState.error?.message}
                />
                <FormField.Description>Age (numeric)</FormField.Description>
                <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
              </FormField.Root>
            )}
          />
          <Skeleton.Root>
            <Skeleton.Circle size={"40px"} />
            <Skeleton.Text lineCount={7} />
          </Skeleton.Root>
          <Skeleton.Root>
            <Skeleton.Rectangle width={"100%"} height={"200px"} />
            <Skeleton.Text lineCount={7} />
          </Skeleton.Root>
        </Component>
      </FormProvider>
    )
  },
}
