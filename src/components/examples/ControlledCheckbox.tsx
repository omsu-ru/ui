import React from "react";
import {
  Button,
  Checkbox,
  CheckboxController,
  Form,
  Input,
} from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks";

const FormSchema = z.object({
  option: z.boolean().default(false).optional(),
});

const ControlledCheckbox = () => {
  const { toast } = useToast();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      option: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CheckboxController
          option={{ id: "option", label: "option" }}
          control={form.control}
          name="option"
          component={<Checkbox />}
          type="checkbox"
          label="option"
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
  );
};

export { ControlledCheckbox };
