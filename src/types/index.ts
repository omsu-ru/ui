import { colorValues, sizeValues } from "@/shared/consts";

export type Option = {
  id: string;
  label: string;
};

export enum Profiles {
  employee = "employee",
  applicant = "applicant",
  professor = "professor",
  student = "student",
  pupil = "pupil",
  partner = "partner",
  event_participant = "event_participant",
  graduate = "graduate",
  supervisor = "supervisor",
}

export type Size = (typeof sizeValues)[number];

export const Sizes: { [key: string]: Size } = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
};

export type Color = (typeof colorValues)[number];
export type CustomColor = Color | string;
export interface ColorClassNames {
  bgColor: string;
  hoverBgColor: string;
  selectBgColor: string;
  textColor: string;
  selectTextColor: string;
  hoverTextColor: string;
  borderColor: string;
  selectBorderColor: string;
  hoverBorderColor: string;
  ringColor: string;
  strokeColor: string;
  fillColor: string;
}
