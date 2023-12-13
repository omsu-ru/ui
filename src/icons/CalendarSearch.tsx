import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.75 9V4.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5V15c0 .825.675 1.5 1.5 1.5h5.625M12 1.5v3M6 1.5v3M2.25 7.5h13.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 15.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M16.5 16.5l-1.125-1.125"
    />
  </svg>
);
export default SvgCalendarSearch;
