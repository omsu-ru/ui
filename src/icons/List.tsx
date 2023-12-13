import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4.5h9.75M6 9h9.75M6 13.5h9.75M2.25 4.5h.009M2.25 9h.009M2.25 13.5h.009"
    />
  </svg>
);
export default SvgList;
