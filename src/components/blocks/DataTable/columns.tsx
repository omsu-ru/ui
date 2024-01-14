import { ColumnDef } from "@tanstack/react-table";
import { Professor } from "./types";
import {
  Button,
  Checkbox,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  DataTableColumnHeader,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ListItem,
  Icon,
  Avatar,
  AvatarFallback,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components";
import {
  ArrowUpDown,
  HourglassIcon,
  InboxIcon,
  MoreHorizontal,
  School2Icon,
  WeightIcon,
} from "lucide-react";
import { Briefcase, ChevronsDownUp, ChevronsUpDown } from "@/icons";

export const columns: ColumnDef<Professor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && false)
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "ФИО",
    filterFn: "fuzzy",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),

    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "faculty",
    header: () => <div>Факультет</div>,
    cell: ({ row }) => {
      return <div className=" font-medium">{row.getValue("faculty")}</div>;
    },
  },
  {
    accessorKey: "department",
    header: () => <div>Кафедра</div>,
    cell: ({ row }) => {
      return <div className=" font-medium">{row.getValue("department")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const professor = row.original;
      const professor_info = [
        { icon: Briefcase, title: "Должность", text: "доцент" },
        { icon: InboxIcon, title: "Почта", text: professor.email },
        { icon: School2Icon, title: "Факультет", text: professor.faculty },
        { icon: School2Icon, title: "Кафедра", text: professor.department },
        { icon: WeightIcon, title: "Объем ставки", text: "0.6" },
        { icon: HourglassIcon, title: "Часы нагрузки", text: "900 часов" },
      ];

      const popoverRightContent = (
        <>
          <ChevronsDownUp className="w-6 h-6 stroke-1 text-muted-foreground stroke-muted-foreground hidden group-data-[state=open]:block " />
          <ChevronsUpDown className="w-6 h-6 stroke-1  stroke-muted-foreground text-text-secondary hidden group-data-[state=closed]:block" />
        </>
      );

      return (
        <Dialog>
          <DialogTrigger>Управление</DialogTrigger>

          <DialogContent className="max-w-fit">
            <DialogHeader>
              <DialogTitle>Управление</DialogTitle>
            </DialogHeader>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <ListItem
                  className="w-full h-20 border border-border"
                  title={professor.name}
                  leftContent={
                    <Avatar>
                      <AvatarFallback variant="profile">
                        {professor.name
                          .split(" ")
                          .map((word) => word.slice(0, 1))
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  }
                  rightContent={popoverRightContent}
                />
              </PopoverTrigger>
              <PopoverContent className="w-full" sideOffset={5}>
                {professor_info.map((professor) => (
                  <div className="flex items-center gap-4 py-2">
                    <Icon icon={professor.icon} />
                    <div className="grid">
                      <h3 className="text-sm text-muted-foreground">
                        {professor.title}
                      </h3>
                      <p>{professor.text}</p>
                    </div>
                  </div>
                ))}
              </PopoverContent>
            </PopoverRoot>
            <Tabs className="w-[400px]" defaultValue="1">
              <TabsList className="w-full">
                <TabsTrigger value="1">Основное</TabsTrigger>
                <TabsTrigger value="2">Совместительство</TabsTrigger>
              </TabsList>
              <TabsContent value="1">
                <p>Основное</p>
              </TabsContent>
              <TabsContent value="2">
                <p>Совместительство</p>
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button>Сохранить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
