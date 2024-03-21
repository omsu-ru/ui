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

export type Interval = "preserveStartEnd" | "equidistantPreserveStart";

export type IntervalType = "preserveStartEnd" | Interval;

export type CustomTooltipProps = {
  payload:
    | Payload<string | number | (string | number)[], string | number>[]
    | undefined;
  active: boolean | undefined;
  label: NameType | undefined;
};
