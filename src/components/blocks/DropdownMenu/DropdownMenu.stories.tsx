import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../buttons";
import {
  LayoutDashboardIcon,
  LogOutIcon,
  MenuIcon,
  PencilIcon,
  UserPlus2,
} from "lucide-react";
import { Icon } from "../Icon";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {},
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button>
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-4 group">
            <Icon
              icon={LayoutDashboardIcon}
              className="w-11 h-11 group-hover:bg-background-content"
            />
            <span>Панель управления</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-4 group">
            <Icon
              icon={PencilIcon}
              className="w-11 h-11 group-hover:bg-background-content"
            />
            <span>Редактирование формы</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-4 group">
            <Icon
              icon={UserPlus2}
              className="w-11 h-11 group-hover:bg-background-content"
            />
            <span>Создание пользователя</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-4 group">
            <Icon
              icon={LogOutIcon}
              className="w-11 h-11 group-hover:bg-background-content"
            />
            Выйти из аккаунта
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
