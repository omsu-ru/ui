"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ListItem,
  Icon,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Logo,
} from "@/components";
import {
  CheckIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  SunMoonIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { MenuTriggerProps } from "../types";
import { UserAvatar } from "./UserAvatar";

const DesktopMenuTrigger = ({
  children,
  items,
  logout,
  user,
  onOpenChange,
  open,
}: MenuTriggerProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu onOpenChange={onOpenChange} open={open}>
      <DropdownMenuTrigger className="group">{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="px-4">
        <header className="relative justify-center mt-6 mb-2">
          <a href="#" className="absolute left-0 top-0">
            <Logo text="ID" className="h-8 mr-auto max-w-fit" variant="muted" />
          </a>

          <div className="grid justify-items-center items-center">
            <UserAvatar user={user} className="w-14 h-14 text-lg" />
            <h3 className="text-lg font-medium">{user.username}</h3>
            <p></p>
          </div>
        </header>
        {items.map((item) => (
          <React.Fragment key={`menu-item-${item.title}`}>
            <a href={item.href}>
              <DropdownMenuItem>
                <ListItem
                  title={item.title}
                  className="flex-grow"
                  leftContent={<Icon icon={item.icon} />}
                  description={item.description}
                />
              </DropdownMenuItem>
            </a>
            <DropdownMenuSeparator />
          </React.Fragment>
        ))}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ListItem
              title="Внешний вид"
              className="flex-grow "
              leftContent={<Icon icon={SunMoonIcon} />}
            />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <ListItem
                title="Всегда светлый"
                className="flex-grow "
                onClick={() => setTheme("light")}
                rightContent={theme === "light" && <CheckIcon />}
                leftContent={
                  <Icon
                    icon={SunIcon}
                    variant="standalone"
                    className="w-6 h-6 stroke-1 text-muted-foreground"
                  />
                }
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ListItem
                title="Всегда темный"
                className="flex-grow "
                onClick={() => setTheme("dark")}
                leftContent={
                  <Icon
                    icon={MoonIcon}
                    variant="standalone"
                    className="w-6 h-6 stroke-1 text-muted-foreground"
                  />
                }
                rightContent={theme === "dark" && <CheckIcon />}
              />
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <ListItem
            title="Выйти из аккаунта"
            className="flex-grow text-destructive-foreground"
            leftContent={<Icon icon={LogOutIcon} variant="destructive" />}
            onClick={logout}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DesktopMenuTrigger };
