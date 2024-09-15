import { cn } from "@/lib/utils";
import React from "react";
type HomeTextCardProps = {
  text: string;
  bgColor: string;
};
const HomeTextCard = ({ text, bgColor }: HomeTextCardProps) => {
  return (
    <div
      className={cn("rounded-lg p-2 pb-5 inline-block ", {
        "bg-gradient-to-r from-green-300": bgColor == "green",
        "bg-gradient-to-r from-orange-300": bgColor == "orange",
        "bg-gradient-to-r from-blue-300": bgColor == "blue",
      })}
    >
      <h1 className="font-semibold text-3xl sm:text-7xl  ">{text}</h1>
    </div>
  );
};

export default HomeTextCard;
