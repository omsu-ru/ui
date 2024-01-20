import * as React from "react";

import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";

const GroupHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("grid gap-1 py-5 px-6", className)} {...props} />
));
GroupHeader.displayName = "GroupHeader";

const GroupTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
GroupTitle.displayName = "GroupTitle";

const GroupDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
GroupDescription.displayName = "GroupDescription";

const GroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2  overflow-y-auto scrollbar scrollbar-medium scrollbar-thumb-gray-300 scrollbar-track-gray-100",
      className
    )}
    {...props}
  />
));
GroupContent.displayName = "GroupContent";

const GroupFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-center p-6  border border-t-border",
      className
    )}
    {...props}
  />
));
GroupFooter.displayName = "GroupFooter";

const groupVariants = cva(
  "rounded-3xl w-full  text-card-foreground relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card shadow-50",
        outline: "border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface GroupRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupVariants> {}

const GroupRoot = React.forwardRef<HTMLDivElement, GroupRootProps>(
  ({ className, variant, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(groupVariants({ variant }), className)}
      {...props}
    />
  )
);
GroupRoot.displayName = "GroupRoot";

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  children: React.ReactNode;
}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, ...props }, ref) => (
    <GroupRoot ref={ref} className={cn(className)}>
      {(props.title || props.description) && (
        <GroupHeader>
          <GroupTitle>{props.title}</GroupTitle>
          <GroupDescription>{props.description}</GroupDescription>
        </GroupHeader>
      )}
      <GroupContent className="max-h-[400px] overflow-y-auto scrollbar scrollbar-medium scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
        {props.children}
      </GroupContent>
      {props.footer && <GroupFooter>{props.footer}</GroupFooter>}
    </GroupRoot>
  )
);
Group.displayName = "Group";

export {
  Group,
  GroupRoot,
  GroupHeader,
  GroupFooter,
  GroupTitle,
  GroupDescription,
  GroupContent,
};
