import * as React from "react";
import type { SVGProps } from "react";
const SvgLogIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 2.25h3a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5h-3M7.5 12.75 11.25 9 7.5 5.25M11.25 9h-9"
    />
  </svg>
);
export default SvgLogIn;
