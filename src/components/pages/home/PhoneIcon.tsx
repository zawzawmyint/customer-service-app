"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { HelpingHandIcon } from "lucide-react";

const PhoneIcon = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="bg-blue-200 p-5 w-fit rounded-full">
      <HelpingHandIcon color="black" size={isDesktop ? "60px" : "35px"} />
    </div>
  );
};

export default PhoneIcon;
