'use client'
import { useState, useEffect } from "react";

type QuantityDeclensionHook = (
  quantity: number,
  words: string[] | string
) => string;

export const useQuantityDeclension: QuantityDeclensionHook = (
  quantity,
  words
) => {
  const [roundedQuantity, setRoundedQuantity] = useState<number>(
    Math.floor(quantity)
  );
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    setRoundedQuantity(Math.floor(quantity));
    setResult(
      words[
        roundedQuantity % 100 > 4 && roundedQuantity % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][
              roundedQuantity % 10 < 5 ? Math.abs(roundedQuantity) % 10 : 5
            ]
      ]
    );
  }, [quantity, words]);

  return result;
};
