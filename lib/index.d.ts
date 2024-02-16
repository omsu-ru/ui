import * as React$1 from 'react';
import React__default, { InputHTMLAttributes, ReactNode, HTMLAttributes, ReactElement, SVGProps } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps as ControllerProps$1 } from 'react-hook-form';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { FilterFn, ColumnDef, ColumnFilter, SortingState, Column, Table as Table$1 } from '@tanstack/react-table';
import { RankingInfo } from '@tanstack/match-sorter-utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Command as Command$1 } from 'cmdk';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Payload, NameType } from 'recharts/types/component/DefaultTooltipContent';
import * as tailwindcss_types_config from 'tailwindcss/types/config';
import { ClassValue } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    staticText?: string;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

type Story$8 = StoryObj<typeof Input>;
declare const Primary: Story$8;
declare const WithLabel: Story$8;
declare const WithRightContent: Story$8;

interface StepperProps extends InputHTMLAttributes<HTMLInputElement> {
    increase: (name: string) => void;
    decrease: (name: string) => void;
    name: string;
    value: number;
    unit?: string[] | string;
}
declare const Stepper: React__default.ForwardRefExoticComponent<StepperProps & React__default.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ControlledCheckbox: () => react_jsx_runtime.JSX.Element;

type Story$7 = StoryObj<typeof ControlledCheckbox>;
declare const Single$1: Story$7;

interface ControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends Omit<ControllerProps$1<TFieldValues, TName>, "render">, Pick<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> {
    component: React$1.ReactElement;
    label?: string;
    description?: string;
}
declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues = undefined>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps$1<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

interface InputControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends ControllerProps<TFieldValues, TName> {
}
declare const InputController: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: InputControllerProps<TFieldValues, TName>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type Option$1 = {
    id: string;
    label?: string;
};

interface RadioGroupControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends Omit<ControllerProps<TFieldValues, TName>, "component"> {
    options: Option$1[];
    component: React$1.ReactElement | ((option: {
        option: Option$1;
    }) => React$1.ReactElement);
}
declare const RadioGroupController: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: RadioGroupControllerProps<TFieldValues, TName>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface SelectControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends Omit<ControllerProps$1<TFieldValues, TName>, "render"> {
    placeholder?: string;
    label: string;
    description?: string;
    items: {
        value: string;
        content: any;
    }[];
}
declare const SelectController: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: SelectControllerProps<TFieldValues, TName>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CheckboxControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends ControllerProps<TFieldValues, TName> {
    option: Option$1;
}
declare const CheckboxController: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: CheckboxControllerProps<TFieldValues, TName>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface RadioGroupProps extends React$1.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
    defaultValue?: string;
    options: {
        label: string;
        id: string;
    }[];
}
declare const RadioRoot: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const RadioGroup: React$1.ForwardRefExoticComponent<RadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;

declare const buttonVariants: (props?: {
    variant?: "default" | "link" | "muted" | "destructive" | "outline" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
} & class_variance_authority_dist_types.ClassProp) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const ToggleGroup: React$1.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React$1.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string>) & React$1.RefAttributes<HTMLDivElement>>;
declare const ToggleGroupItem: React$1.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string;
declare const Toggle: React$1.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const GroupHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const GroupTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const GroupDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const GroupContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const GroupFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const groupVariants: (props?: {
    variant?: "default" | "outline";
} & class_variance_authority_dist_types.ClassProp) => string;
interface GroupRootProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof groupVariants> {
}
declare const GroupRoot: React$1.ForwardRefExoticComponent<GroupRootProps & React$1.RefAttributes<HTMLDivElement>>;
interface GroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    description?: string | React$1.ReactNode;
    footer?: string | React$1.ReactNode;
    children: React$1.ReactNode;
}
declare const Group: React$1.ForwardRefExoticComponent<GroupProps & React$1.RefAttributes<HTMLDivElement>>;

