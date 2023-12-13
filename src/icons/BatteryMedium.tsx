import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5.25H3a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5M16.5 8.25v1.5M4.5 8.25v1.5M7.5 8.25v1.5"
    />
  </svg>
);
export default SvgBatteryMedium;
