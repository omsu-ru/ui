import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke={props.color}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 15 5 5 5-5M7 9l5-5 5 5"
    />
  </svg>
);
export default SvgChevronsUpDown;
