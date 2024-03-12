import { Avatar, AvatarImage, AvatarFallback } from "@/components";
import { getInitials } from "../utils";
import { User } from "../types";
import { cn } from "@/utils";

type UserAvatarProps = {
  user: User;
  alt?: string;
  className?: string;
};

const UserAvatar = ({
  user: { username, avatar },
  alt = "avatar",
  className,
}: UserAvatarProps) => {
  return (
    <Avatar className={cn("w-12 h-12 ", className)}>
      <AvatarImage src={avatar} alt={alt} />
      <AvatarFallback variant="profile">{getInitials(username)}</AvatarFallback>
    </Avatar>
  );
};

export { UserAvatar };
