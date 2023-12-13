import * as React from "react";
import type { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.375 12.375c-1.125.945-1.5 3.75-1.5 3.75s2.805-.375 3.75-1.5c.532-.63.525-1.598-.067-2.182a1.635 1.635 0 0 0-2.183-.068M9 11.25 6.75 9a16.5 16.5 0 0 1 1.5-2.963A9.66 9.66 0 0 1 16.5 1.5c0 2.04-.585 5.625-4.5 8.25a16.762 16.762 0 0 1-3 1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 9H3s.413-2.272 1.5-3c1.215-.81 3.75 0 3.75 0M9 11.25V15s2.273-.412 3-1.5c.81-1.215 0-3.75 0-3.75"
    />
  </svg>
);
export default SvgRocket;
