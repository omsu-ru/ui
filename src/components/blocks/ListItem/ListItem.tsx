import { cn } from "@/utils";
import React, {
  ComponentPropsWithoutRef,
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
  leftContent?: ReactElement;
  rightContent?: ReactElement;
  title: string | ReactNode;
  description?: string | ReactNode;
  asChild?: boolean;
  info?: string | ReactNode;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      className,
      title,
      asChild,
      rightContent,
      leftContent,
      description,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "li";
    return (
      <Comp
        ref={ref}
        className={cn(
          "relative flex gap-4  select-none items-center cursor-pointer px-4 py-3  hover:bg-muted rounded-2xl text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-background-content data-[state=open]:bg-muted",
          "group text-text-display",
          className
        )}
        {...props}
      >
        {leftContent &&
          React.cloneElement(leftContent, {
            className: cn(leftContent.props.className),
          })}
        <div className="text-left ">
          {typeof title === "string" ? (
            <h3 className="text-base leading-4">{title}</h3>
          ) : (
            <div>{title}</div>
          )}
          <h4 className="text-xs text-text-secondary">{description}</h4>
        </div>
        <div className="ml-auto flex gap-2 mr-2 ">
          {props.info && (
            <Tooltip
              trigger={
                <div
                  className={cn(
                    "flex group-hover:bg-background-content group-hover:text-muted-foreground items-center justify-center font-light text-muted-foreground bg-muted rounded-full w-6 h-6 data-[state=open]:bg-background-content data-[state=open]:text-muted-foreground"
                  )}
                >
                  ?
                </div>
              }
              content={props.info}
            />
          )}
          {rightContent &&
            React.cloneElement(rightContent, {
              className: cn(
                rightContent.props.className,
                "group-hover:text-text-display text-text-secondary w-6 h-6"
              ),
            })}
        </div>
      </Comp>
    );
  }
);

ListItem.displayName = "ListItem";

export { ListItem };
