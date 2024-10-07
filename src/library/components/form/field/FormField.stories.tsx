import { FormField as Component } from "./"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { POSITIVE_DECIMAL_NUMBER_PATTERN } from "@/library/validation/pattern"
import { createMaxValueRule } from "@/library/validation/rules"
import { getLocalTimeZone, now } from "@internationalized/date"
import { DateField } from "@/library/input/date/DateField"
import Affix from "@/library/input/affix/Affix"

type FormContext = {
  inputValue: string
}

const meta = {
  title: "FormField/Field",
  tags: ["autodocs"],
  argTypes: {
    description: { description: "Optional description for the field" },
    label: { description: "Label for the textfield. Can be considered as a header of the component" },
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    defaultValue: {
      control: "text",
      description: "Default value for uncontrolled input that will be shown on first render",
    },
    isOptional: { control: "boolean", description: "If set to true, shows user that this field is optional" },
  },
  args: {
    label: "My label",
    defaultValue: "Hello there",
    description: "Description of this form",
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<{
  description?: string
  label?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  isOptional?: boolean
  defaultValue?: string
}>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {},
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { inputValue: props.defaultValue },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Controller
            name={"inputValue"}
            control={methods.control}
            rules={{
              required: { value: true, message: "Cannot be empty" },
              minLength: { value: 2, message: "Value is too small" },
            }}
            render={({ field, fieldState }) => (
              <Component.Root>
                <Component.Label isOptional={props.isOptional}>{props.label}</Component.Label>
                <Component.Controller.Input {...field} disabled={props.isDisabled} readOnly={props.isReadOnly} />
                <Component.Description>{props.description}</Component.Description>
                <Component.ErrorMessage>{fieldState?.error?.message}</Component.ErrorMessage>
              </Component.Root>
            )}
          />
        </FormProvider>
      </form>
    )
  },
}

export const FormListbox: Story = {
  args: {},
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { inputValue: props.defaultValue },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name={"inputValue"}
          control={methods.control}
          rules={{
            validate: (value) => {
              return value === "Second" ? "Dont use second" : true
            },
          }}
          render={({ field, fieldState }) => (
            <Component.Root>
              <Component.Label isOptional={props.isOptional}>{props.label}</Component.Label>
              <Component.Controller.ComboBox
                {...field}
                {...props}
                items={[
                  { id: 1, value: "First" },
                  { id: 2, value: "Second" },
                  { id: 3, value: "Third" },
                ]}
                propertyOfValue={"value"}
                propertyOfKey={"id"}
                isInvalid={fieldState.invalid}
                onChange={(key) => field.onChange(key.value)}
              >
                {(item) => (
                  <div>
                    <p>ID: {item.id}</p>
                    <p>Value: {item.value}</p>
                  </div>
                )}
              </Component.Controller.ComboBox>
              <Component.Description>
                {props.description} {fieldState.invalid ? "invalid" : "valid"}
              </Component.Description>
              <Component.ErrorMessage>{fieldState?.error?.message}</Component.ErrorMessage>
            </Component.Root>
          )}
        />
      </form>
    )
  },
}
export const FormCombobox: Story = {
  args: {
    defaultValue: "First",
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { inputValue: props.defaultValue },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name={"inputValue"}
          control={methods.control}
          rules={{
            validate: (value) => {
              return value === "Second" ? "Dont use second" : true
            },
          }}
          render={({ field, fieldState }) => (
            <Component.Root>
              <Component.Label isOptional={props.isOptional}>{props.label}</Component.Label>
              <Component.Controller.ComboBox
                ref={field.ref}
                onBlur={field.onBlur}
                {...props}
                aria-label={props.label}
                value={props.defaultValue}
                isInvalid={fieldState.invalid}
                propertyOfKey={"id"}
                propertyOfValue={"value"}
                onChange={(key) => field.onChange(key)}
                items={[
                  { id: 1, value: "First" },
                  { id: 2, value: "Second" },
                  { id: 3, value: "Third" },
                ]}
              />
              <Component.Description>
                {props.description} {fieldState.invalid ? "invalid" : "valid"}
              </Component.Description>
              <Component.ErrorMessage>{fieldState?.error?.message}</Component.ErrorMessage>
            </Component.Root>
          )}
        />
      </form>
    )
  },
}

export const FormAffixInput: Story = {
  args: {
    defaultValue: "4",
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { inputValue: props.defaultValue },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name={"inputValue"}
          control={methods.control}
          rules={{
            max: createMaxValueRule(10),
          }}
          render={({ field, fieldState }) => (
            <Component.Root>
              <Component.Label isOptional={props.isOptional}>{props.label}</Component.Label>
              <Component.Controller.AffixInput
                {...field}
                {...props}
                isInvalid={fieldState.invalid}
                regex={POSITIVE_DECIMAL_NUMBER_PATTERN}
                trigger={"zero"}
                prefix={<Affix>Only decimal number</Affix>}
              />
              <Component.Description>
                {props.description} {fieldState.invalid ? "invalid" : "valid"}
              </Component.Description>
              <Component.ErrorMessage>{fieldState?.error?.message}</Component.ErrorMessage>
            </Component.Root>
          )}
        />
      </form>
    )
  },
}

export const FormDateInput: Story = {
  args: {
    defaultValue: now(getLocalTimeZone()).toString(),
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<FormContext>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { inputValue: props.defaultValue },
    })
    const onSubmit: SubmitHandler<FormContext> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Controller
            name={"inputValue"}
            control={methods.control}
            rules={{
              required: { value: true, message: "Cannot be empty" },
              minLength: { value: 2, message: "Value is too small" },
            }}
            render={({ field, fieldState }) => (
              <Component.Root>
                <Component.Label isOptional={props.isOptional}>{props.label}</Component.Label>
                <DateField
                  {...field}
                  aria-label={props.label}
                  isDisabled={props.isDisabled}
                  isReadOnly={props.isReadOnly}
                  onChange={(value) => field.onChange(value.toString())}
                  granularity={"day"}
                  value={field.value}
                />
                <Component.Description>{props.description}</Component.Description>
                <Component.ErrorMessage>{fieldState?.error?.message}</Component.ErrorMessage>
              </Component.Root>
            )}
          />
        </FormProvider>
      </form>
    )
  },
}
