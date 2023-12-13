import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 15h6.75M12.375 2.625a1.591 1.591 0 1 1 2.25 2.25L5.25 14.25l-3 .75.75-3zM11.25 3.75 13.5 6"
    />
  </svg>
);
export default SvgPencilLine;
