import { ColumnDef } from "@tanstack/react-table";
import { Professor } from "./types";
import {
  Button,
  Checkbox,
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  Textarea,
} from "@/components";
import {
  ArrowUpDown,
  EyeIcon,
  HourglassIcon,
  InboxIcon,
  MoreHorizontal,
  RedoIcon,
  School2Icon,
  Trash2Icon,
  WeightIcon,
} from "lucide-react";
import { Briefcase, ChevronsDownUp, ChevronsUpDown } from "@/icons";
import { useState } from "react";

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

      const collapsibleRightContent = (
        <>
          <ChevronsDownUp className="w-6 h-6 stroke-1 text-muted-foreground stroke-muted-foreground hidden group-data-[state=open]:block " />
          <ChevronsUpDown className="w-6 h-6 stroke-1  stroke-muted-foreground text-text-secondary hidden group-data-[state=closed]:block" />
        </>
      );

      const steps = [
        {
          title: "1-ый этап",
          text: "Пустая форма",
          value: "1",
        },
        {
          title: "2-ой этап",
          text: "Заполнение плана преподавателем",
          value: "2",
        },
        {
          title: "3-ий этап",
          text: "Рассмотрение заведующим кафедрой",
          value: "3",
        },
        {
          title: "4-ый этап",
          text: "Рассмотрение деканом",
          value: "4",
        },
        {
          title: "Последний этап",
          text: "Проставление фактических значений",
          value: "5",
        },
      ];

      const [contract, setContract] = useState("1");

      return (
        <Dialog>
          <DialogTrigger>
            <Button
              variant="muted"
              className="group-hover:bg-white border border-border cursor-pointer"
            >
              Управление
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-fit lg:min-w-[600px] max-h-[80vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>Управление</DialogTitle>
            </DialogHeader>

            <Tabs
              className="w-full"
              defaultValue="1"
              value={contract}
              onValueChange={(value) => setContract(value)}
            >
              <TabsList className="w-full">
                <TabsTrigger value="1">Основное</TabsTrigger>
                <TabsTrigger value="2">Совместительство</TabsTrigger>
              </TabsList>
            </Tabs>

            <CollapsibleRoot>
              <CollapsibleTrigger asChild>
                <ListItem
                  className="w-full h-20 border border-border"
                  title={
                    <div className="grid">
                      {professor.name}{" "}
                      <p className="text-text-secondary">
                        {contract === "1" ? "Основное" : "Совместительство"}
                      </p>
                    </div>
                  }
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
                  rightContent={collapsibleRightContent}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="w-full border border-border rounded-lg p-4 mt-2">
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
              </CollapsibleContent>
            </CollapsibleRoot>

            <section className="flex gap-2">
              <Button
                variant="muted"
                className="flex items-center gap-2 flex-grow group-hover:bg-red-400 group-hover:text-red-400"
              >
                <EyeIcon /> Просмотр формы
              </Button>
              <Button variant="muted" className="flex items-center gap-2">
                <RedoIcon /> Обнуление значений
              </Button>
              <Button variant="muted">
                <Trash2Icon />
              </Button>
            </section>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Выберите этап" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {steps.map((step) => (
                    <SelectItem value={step.value}>
                      <div className="grid  justify-items-start">
                        <h3 className="text-sm font-semibold text-muted-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea placeholder="Комментарий..." />

            <DialogFooter>
              <Button className="flex-1">Сохранить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];