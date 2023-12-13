import { cn } from "@/utils";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { ListItem, ListItemProps } from "../ListItem";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: ListItemProps[];
}

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, items, ...props }, ref) => (
    <ul ref={ref} className={cn("relative grid gap-2", className)} {...props}>
      {items.map((item) => (
        <ListItem {...item} />
      ))}
    </ul>
  )
);

List.displayName = "List";

export { List };
