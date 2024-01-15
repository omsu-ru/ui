import React from "react";
import { cn } from "@/utils";

interface NoDataProps {
  noDataText?: string;
}
const NoData = ({ noDataText = "No data" }: NoDataProps) => {
  return (
    <div
      className={cn(
        // common
        "w-full h-full border border-dashed rounded-sm items-center flex justify-center",
        // light
        "border-border",
        // dark
        ""
      )}
    >
      <p>{noDataText}</p>
    </div>
  );
};

export default NoData;
