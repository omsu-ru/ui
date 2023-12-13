import * as React from "react";
import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    stroke={props.color}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 6a4.5 4.5 0 0 1 9 0c0 5.25 2.25 6.75 2.25 6.75H2.25S4.5 11.25 4.5 6M7.725 15.75a1.455 1.455 0 0 0 2.55 0"
    />
  </svg>
);
export default SvgBell;
