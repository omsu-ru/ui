import React from "react";
import { User } from "../types";
import { UserAvatar } from "./UserAvatar";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

type UserCardProps = {
  user: User;
  alt?: string;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <section className="flex items-center justify-between py-4">
      <div className="flex gap-4 items-center">
        <UserAvatar user={user} />
        <p>{user.username}</p>
      </div>
      <ChevronsDownUp className="text-muted-foreground stroke-1 group-data-[state=open]:block hidden" />
      <ChevronsUpDown className="text-muted-foreground stroke-1 group-data-[state=open]:hidden block" />
    </section>
  );
};

export { UserCard };
