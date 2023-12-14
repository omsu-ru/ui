"use client";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxController,
  Form,
  FormField,
  FormMessage,
  Group,
  Icon,
  ListItem,
  RadioGroupController,
  RadioGroupItem,
  Tooltip,
} from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks";
import {
  CalendarHeart,
  Flame,
  Graduation,
  HeartHandshake,
  OmsuOutlined,
  Rocket,
  Sparkles,
  ChevronsDownUp,
  ChevronsUpDown,
} from "@/icons";
import { Collapsible } from "../Collapsible";
import { cn } from "@/utils";
import { Option } from "@/types";

const FormSchema = z.object({
  profiles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type ProfileOption = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  radio_options?: {
    profile_id: string;
    options: {
      id: string;
      label: string;
    }[];
  };
};
const profiles: ProfileOption[] = [
  {
    id: "employee",
    label: "Сотрудник ОмГУ",
    icon: OmsuOutlined,
    radio_options: {
      profile_id: "employee",
      options: [
        { id: "professor", label: "Преподаватель" },
        { id: "supervisor", label: "Заведующий кафедрой" },
        { id: "dean", label: "Декан" },
      ],
    },
  },
  { id: "student", label: "Студент", icon: Rocket },
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

interface CollapsibleListProps {
  collapsible_options: Option[];
  profile: ProfileOption;
  form: UseFormReturn<
    {
      profiles?: string[];
    },
    any,
    undefined
  >;
}

const CollapsibleList = ({
  collapsible_options,
  form,
  profile,
}: CollapsibleListProps) => {
  const active = form
    .getValues("profiles")
    .map((form_value: any) =>
      collapsible_options.find((option) => option.id === form_value)
    )
    .filter(Boolean)[0];
  return (
    <Collapsible
      className="flex-1 w-full"
      trigger={({ open }) => (
        <ListItem
          className={cn()}
          active={open}
          leftIcon={
            <Icon
              icon={profile.icon}
              className={cn(open && "bg-background-content", "rounded-full")}
            />
          }
          description={
            <>
              {active?.label && (
                <>
                  Вы выбрали: <span className="font-bold">{active.label}</span>
                </>
              )}
            </>
          }
          title={profile.label}
          righticon={
            <>
              {open ? (
                <ChevronsDownUp className="w-6 h-6 stroke-1 text-muted-foreground  " />
              ) : (
                <ChevronsUpDown className="w-6 h-6 stroke-1 text-text-secondary " />
              )}
            </>
          }
        />
      )}
      content={({ setOpen }) => (
        <>
          <RadioGroupController
            name="profiles"
            options={collapsible_options}
            component={({ option }) => (
              <label>
                <ListItem
                  righticon={<></>}
                  leftIcon={<RadioGroupItem value={option.id} />}
                  title={option.label}
                />
              </label>
            )}
            control={form.control}
          />
          {active && (
            <Button
              variant="link"
              className="text-secondary flex   m-auto"
              onClick={() => {
                const new_form_values = form
                  .getValues("profiles")
                  .filter(
                    (form_value: any) =>
                      !collapsible_options.some(
                        (option) => option.id === form_value
                      )
                  );

                form.setValue("profiles", [...new_form_values]);
                setOpen(false);
              }}
            >
              отменить выбор
            </Button>
          )}
        </>
      )}
    />
  );
};

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
    mode: "onChange",
  });

  const {
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = form;

  const form_values = watch("profiles");

  const isDispatchAvailable = form_values.length === 0;

  const icons = form_values.map(
    (value) =>
      profiles.find(
        (profile) =>
          profile.id ===
          (value === "professor" || value === "dean" || value === "supervisor"
            ? "employee"
            : value)
      ).icon
  );

  type Rules = {
    [key: string]: Array<string>;
  };
  const rules = {
    employee: [
      "employee",
      "student",
      "graduate",
      "event_participant",
      "professor",
    ],
    student: [
      "employee",
      "student",
      "graduate",
      "event_participant",
      "professor",
    ],
    graduate: [
      "employee",
      "student",
      "graduate",
      "event_participant",
      "professor",
    ],
    event_participant: [
      "employee",
      "student",
      "graduate",
      "event_participant",
      "pupil",
      "applicant",
      "professor",
    ],
    partner: ["partner", "event_participant"],
    pupil: ["pupil", "event_participant"],
    applicant: ["applicant", "graduate", "event_participant"],
    professor: ["student", "graduate", "event_participant"],
  };

  function getAvailableProfiles(
    form_values: Array<string>,
    restrictions: Rules,
    profiles: Array<ProfileOption>
  ): Array<ProfileOption> {
    let availableProfiles: Array<string> = [];
    form_values.map((value) => {
      let restrictedProfiles: Array<string> = restrictions[value];

      if (availableProfiles.length === 0) {
        availableProfiles = restrictedProfiles;
      } else {
        availableProfiles = availableProfiles.filter((profile) =>
          restrictedProfiles.includes(profile)
        );
      }
    });

    // Filter the profiles array based on the availableProfiles array
    return profiles
      .filter((profile) => {
        // Если ли среди дополнительных опций профиля разрешенные айди?
        if ("options" in profile) {
          return profile.radio_options.options.some(({ id }) =>
            availableProfiles.includes(id)
          );
        } else {
          return availableProfiles.includes(profile.id);
        }
      })
      .filter((profile) => !form_values.includes(profile.id));
  }

  const available_profiles = isDispatchAvailable
    ? profiles
    : getAvailableProfiles(form_values, rules, profiles);

  const chosenProfiles = profiles.filter((profile) => {
    if ("radio_options" in profile) {
      return profile.radio_options.options.some((option) =>
        form_values.includes(option.id)
      );
    } else {
      return form_values.includes(profile.id);
    }
  });

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
                <div className="flex items-center w-full gap-8">
                  {!isDispatchAvailable && (
                    <div className="flex items-center gap-6">
                      <p>Вы: </p>
                      <div className="flex ">
                        {icons.map((icon, key) => (
                          <Icon
                            icon={icon}
                            key={key}
                            className="-ml-4 rounded-full  border-white border-2"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="flex w-full "
                    disabled={isDispatchAvailable}
                  >
                    Продолжить
                  </Button>
                </div>
              }
            />
          }
        >
          <FormField
            control={form.control}
            name="profiles"
            render={() => (
              <>
                {chosenProfiles.map((profile) => (
                  <>
                    {profile.radio_options && (
                      <CollapsibleList
                        form={form}
                        collapsible_options={profile.radio_options.options}
                        profile={profile}
                      />
                    )}
                    {!profile.radio_options && (
                      <label>
                        <ListItem
                          leftIcon={
                            <Icon
                              icon={profile.icon}
                              className="rounded-full"
                            />
                          }
                          title={profile.label}
                          righticon={
                            <>
                              <CheckboxController
                                control={form.control}
                                name="profiles"
                                component={<Checkbox />}
                                option={profile}
                              />
                            </>
                          }
                        />
                      </label>
                    )}
                  </>
                ))}
                {form_values.length > 0 && available_profiles.length > 0 && (
                  <p className="text-center text-sm text-text-secondary">
                    Вы также можете быть
                  </p>
                )}
                {available_profiles.map((profile) => (
                  <>
                    {profile.radio_options && (
                      <CollapsibleList
                        form={form}
                        collapsible_options={profile.radio_options.options}
                        profile={profile}
                      />
                    )}
                    {!profile.radio_options && (
                      <label>
                        <ListItem
                          leftIcon={
                            <Icon
                              icon={profile.icon}
                              className="rounded-full"
                            />
                          }
                          title={profile.label}
                          righticon={
                            <>
                              <CheckboxController
                                control={form.control}
                                name="profiles"
                                component={<Checkbox />}
                                option={profile}
                              />
                            </>
                          }
                        />
                      </label>
                    )}
                  </>
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
