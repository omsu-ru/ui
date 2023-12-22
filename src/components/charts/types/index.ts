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