declare const iconVariant: (props?: {
    variant?: "default";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string;
interface IconProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconVariant> {
    icon?: React__default.ComponentType<{
        className?: string;
    }>;
    text?: string;
    status?: "success" | "error";
}
declare const Icon: React__default.ForwardRefExoticComponent<IconProps & React__default.RefAttributes<HTMLDivElement>>;

type Story$6 = StoryObj<typeof Icon>;
declare const Default$5: Story$6;

interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "title"> {
    leftContent?: ReactElement;
    rightContent?: ReactElement;
    title: string | ReactNode;
    description?: string | ReactNode;
    asChild?: boolean;
    info?: string | ReactNode;
}
declare const ListItem: React__default.ForwardRefExoticComponent<ListItemProps & React__default.RefAttributes<HTMLLIElement>>;

interface ListProps extends HTMLAttributes<HTMLUListElement> {
    items: ListItemProps[];
}
declare const List: React$1.ForwardRefExoticComponent<ListProps & React$1.RefAttributes<HTMLUListElement>>;

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref">, "content"> & Omit<Omit<ListItemProps & React$1.RefAttributes<HTMLLIElement>, "ref">, "content"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type Story$5 = StoryObj<typeof Accordion>;
declare const Multiple: Story$5;
declare const Single: Story$5;

declare const PopoverRoot: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
interface PopoverProps extends React$1.ComponentProps<typeof PopoverPrimitive.Content> {
    trigger: React$1.ReactNode;
    children: React$1.ReactNode;
}
declare const Popover: React$1.ForwardRefExoticComponent<Omit<PopoverProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type Story$4 = StoryObj<typeof Popover>;
declare const Default$4: Story$4;

declare const CollapsibleRoot: React__default.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React__default.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React__default.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React__default.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React__default.RefAttributes<HTMLDivElement>>;
type ContentType = string | React__default.ReactNode | ((state: {
    open: boolean;
}) => ReactNode);
declare const Collapsible: React__default.ForwardRefExoticComponent<Omit<Omit<CollapsiblePrimitive.CollapsibleContentProps & React__default.RefAttributes<HTMLDivElement>, "ref">, "content"> & Omit<Omit<ListItemProps & React__default.RefAttributes<HTMLLIElement>, "ref">, "content"> & {
    children: ContentType;
} & React__default.RefAttributes<HTMLDivElement>>;

type Story$3 = StoryObj<typeof Collapsible>;
declare const Default$3: Story$3;

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

type Professor = {
    name: string;
    department: string;
    faculty: string;
    email: string;
};
interface TableFilters<TData> {
    show_attributes?: boolean;
    search?: {
        columnID: keyof TData;
        placeholder: string;
    };
    select?: Array<{
        columnID: keyof TData;
        title: string;
        options: {
            label: string;
            value: string;
            icon?: React.ComponentType<{
                className?: string;
            }>;
        }[];
    }>;
}

declare module "@tanstack/table-core" {
    interface FilterFns {
        fuzzy: FilterFn<unknown>;
    }
    interface FilterMeta {
        itemRank: RankingInfo;
    }
}
type CustomColumnFilter<TData> = {
    id: keyof TData;
    value: unknown;
};
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    isLoading?: boolean;
    initialFilters?: CustomColumnFilter<TData>[];
    onColumnFiltersChange?: (columnFilters: CustomColumnFilter<TData>[]) => void;
    fetchFn: (pageIndex: number, pageSize: number, filters: ColumnFilter[], sorting: SortingState) => void;
    filters: TableFilters<TData>;
    noResults?: string;
}
declare function DataTable<TData, TValue>({ columns, filters, initialFilters, noResults, isLoading, fetchFn, ...props }: DataTableProps<TData, TValue>): react_jsx_runtime.JSX.Element;

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
}
declare function DataTableColumnHeader<TData, TValue>({ column, title, className, }: DataTableColumnHeaderProps<TData, TValue>): react_jsx_runtime.JSX.Element;

interface DataTablePaginationProps<TData> {
    table: Table$1<TData>;
}
declare function DataTablePagination<TData>({ table, }: DataTablePaginationProps<TData>): react_jsx_runtime.JSX.Element;

interface DataTableToolbarProps<TData> {
    table: Table$1<TData>;
    filters: TableFilters<TData>;
}
declare function DataTableToolbar<TData>({ table, filters, }: DataTableToolbarProps<TData>): react_jsx_runtime.JSX.Element;

interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>;
    title?: string;
    noResultsMessage?: string;
    options: {
        label: string;
        value: string;
        abbr?: string;
        icon?: React$1.ComponentType<{
            className?: string;
        }>;
    }[];
}
declare function DataTableFacetedFilter<TData, TValue>({ column, title, options, noResultsMessage, }: DataTableFacetedFilterProps<TData, TValue>): react_jsx_runtime.JSX.Element;

declare const columns: ColumnDef<Professor>[];

declare const meta$1: Meta<typeof DataTable>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type Story$2 = StoryObj<typeof DropdownMenu>;
declare const Default$2: Story$2;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string) => number;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => react_jsx_runtime.JSX.Element;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<React$1.HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<HTMLDivElement> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<React$1.HTMLAttributes<HTMLDivElement>, "value" | "disabled" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const badgeVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary";
} & class_variance_authority_dist_types.ClassProp) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const avatarFallbackVariants: (props?: {
    variant?: "default" | "profile";
} & class_variance_authority_dist_types.ClassProp) => string;
interface AvatarFallbackProps extends React$1.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>, VariantProps<typeof avatarFallbackVariants> {
}
declare const AvatarFallback: React$1.ForwardRefExoticComponent<AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

interface MultiSelectOption {
    value: string;
    label: string;
    disable?: boolean;
    /** fixed option that can't be removed. */
    fixed?: boolean;
    /** Group the options by providing key. */
    [key: string]: string | boolean | undefined;
}
interface MultiSelectProps {
    value?: MultiSelectOption[];
    defaultOptions?: MultiSelectOption[];
    /** manually controlled options */
    options?: MultiSelectOption[];
    placeholder?: string;
    /** Loading component. */
    loadingIndicator?: React$1.ReactNode;
    /** Empty component. */
    emptyIndicator?: React$1.ReactNode;
    /** Debounce time for async search. Only work with `onSearch`. */
    delay?: number;
    /**
     * Only work with `onSearch` prop. Trigger search when `onFocus`.
     * For example, when user click on the input, it will trigger the search to get initial options.
     **/
    triggerSearchOnFocus?: boolean;
    /** async search */
    onSearch?: (value: string) => Promise<MultiSelectOption[]>;
    onChange?: (options: MultiSelectOption[]) => void;
    /** Limit the maximum number of selected options. */
    maxSelected?: number;
    /** When the number of selected options exceeds the limit, the onMaxSelected will be called. */
    onMaxSelected?: (maxLimit: number) => void;
    /** Hide the placeholder when there are options selected. */
    hidePlaceholderWhenSelected?: boolean;
    disabled?: boolean;
    /** Group the options base on provided key. */
    groupBy?: string;
    className?: string;
    badgeClassName?: string;
    /**
     * First item selected is a default behavior by cmdk. That is why the default is true.
     * This is a workaround solution by add a dummy item.
     *
     * @reference: https://github.com/pacocoursey/cmdk/issues/171
     */
    selectFirstItem?: boolean;
    /** Allow user to create option when there is no option matched. */
    creatable?: boolean;
    /** Props of `Command` */
    commandProps?: React$1.ComponentPropsWithoutRef<typeof Command>;
    /** Props of `CommandInput` */
    inputProps?: Omit<React$1.ComponentPropsWithoutRef<typeof Command$1.Input>, "value" | "placeholder" | "disabled">;
}
interface MultiSelectRef {
    selectedValue: MultiSelectOption[];
    input: HTMLInputElement;
}
declare const MultiSelect: React$1.ForwardRefExoticComponent<MultiSelectProps & React$1.RefAttributes<MultiSelectRef>>;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive";
} & class_variance_authority_dist_types.ClassProp) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

declare function Toaster(): react_jsx_runtime.JSX.Element;

interface TooltipProps extends Omit<React$1.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, "content"> {
    trigger: string | React$1.ReactNode;
    content: string | React$1.ReactNode;
}
declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const TooltipRoot: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const Tooltip: React$1.ForwardRefExoticComponent<TooltipProps & React$1.RefAttributes<HTMLDivElement>>;

type Story$1 = StoryObj<typeof Tooltip>;
declare const Default$1: Story$1;

