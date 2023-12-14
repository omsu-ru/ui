import { cn } from "@/utils";
import React, {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import { ChevronRight } from "@/icons";
import { Slot } from "@radix-ui/react-slot";
import { Tooltip } from "@/components/Tooltip";

export interface ListItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, "title"> {
  leftIcon: ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
  asChild?: boolean;
  info?: string | ReactNode;
  righticon?: ReactElement;
  active?: boolean;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, title, asChild, leftIcon, description, ...props }, ref) => {
    const Comp = asChild ? Slot : "li";
    return (
      <Comp
        ref={ref}
        className={cn(
          "relative flex gap-4  select-none items-center cursor-pointer px-4 py-3  hover:bg-muted rounded-2xl text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-background-content",
          "group",
          props.active && "bg-muted",
          className
        )}
        {...props}
      >
        {leftIcon}
        <div className="text-left">
          <h3 className="text-base text-text-display ">{title}</h3>
          <h4 className="text-xs text-text-secondary">{description}</h4>
        </div>
        <div className="ml-auto flex gap-2 mr-2 ">
          {props.info && (
            <Tooltip
              trigger={
                <div
                  className={cn(
                    "flex group-hover:bg-background-content group-hover:text-muted-foreground items-center justify-center font-light text-muted-foreground bg-muted rounded-full w-6 h-6",
                    props.active &&
                      "bg-background-content text-muted-foreground"
                  )}
                >
                  ?
                </div>
              }
              content={props.info}
            />
          )}
          {props.righticon ? (
            React.cloneElement(props.righticon, {
              className:
                "group-hover:text-text-display text-text-secondary w-6 h-6",
            })
          ) : (
            <ChevronRight className="ml-auto w-6 h-6  text-text-secondary group-hover:text-text-display" />
          )}
        </div>
      </Comp>
    );
  }
);

ListItem.displayName = "ListItem";

export { ListItem };
