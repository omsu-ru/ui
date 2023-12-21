"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller as FieldContoller,
  ControllerProps as FieldControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  UseFormStateReturn,
  useFormContext,
} from "react-hook-form";

import { createContext } from "react";

import { cn } from "@/utils";
import { Button, Label, RadioRoot } from "@/components";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: FieldControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <FieldContoller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

type Option = {
  id: string;
  label?: string;
};

interface ControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<FieldControllerProps<TFieldValues, TName>, "render">,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  component: React.ReactElement;
  label?: string;
  description?: string;
  // option?: Option;
}

interface InputControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ControllerProps<TFieldValues, TName> {}

interface CheckboxControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ControllerProps<TFieldValues, TName> {
  option: Option;
}

interface RadioGroupControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "component"> {
  options: Option[];
  component:
    | React.ReactElement
    | ((option: { option: Option }) => React.ReactElement);
}

// Разделить логину Controller на InputController, CheckboxController, RadioController, RadioGroupController.
// Попробовать использовать Controller как шаблон для остальных Controller'ов
// Есть 3 варианта решить проблему с радиокнопками
// 1.Собрать логику из компонентов Form. Минус заключается в том, что эту логику из компонентов все равно придется инкапсульровать в одельных компонент, т.к код будет очень тяжело читать
// 2. Обрабатывать логику радиокнопок через добавление пропса options в Controller. Минус в том, что Controller становится тяжело читать
// 3. Разделить логику на отдельные контроллеры. Отдельные контроллеры для одного поля и для нескольких. Минусов пока не вижу.

const InputController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: InputControllerProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            {React.cloneElement(props.component, {
              ...field,
            })}
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

InputController.displayName = "InputController";

const CheckboxController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: CheckboxControllerProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => {
        const options = field.value;

        const isChecked =
          typeof options === "object"
            ? options.includes(props.option.id)
            : field.value;

        const handleCheckedChange = (checked: boolean) => {
          if (typeof options === "object") {
            return checked
              ? field.onChange([...options, props.option.id])
              : field.onChange(
                  options.filter((value: any) => value !== props.option.id)
                );
          } else {
            return field.onChange(checked);
          }
        };

        return (
          <FormItem>
            <FormLabel>{props.option.label}</FormLabel>
            <FormControl>
              {React.cloneElement(props.component, {
                checked: isChecked,
                onCheckedChange: handleCheckedChange,
              })}
            </FormControl>
            <FormDescription>{props.description}</FormDescription>
            {!props.option && <FormMessage />}
          </FormItem>
        );
      }}
    />
  );
};

CheckboxController.displayName = "CheckboxController";

const RadioGroupController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: RadioGroupControllerProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => {
        const form_values = field.value;
        const active = form_values.filter((form_value: any) =>
          props.options.some((option) => option.id === form_value)
        )[0];

        const handleRadioChange = (value: string) => {
          // 1. Удаляем активную радиокнопку из массива form_values
          const new_form_values = form_values.filter(
            (form_value: any) =>
              !props.options.some((option) => option.id === form_value)
          );

          // 2. Добавляем id выбранной радиокнопки вместе с другими значениями в массив формы.
          field.onChange([...new_form_values, value]);
        };

        const clearRadioButtons = () => {
          const new_form_values = form_values.filter(
            (form_value: any) =>
              !props.options.some((option) => option.id === form_value)
          );

          field.onChange([...new_form_values]);
        };

        return (
          <FormItem>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <RadioRoot
                onValueChange={handleRadioChange}
                defaultValue={active}
              >
                {props.options.map((option) => (
                  <>
                    {React.cloneElement(
                      typeof props.component === "function"
                        ? props.component({ option })
                        : props.component,
                      {
                        value: option.id,
                      }
                    )}
                  </>
                ))}
              </RadioRoot>
            </FormControl>
            <FormDescription>{props.description}</FormDescription>
          </FormItem>
        );
      }}
    />
  );
};

RadioGroupController.displayName = "RadioGroupController";

// const Controller = <
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// >({
//   ...props
// }: ControllerProps<TFieldValues, TName>) => {
//   const isCheckbox = props.type === "checkbox";
//   const isRadio = props.type === "radio";
//   return (
//     <FormField
//       {...props}
//       render={({ field }) => {
//         const options = field.value;

//         const isChecked = props.option
//           ? options.includes(props.option.id)
//           : field.value;

//         const handleCheckedChange = (checked: boolean) => {
//           const options = field.value;
//           if (props.option) {
//             return checked
//               ? field.onChange([...options, props.option.id])
//               : field.onChange(
//                   options.filter((value: any) => value !== props.option.id)
//                 );
//           }
//           return field.onChange(checked);
//         };

//         const handleRadioChange = (value: string) => {
//           console.log({ value });
//           console.log(options);
//           return field.onChange([...options, value]);
//         };

//         return (
//           <FormItem>
//             <FormLabel>{props.label}</FormLabel>
//             <FormControl>
//               <>
//                 {isCheckbox &&
//                   React.cloneElement(props.component, {
//                     checked: isChecked,
//                     onCheckedChange: handleCheckedChange,
//                   })}

//                 {isRadio &&
//                   React.cloneElement(props.component, {
//                     value: field.value,
//                     onValueChange: handleRadioChange,
//                   })}

//                 {!isRadio &&
//                   !isCheckbox &&
//                   React.cloneElement(props.component, {
//                     ...field,
//                   })}
//               </>
//             </FormControl>
//             <FormDescription>{props.description}</FormDescription>
//             {!props.option && <FormMessage />}
//           </FormItem>
//         );
//       }}
//     />
//   );
// };

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  RadioGroupController,
  // Controller,
  InputController,
  CheckboxController,
};
