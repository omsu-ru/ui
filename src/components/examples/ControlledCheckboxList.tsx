import React, { useRef } from "react";
import {
  Button,
  Checkbox,
  CheckboxController,
  Form,
  Group,
  GroupContent,
  GroupDescription,
  GroupFooter,
  GroupHeader,
  GroupRoot,
  GroupTitle,
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
      <GroupRoot>
        <GroupHeader>
          <GroupTitle>Profiles</GroupTitle>
          <GroupDescription>
            Пример использования нескольких contolled чекбоксов
          </GroupDescription>
        </GroupHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <GroupContent className="px-6 flex justify-between">
            <CheckboxController
              control={form.control}
              name="profiles"
              component={<Checkbox />}
              type="checkbox"
              option={{ id: "employee", label: "Сотрудник" }}
            />

            <CheckboxController
              control={form.control}
              name="profiles"
              component={<Checkbox />}
              type="checkbox"
              option={{ id: "student", label: "Студент" }}
            />

            <CheckboxController
              control={form.control}
              name="profiles"
              component={<Checkbox />}
              type="checkbox"
              option={{ id: "professor", label: "Преподаватель" }}
            />
          </GroupContent>

          <GroupFooter>
            <Button type="submit">Отправить</Button>
          </GroupFooter>
        </form>
      </GroupRoot>
    </Form>
  );
};

export { ControlledCheckboxList };
