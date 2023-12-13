import * as React from "react";
import type { SVGProps } from "react";
const SvgUserPlus2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 18"
    stroke={props.color}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.083 14.25c0-1.194-.5-2.338-1.39-3.182a4.887 4.887 0 0 0-3.36-1.318c-1.26 0-2.468.474-3.358 1.318a4.383 4.383 0 0 0-1.392 3.182"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.333 9.75c1.75 0 3.167-1.343 3.167-3s-1.418-3-3.167-3c-1.749 0-3.166 1.343-3.166 3s1.417 3 3.166 3M15.042 6v4.5M17.417 8.25h-4.75"
    />
  </svg>
);
export default SvgUserPlus2;
