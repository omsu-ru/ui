import * as React from "react";
import type { SVGProps } from "react";
const SvgZap = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.75 1.5-7.5 9H9l-.75 6 7.5-9H9z"
    />
  </svg>
);
export default SvgZap;
