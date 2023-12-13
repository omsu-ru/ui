import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