declare const logoVariants: (props?: {
    variant?: "default" | "muted";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string;
interface LogoProps extends React__default.SVGAttributes<SVGElement>, VariantProps<typeof logoVariants> {
    icon: React__default.ComponentType<{
        className?: string;
    }>;
}
declare const Logo: ({ variant, size, className, ...props }: LogoProps) => react_jsx_runtime.JSX.Element;

type Story = StoryObj<typeof Logo>;
declare const Default: Story;

type BarDataResponse = {
    xValue: string;
    yValue: number;
};
type BarProps = {
    className?: string;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    events?: boolean;
    barWidth: number;
    chartHeight: number;
    data: BarDataResponse[];
    xAccessor: (d: BarDataResponse) => string;
    yAccessor: (d: BarDataResponse) => number;
};
type ValueFormatter = {
    (value: number): string;
};
type CurveType = "linear" | "natural" | "monotone" | "step";
declare const colorValues: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
type Interval = "preserveStartEnd" | "equidistantPreserveStart";
type IntervalType = "preserveStartEnd" | Interval;
type Color = (typeof colorValues)[number];

type Bar = {
    key?: string;
    value: number;
    name: string;
    icon?: React__default.JSXElementConstructor<any>;
    href?: string;
    target?: string;
};
interface BarListProps extends React__default.HTMLAttributes<HTMLDivElement> {
    data: Bar[];
    valueFormatter?: ValueFormatter;
    showAnimation?: boolean;
}
declare const BarList: React__default.ForwardRefExoticComponent<BarListProps & React__default.RefAttributes<HTMLDivElement>>;

declare const meta: Meta<typeof BarList>;

interface BaseAnimationTimingProps {
    animationDuration?: number;
    showAnimation?: boolean;
}

type CustomTooltipType = {
    payload: Payload<string | number | (string | number)[], string | number>[] | undefined;
    active: boolean | undefined;
    label: NameType | undefined;
};

type FixedProps = {
    eventType: "dot" | "category" | "bar" | "slice" | "bubble";
    categoryClicked: string;
};
type BaseEventProps = FixedProps & {
    [key: string]: number | string;
};
type EventProps = BaseEventProps | null | undefined;
interface BaseChartProps extends BaseAnimationTimingProps, React.HTMLAttributes<HTMLDivElement> {
    data: any[];
    categories: string[];
    index: string;
    colors?: (Color | string)[];
    valueFormatter?: ValueFormatter;
    startEndOnly?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    yAxisWidth?: number;
    intervalType?: IntervalType;
    showTooltip?: boolean;
    showLegend?: boolean;
    showGridLines?: boolean;
    autoMinValue?: boolean;
    minValue?: number;
    maxValue?: number;
    allowDecimals?: boolean;
    noDataText?: string;
    onValueChange?: (value: EventProps) => void;
    enableLegendSlider?: boolean;
    customTooltip?: React.ComponentType<CustomTooltipType>;
    rotateLabelX?: {
        angle: number;
        verticalShift?: number;
        xAxisHeight?: number;
    };
    tickGap?: number;
}

interface AreaChartProps extends BaseChartProps {
    stack?: boolean;
    curveType?: CurveType;
    connectNulls?: boolean;
    showGradient?: boolean;
}
declare const AreaChart: React__default.ForwardRefExoticComponent<AreaChartProps & React__default.RefAttributes<HTMLDivElement>>;

declare const HorizontalBar: ({ className, barWidth, chartHeight, data, xAccessor, yAccessor, }: BarProps) => react_jsx_runtime.JSX.Element;

declare const VerticalBar: <T>({ className, barWidth, chartHeight, data, xAccessor, yAccessor, }: BarProps) => react_jsx_runtime.JSX.Element;

declare const SvgArrowLeft: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgArrowRight: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBanknote: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBatteryMedium: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBell: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBookOpen: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBriefcase: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgCalendarHeart: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgCalendarSearch: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgCamera: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgChevronDown: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgChevronLeft: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgChevronRight: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgChevronUp: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgChevronsDownUp: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgChevronsUpDown: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgClipboardList: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgCornerRightDown: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgExternalLink: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgFlame: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgGosuslugi: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgGraduationCap: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgGraduation: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgHeartHandshake: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgInbox: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgLibrarySquare: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgList: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgLogIn: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgLogOut: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgLogo: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgMicroscope: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgOmsuOutlined: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgOmsuThick: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgPaperclip: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgPencilLine: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgProfessors: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgProfilesSettings: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgRocket: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgSparkles: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgTrash2: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgUserCog2: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgUserPlus2: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgUsers2: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgZap: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

type QuantityDeclensionHook = (quantity: number, words: string[] | string) => string;
declare const useQuantityDeclension: QuantityDeclensionHook;

type ToasterToast = ToastProps & {
    id: string;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: ToasterToast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: ToasterToast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
declare const reducer: (state: State, action: Action) => State;
type Toast = Omit<ToasterToast, "id">;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

declare function useDebounce<T>(value: T, delay?: number): T;

type Option = {
    id: string;
    label: string;
};
declare enum Profiles {
    employee = "employee",
    applicant = "applicant",
    professor = "professor",
    student = "student",
    pupil = "pupil",
    partner = "partner",
    event_participant = "event_participant",
    graduate = "graduate",
    supervisor = "supervisor"
}

declare const omsuPlugin: {
    (options: any): {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss_types_config.Config>;
    };
    __isOptionsFunction: true;
};

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AreaChart, type AreaChartProps, SvgArrowLeft as ArrowLeft, SvgArrowRight as ArrowRight, Avatar, AvatarFallback, type AvatarFallbackProps, AvatarImage, Badge, type BadgeProps, SvgBanknote as Banknote, BarList, type BarListProps, SvgBatteryMedium as BatteryMedium, SvgBell as Bell, SvgBookOpen as BookOpen, SvgBriefcase as Briefcase, Button, type ButtonProps, SvgCalendarHeart as CalendarHeart, SvgCalendarSearch as CalendarSearch, SvgCamera as Camera, Checkbox, CheckboxController, SvgChevronDown as ChevronDown, SvgChevronLeft as ChevronLeft, SvgChevronRight as ChevronRight, SvgChevronUp as ChevronUp, SvgChevronsDownUp as ChevronsDownUp, SvgChevronsUpDown as ChevronsUpDown, SvgClipboardList as ClipboardList, Collapsible, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, type ControllerProps, SvgCornerRightDown as CornerRightDown, DataTable, DataTableColumnHeader, DataTableFacetedFilter, DataTablePagination, DataTableToolbar, meta as DefaultBarListStory, Single$1 as DefaultCheckboxStory, Default$3 as DefaultCollapsibleStory, meta$1 as DefaultDataTableStory, Default$2 as DefaultDropdownMenuStory, Default$1 as DefaultTooltip, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, SvgExternalLink as ExternalLink, SvgFlame as Flame, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, SvgGosuslugi as Gosuslugi, SvgGraduation as Graduation, SvgGraduationCap as GraduationCap, Group, GroupContent, GroupDescription, GroupFooter, GroupHeader, GroupRoot, type GroupRootProps, GroupTitle, SvgHeartHandshake as HeartHandshake, HorizontalBar, Icon, Default$5 as IconDefaultStory, type IconProps, SvgLogo as IdLogo, SvgInbox as Inbox, Input, InputController, type InputProps, Label, SvgLibrarySquare as LibrarySquare, List, SvgList as ListIcon, ListItem, type ListItemProps, SvgLogIn as LogIn, SvgLogOut as LogOut, Logo, Default as LogoDefaultStory, type LogoProps, SvgMicroscope as Microscope, MultiSelect, type MultiSelectOption, type MultiSelectRef, Multiple as MultipleAccordionStory, SvgOmsuOutlined as OmsuOutlined, SvgOmsuThick as OmsuThick, type Option, SvgPaperclip as Paperclip, SvgPencilLine as PencilLine, Popover, PopoverContent, Default$4 as PopoverDefaultStory, PopoverRoot, PopoverTrigger, Primary, SvgProfessors as Professors, Profiles, SvgProfilesSettings as ProfilesSettings, RadioGroup, RadioGroupController, RadioGroupItem, RadioRoot, SvgRocket as Rocket, Select, SelectContent, SelectController, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Single as SingleAccordionStory, SvgSparkles as Sparkles, Stepper, type StepperProps, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger, SvgTrash2 as Trash2, SvgUserCog2 as UserCog2, SvgUserPlus2 as UserPlus2, SvgUsers2 as Users2, VerticalBar, WithLabel, WithRightContent, SvgZap as Zap, badgeVariants, buttonVariants, cn, columns, omsuPlugin, reducer, toast, toggleVariants, useDebounce, useFormField, useQuantityDeclension, useToast };
