"use client";
import React from "react";
import {
  Button,
  Checkbox,
  CheckboxController,
  Form,
  FormField,
  FormMessage,
  Group,
  GroupContent,
  GroupDescription,
  GroupFooter,
  GroupHeader,
  GroupRoot,
  GroupTitle,
  Icon,
  ListItem,
  Logo,
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
import { Collapsible } from "../../../../Collapsible";
import { cn } from "@/utils";
import { Option, Profiles } from "@/types";
import { useAuthStore } from "../../store";

const ProfilesList = React.memo(() => {
  const { toast } = useToast();
  const {
    nextStep,
    setProfiles,
    step,
    profiles: persisted_profiles,
  } = useAuthStore();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setProfiles(data.profiles as Profiles[]);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify({ ...data, step }, null, 2)}
          </code>
        </pre>
      ),
    });
    nextStep();
  }
  const formInstance = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      profiles: [],
    },
    mode: "onChange",
  });

  const { watch } = formInstance;
  const form_values = watch("profiles");

  const isDispatchAvailable = form_values.length === 0;
  const available_profiles = isDispatchAvailable
    ? profiles
    : getAvailableProfiles(form_values, rules, profiles);

  const selected_profiles = profiles.filter((profile) => {
    if ("radio_options" in profile) {
      return profile.radio_options.options.some((option) =>
        form_values.includes(option.id)
      );
    } else {
      return form_values.includes(profile.id);
    }
  });

  return (
    <Form {...formInstance}>
      <form
        onSubmit={formInstance.handleSubmit(onSubmit)}
        className="space-y-8 relative grid md:justify-center"
      >
        <GroupRoot className="md:min-w-[440px] md:max-w-md max-sm:h-screen">
          <GroupHeader className="max-sm:p-4 z-20 w-full bg-white/80 backdrop-blur-sm  max-sm:sticky max-sm:top-0">
            <Logo />
            <GroupTitle>Кто вы?</GroupTitle>
            <GroupDescription>
              Выберите один или несколько профилей
            </GroupDescription>
          </GroupHeader>
          <GroupContent className="max-sm:p-0 max-sm:max-h-none">
            <FormField
              control={formInstance.control}
              name="profiles"
              render={() =>
                renderFormField(
                  selected_profiles,
                  available_profiles,
                  formInstance
                )
              }
            />
          </GroupContent>
          <GroupFooter className="max-sm:fixed max-sm:bottom-0 w-full bg-white/80 backdrop-blur-sm">
            <Tooltip
              content={
                isDispatchAvailable && "Необходимо выбрать хотя бы один профиль"
              }
              className=" flex-1 flex"
              trigger={
                <div className="flex items-center w-full gap-8">
                  {!isDispatchAvailable && renderUserIcons(selected_profiles)}
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
          </GroupFooter>
        </GroupRoot>
      </form>
    </Form>
  );
});

export { ProfilesList };

const FormSchema = z.object({
  profiles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type Profile = {
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

const profiles: Profile[] = [
  {
    id: "employee",
    label: "Сотрудник ОмГУ",
    icon: OmsuOutlined,
    radio_options: {
      profile_id: "employee",
      options: [
        { id: "professor", label: "Преподаватель" },
        { id: "supervisor", label: "Заведующий кафедрой" },
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
  profile: Profile;
  form: UseFormReturn<
    {
      profiles?: string[];
    },
    any,
    undefined
  >;
}

function getAvailableProfiles(
  form_values: Array<string>,
  restrictions: Rules,
  profiles: Array<Profile>
): Array<Profile> {
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

  const collapsibleLeftContent = (
    <Icon
      icon={profile.icon}
      className={cn(
        "group-data-[state=open]:bg-background-content rounded-full"
      )}
    />
  );

  const collapsibleRightContent = (
    <>
      <ChevronsDownUp className="w-6 h-6 stroke-1 text-muted-foreground hidden group-data-[state=open]:block " />
      <ChevronsUpDown className="w-6 h-6 stroke-1 text-text-secondary hidden group-data-[state=closed]:block" />
    </>
  );

  const collapsibleDescription = (
    <>
      {active?.label && (
        <>
          Вы выбрали: <span className="font-bold">{active.label}</span>
        </>
      )}
    </>
  );

  const collapsibleTitle = profile.label;
  return (
    <Collapsible
      className="flex-1 w-full"
      leftContent={collapsibleLeftContent}
      rightContent={collapsibleRightContent}
      description={collapsibleDescription}
      title={collapsibleTitle}
    >
      <>
        <RadioGroupController
          name="profiles"
          options={collapsible_options}
          component={({ option }) => (
            <label>
              <ListItem
                leftContent={<RadioGroupItem value={option.id} />}
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
            }}
          >
            отменить выбор
          </Button>
        )}
      </>
    </Collapsible>
  );
};

// Function to render user icons
function renderUserIcons(selected_profiles: Profile[]) {
  const icons = selected_profiles.map((profile) => profile.icon);
  return (
    <div className="flex items-center gap-6">
      <p>Вы: </p>
      <div className="flex ">
        {icons.map((icon, key) => (
          <Icon
            icon={icon}
            key={key}
            className="-ml-4 rounded-full border-white border-2"
          />
        ))}
      </div>
    </div>
  );
}

// Function to render form field
function renderFormField(
  selected_profiles: Profile[],
  available_profiles: Profile[],
  form: UseFormReturn<
    {
      profiles?: string[];
    },
    any,
    undefined
  >
) {
  return (
    <>
      {renderProfiles(selected_profiles, form)}
      {selected_profiles.length > 0 && available_profiles.length > 0 && (
        <p className="text-center text-sm text-text-secondary">
          Вы также можете быть
        </p>
      )}
      {renderProfiles(available_profiles, form)}
      <FormMessage />
    </>
  );
}

// Function to render profiles
function renderProfiles(
  profiles: Profile[],
  form: UseFormReturn<
    {
      profiles?: string[];
    },
    any,
    undefined
  >
) {
  return profiles.map((profile) => (
    <>
      {profile.radio_options && (
        <CollapsibleList
          form={form}
          collapsible_options={profile.radio_options.options}
          profile={profile}
        />
      )}
      {!profile.radio_options && renderProfileListItem(profile, form)}
    </>
  ));
}

// Function to render profile list item
function renderProfileListItem(
  profile: Profile,
  form: UseFormReturn<
    {
      profiles?: string[];
    },
    any,
    undefined
  >
) {
  return (
    <label>
      <ListItem
        leftContent={<Icon icon={profile.icon} className="rounded-full" />}
        title={profile.label}
        rightContent={
          <>
            <CheckboxController
              control={form.control}
              name="profiles"
              component={<Checkbox />}
              option={{ id: profile.id }}
            />
          </>
        }
      />
    </label>
  );
}

type Rules = {
  [key: string]: Array<string>;
};
const rules = {
  student: ["employee", "student", "graduate", "event_participant"],
  graduate: ["employee", "student", "graduate", "event_participant"],
  event_participant: [
    "employee",
    "student",
    "graduate",
    "event_participant",
    "pupil",
    "applicant",
  ],
  partner: ["partner", "event_participant"],
  pupil: ["pupil", "event_participant"],
  applicant: ["applicant", "graduate", "event_participant"],
  professor: ["student", "graduate", "event_participant"],
  supervisor: ["student", "graduate", "event_participant"],
};
