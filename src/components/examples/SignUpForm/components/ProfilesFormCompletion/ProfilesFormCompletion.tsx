import React from "react";
import { useAuthStore } from "../../store";
import { ZodObject, z } from "zod";
import { profiles_schemas } from "./schemas";
import { ProfileSchemas } from "../../types";
import { toast } from "@/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Form,
  FormField,
  Group,
  GroupContent,
  GroupDescription,
  GroupFooter,
  GroupHeader,
  GroupRoot,
  GroupTitle,
  Icon,
  Input,
  InputController,
  Logo,
} from "@/components";

import { IdLogo } from "@/icons";

import { Profiles } from "@/types";
import { profiles_fields } from "../../data";

const ProfilesFormCompletion = () => {
  const { profiles, prevStep } = useAuthStore((state) => ({
    profiles: state.profiles,
    prevStep: state.prevStep,
  }));
  const FormSchema = z.object(
    profiles.reduce((acc: ProfileSchemas, profile: keyof typeof Profiles) => {
      acc[profile] = profiles_schemas[profile];
      return acc;
    }, {} as ProfileSchemas)
  );

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify({ ...data }, null, 2)}
          </code>
        </pre>
      ),
    });
  }
  const formInstance = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
    mode: "onChange",
  });

  return (
    <Form {...formInstance}>
      <form
        onSubmit={formInstance.handleSubmit(onSubmit)}
        className="space-y-8 relative grid md:justify-center"
      >
        <GroupRoot className="md:min-w-[440px] md:max-w-md max-sm:h-screen">
          <GroupHeader className="max-sm:p-4 z-20 w-full bg-white/80 backdrop-blur-sm  max-sm:sticky max-sm:top-0">
            <Logo variant="default" size="default" icon={IdLogo} />
            <GroupTitle>Заполнение данных</GroupTitle>
            <GroupDescription>Остался последний шаг!</GroupDescription>
          </GroupHeader>
          <GroupContent className="max-sm:p-0 max-sm:max-h-none">
            <Accordion type="multiple" className="px-2">
              {profiles.map((profile) => (
                <AccordionItem key={profile} value={profile}>
                  <AccordionTrigger
                    className="font-normal text-text"
                    title={profiles_fields[profile].title}
                    leftContent={
                      <Icon
                        icon={profiles_fields[profile].icon}
                        className="rounded-full"
                        status={
                          formInstance.getFieldState(profile).invalid ||
                          !formInstance.getFieldState(profile).isTouched
                            ? "error"
                            : "success"
                        }
                        onClick={() =>
                          console.log(formInstance.getFieldState(profile))
                        }
                      />
                    }
                  />
                  <AccordionContent className="mt-4">
                    <FormField
                      name={profile}
                      control={formInstance.control}
                      render={({}) => {
                        return (
                          <>
                            {profiles_fields[profile].fields.map((field) => (
                              <InputController
                                key={field.name}
                                component={
                                  <Input
                                    placeholder={field.placeholder}
                                    type={field.type}
                                  />
                                }
                                name={`${profile}.${field.name}`}
                                label={field.label}
                                control={formInstance.control}
                              />
                            ))}
                          </>
                        );
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GroupContent>
          <GroupFooter className="max-sm:stickymax-sm:bottom-0 w-full bg-white/80 backdrop-blur-sm">
            <div className="grid items-center w-full gap-2">
              <Button
                type="submit"
                size="lg"
                className="flex w-full "
                disabled={!formInstance.formState.isValid}
              >
                Завершить регистрацию
              </Button>
              <Button
                type="submit"
                size="lg"
                variant="ghost"
                className="flex w-full text-text-secondary"
                onClick={prevStep}
              >
                предыдущий шаг
              </Button>
            </div>
          </GroupFooter>
        </GroupRoot>
      </form>
    </Form>
  );
};

export { ProfilesFormCompletion };
