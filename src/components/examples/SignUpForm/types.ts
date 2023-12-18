import { Profiles } from "@/types";
import { ZodObject } from "zod";

export type ProfileSchemas = Partial<{
  [key in Profiles]: ZodObject<any, any, any, any, any>;
}>;

export type ProfileFieldsType = Partial<{
  [key in Profiles]: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    fields: Array<{
      placeholder: string;
      label: string;
      type: string;
      name: string;
    }>;
  };
}>;
