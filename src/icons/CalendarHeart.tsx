import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.75 7.5v-3a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5V15c0 .825.675 1.5 1.5 1.5H9M12 1.5v3M6 1.5v3M2.25 7.5h13.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.968 11.025a1.822 1.822 0 0 0-1.988-.39c-.225.09-.428.225-.6.398l-.255.255-.262-.255a1.822 1.822 0 0 0-2.58 0c-.713.705-.75 1.897.15 2.805l2.692 2.662 2.7-2.662c.9-.908.855-2.1.143-2.805z"
    />
  </svg>
);
export default SvgCalendarHeart;
