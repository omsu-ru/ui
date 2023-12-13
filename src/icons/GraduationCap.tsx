import * as React from "react";
import type { SVGProps } from "react";
const SvgGraduationCap = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.553 7.5 7.5-3.75 7.5 3.75-7.5 3.75z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.553 9v3.75c2.25 2.25 6.75 2.25 9 0V9"
    />
  </svg>
);
export default SvgGraduationCap;
