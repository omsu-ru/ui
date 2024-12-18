import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsUpDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
);
export default SvgChevronsUpDown;
