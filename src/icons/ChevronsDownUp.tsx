import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsDownUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m7 20 5-5 5 5M7 4l5 5 5-5" />
  </svg>
);
export default SvgChevronsDownUp;
