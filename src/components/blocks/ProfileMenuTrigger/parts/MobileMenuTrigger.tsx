"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  ListItem,
  Icon,
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
import { IdLogo } from "@/icons";

const MobileMenuTrigger = ({
  children,
  items,
  logout,
  user,
  onOpenChange,
  open,
}: MenuTriggerProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger className="group">{children}</DrawerTrigger>
      <DrawerContent className="px-2">
        <DrawerHeader className="relative justify-center">
          <a href="#" className="absolute left-0 top-4">
            <Logo text="ID" className="h-8 mr-auto max-w-fit" variant="muted" />
          </a>

          <div className="grid justify-items-center items-center">
            <UserAvatar user={user} className="w-16 h-16 text-lg" />
            <DrawerTitle className="text-lg font-medium">
              {user.username}
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </div>
        </DrawerHeader>

        {items.map((item) => (
          <a href={item.href} key={`menu-item-${item.title}`}>
            <ListItem
              title={item.title}
              leftContent={<Icon icon={item.icon} />}
              description={item.description}
            />
          </a>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ListItem
              title="Внешний вид"
              className="flex-grow "
              leftContent={<Icon icon={SunMoonIcon} />}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
          </DropdownMenuContent>
        </DropdownMenu>
        <ListItem
          title="Выйти из аккаунта"
          onClick={logout}
          className="flex-grow text-destructive-foreground"
          leftContent={<Icon icon={LogOutIcon} variant="destructive" />}
        />
      </DrawerContent>
    </Drawer>
  );
};

export { MobileMenuTrigger };
