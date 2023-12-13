import * as React from "react";
import type { SVGProps } from "react";
const SvgLogOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 18"
    stroke={props.color}
    {...props}
  >
    <path
      stroke="#F75F5F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.2 15.75H4.023c-.421 0-.825-.158-1.123-.44a1.46 1.46 0 0 1-.465-1.06V3.75c0-.398.167-.78.465-1.06.298-.282.702-.44 1.123-.44H7.2M12.759 12.75 16.729 9l-3.97-3.75M16.73 9H7.2"
    />
  </svg>
);
export default SvgLogOut;
