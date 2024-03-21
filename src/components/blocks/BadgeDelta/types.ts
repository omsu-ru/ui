const deltaTypeValues = [
  "increase",
  "moderateIncrease",
  "decrease",
  "moderateDecrease",
  "unchanged",
] as const;

export type DeltaType = (typeof deltaTypeValues)[number];
