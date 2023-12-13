import * as React from "react";
import type { SVGProps } from "react";
const SvgProfilesSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    stroke={props.color}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#profiles-settings_svg__a)"
    >
      <path d="M9.278 9.167c-.938-.938-1.59-1.042-2.917-1.042a5 5 0 0 0-5 5M6.361 8.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25M11.08 2.313a3.125 3.125 0 0 1 .282 5.187l.416.417M12.424 13.122c1.036 0 1.875-.793 1.875-1.771 0-.978-.84-1.771-1.875-1.771-1.035 0-1.875.793-1.875 1.77 0 .979.84 1.771 1.875 1.771M14.737 12.177 14.173 12M10.674 10.701l-.562-.177M11.55 13.535l.187-.532M13.112 9.698l.187-.531M13.425 13.535l-.25-.59M11.674 9.757l-.25-.59M10.112 12.295l.624-.236M14.112 10.642l.625-.236" />
    </g>
    <defs>
      <clipPath id="profiles-settings_svg__a">
        <path fill="#fff" d="M.111 0h15v15h-15z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProfilesSettings;
