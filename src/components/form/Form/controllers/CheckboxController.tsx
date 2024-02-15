import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import {
  ControllerProps,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../Form";
import { Option } from "./types";

interface CheckboxControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ControllerProps<TFieldValues, TName> {
  option: Option;
}

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
