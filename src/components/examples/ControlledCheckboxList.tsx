import React, { useRef } from "react";
import {
  Button,
  Checkbox,
  Controller,
  Form,
  Icon,
  Input,
  ListItem,
} from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks";
import { Rocket } from "@/icons";

const FormSchema = z.object({
  profiles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const ControlledCheckboxList = () => {
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
      profiles: [],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Controller
          control={form.control}
          name="profiles"
          component={<Checkbox />}
          type="checkbox"
          label="Сотрудник"
          option={{ id: "employee" }}
        />

        <Controller
          control={form.control}
          name="profiles"
          component={<Checkbox />}
          type="checkbox"
          label="Студент"
          option={{ id: "student" }}
        />

        <Controller
          control={form.control}
          name="profiles"
          component={<Checkbox />}
          type="checkbox"
          label="Преподаватель"
          option={{ id: "professor" }}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
  );
};

export { ControlledCheckboxList };
