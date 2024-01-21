import {
  Button,
  Form,
  GroupContent,
  GroupDescription,
  GroupFooter,
  GroupHeader,
  GroupRoot,
  GroupTitle,
  Input,
  InputController,
  Logo,
} from "@/components";
import { toast } from "@/hooks";
import { Gosuslugi, IdLogo } from "@/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Divider = ({ text }: { text: string }) => {
  return (
    <div className="relative flex  items-center w-full">
      <div className="flex-grow border-t  border-gray-200"></div>
      {text && <span className="flex-shrink mx-4 text-gray-300">{text}</span>}
      <div className="flex-grow border-t  border-gray-200"></div>
    </div>
  );
};

const SignInForm = () => {
  const FormSchema = z.object({
    login: z.string().email(),
    password: z.string().min(8),
  });

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
        className="space-y-8 relative grid md:justify-center "
      >
        <GroupRoot className="md:min-w-[440px] md:max-w-md max-sm:h-screen max-sm:rounded-none max-sm:shadow-none overflow-hidden">
          <GroupHeader className="sm:px-4 md:px-6">
            <Logo icon={IdLogo} />
            <GroupTitle>Добро пожаловать!</GroupTitle>
            <GroupDescription>
              ОмГУ ID - один ключ для многих сервисов
            </GroupDescription>
          </GroupHeader>
          <GroupContent className=" max-sm:max-h-none sm:px-4 md:px-6">
            <InputController
              component={<Input />}
              name="login"
              control={formInstance.control}
              label="Логин"
            />
            <InputController
              component={
                <Input placeholder="••••••••••••••••" type="password" />
              }
              name="password"
              control={formInstance.control}
              label="Пароль"
              type="password"
              // description="Не помню пароль"
            />
          </GroupContent>
          <GroupFooter className="flex flex-col w-full gap-3 mt-4 sm:px-4 md:px-6 border-b-0 border-none">
            <Button
              type="submit"
              size="lg"
              className="flex w-full "
              disabled={!formInstance.formState.isValid}
            >
              Войти
            </Button>
            <Divider text="или" />
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="flex w-full gap-2"
            >
              <Gosuslugi className="w-7 h-7" />
              Войти через Госуслуги
            </Button>
            <Button
              type="button"
              size="lg"
              variant="muted"
              className="flex w-full "
            >
              Зарегистрироваться
            </Button>
          </GroupFooter>
        </GroupRoot>
      </form>
    </Form>
  );
};

export { SignInForm };
