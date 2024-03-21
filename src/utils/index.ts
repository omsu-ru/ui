import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Color, ColorClassNames } from "..";
import { colorValues } from "@/shared/consts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const quantityDeclension = (quantity: number, words: string[]) => {
  const roundedQuantity = Math.floor(quantity); // Round the decimal value to the nearest integer
  return words[
    roundedQuantity % 100 > 4 && roundedQuantity % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][
          roundedQuantity % 10 < 5 ? Math.abs(roundedQuantity) % 10 : 5
        ]
  ];
};

export const getIsBaseColor = (color: Color | string) =>
  colorValues.includes(color as Color);

export const getIsArbitraryColor = (color: Color | string) =>
  color.includes("#") || color.includes("--") || color.includes("rgb");

export function getColorClassNames(
  color: Color | string,
  shade?: number
): ColorClassNames {
  const isBaseColor = getIsBaseColor(color);
  if (
    color === "white" ||
    color === "black" ||
    color === "transparent" ||
    !shade ||
    !isBaseColor
  ) {
    const unshadedColor = !getIsArbitraryColor(color) ? color : `[${color}]`;
    return {
      bgColor: `bg-${unshadedColor}`,
      hoverBgColor: `hover:bg-${unshadedColor}`,
      selectBgColor: `ui-selected:bg-${unshadedColor}`,
      textColor: `text-${unshadedColor}`,
      selectTextColor: `ui-selected:text-${unshadedColor}`,
      hoverTextColor: `hover:text-${unshadedColor}`,
      borderColor: `border-${unshadedColor}`,
      selectBorderColor: `ui-selected:border-${unshadedColor}`,
      hoverBorderColor: `hover:border-${unshadedColor}`,
      ringColor: `ring-${unshadedColor}`,
      strokeColor: `stroke-${unshadedColor}`,
      fillColor: `fill-${unshadedColor}`,
    };
  }
  return {
    bgColor: `bg-${color}-${shade}`,
    selectBgColor: `ui-selected:bg-${color}-${shade}`,
    hoverBgColor: `hover:bg-${color}-${shade}`,
    textColor: `text-${color}-${shade}`,
    selectTextColor: `ui-selected:text-${color}-${shade}`,
    hoverTextColor: `hover:text-${color}-${shade}`,
    borderColor: `border-${color}-${shade}`,
    selectBorderColor: `ui-selected:border-${color}-${shade}`,
    hoverBorderColor: `hover:border-${color}-${shade}`,
    ringColor: `ring-${color}-${shade}`,
    strokeColor: `stroke-${color}-${shade}`,
    fillColor: `fill-${color}-${shade}`,
  };
}

export function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
