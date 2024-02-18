import {
  NameType,
  Payload,
} from "recharts/types/component/DefaultTooltipContent";

export type BarDataResponse = {
  xValue: string;
  yValue: number;
};

export type BarProps = {
  className?: string;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
  barWidth: number;
  chartHeight: number;
  data: BarDataResponse[];
  xAccessor: (d: BarDataResponse) => string;
  yAccessor: (d: BarDataResponse) => number;
};

export type ValueFormatter = {
  (value: number): string;
};

export type CurveType = "linear" | "natural" | "monotone" | "step";

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

export const colorValues = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export type Interval = "preserveStartEnd" | "equidistantPreserveStart";

export type IntervalType = "preserveStartEnd" | Interval;

export type Color = (typeof colorValues)[number];
export type CustomColor = Color | string;

export type CustomTooltipProps = {
  payload:
    | Payload<string | number | (string | number)[], string | number>[]
    | undefined;
  active: boolean | undefined;
  label: NameType | undefined;
};
