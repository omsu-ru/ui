import React from "react";
import {
  Button,
  Checkbox,
  Controller,
  Form,
  FormControl,
  FormField,
  FormMessage,
  Group,
  Icon,
  ListItem,
  Tooltip,
} from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks";
import {
  CalendarHeart,
  Flame,
  Graduation,
  GraduationCap,
  HeartHandshake,
  OmsuOutlined,
  Rocket,
  Sparkles,
} from "@/icons";

const FormSchema = z.object({
  profiles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const profiles = [
  { id: "professor", label: "Преподаватель", icon: GraduationCap },
  { id: "student", label: "Студент", icon: Rocket },
  { id: "employee", label: "Сотрудник ОмГУ", icon: OmsuOutlined },
  { id: "pupil", label: "Ученик", icon: Flame },
  { id: "applicant", label: "Абитуриент", icon: Sparkles },
  { id: "partner", label: "Партнер", icon: HeartHandshake },
  {
    id: "event_participant",
    label: "Участник мероприятия",
    icon: CalendarHeart,
  },
  { id: "graduate", label: "Выпускник", icon: Graduation },
];

const ProfilesList = React.memo(() => {
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

  const {
    formState: { errors },
    getFieldState,
  } = form;

  const isDispatchAvailable = !form.formState.isValid;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Group
          title="Кто вы?"
          description="Выберите один или несколько профилей"
          footer={
            <Tooltip
              content={
                isDispatchAvailable && "Необходимо выбрать хотя бы один профиль"
              }
              className=" flex-1 flex"
              trigger={
                <Button
                  type="submit"
                  size="lg"
                  className="flex w-full"
                  disabled={isDispatchAvailable}
                >
                  Отправить
                </Button>
              }
            />
          }
        >
          <FormField
            control={form.control}
            name="profiles"
            render={() => (
              <>
                {profiles.map((profile) => (
                  <label key={profile.id}>
                    <ListItem
                      leftIcon={<Icon icon={profile.icon} />}
                      title={profile.label}
                      righticon={
                        <Controller
                          control={form.control}
                          name="profiles"
                          component={<Checkbox />}
                          type="checkbox"
                          option={profile}
                        />
                      }
                    />
                  </label>
                ))}
                <FormMessage />
              </>
            )}
          />
        </Group>
      </form>
    </Form>
  );
});

export { ProfilesList };
