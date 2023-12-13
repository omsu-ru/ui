import * as React from "react";
import type { SVGProps } from "react";
const SvgProfessors = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.5 7.5 6-3 6 3-6 3z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9v3.103c1.875 1.863 5.625 1.863 7.5 0V9M10 4l6.75 3.375L13 9.25M14.625 8.5v3.229c-.6.595-1.015.806-1.875 1.021"
    />
  </svg>
);
export default SvgProfessors;
