import React from "react";
import { Button, Checkbox, Controller, Form, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks";

const FormSchema = z.object({
  text: z.string().default("").optional(),
});

const ControlleInput = () => {
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
      text: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Controller
          control={form.control}
          name="text"
          component={<Input placeholder="Логин" />}
          label="Логин"
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
  );
};

export { ControlleInput };
