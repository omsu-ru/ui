import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { RadioRoot } from "@/components";

import {
  ControllerProps,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "../Form";
import { Option } from "./types";

interface RadioGroupControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "component"> {
  options: Option[];
  component:
    | React.ReactElement
    | ((option: { option: Option }) => React.ReactElement);
}

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
