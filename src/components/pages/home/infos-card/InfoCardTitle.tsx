import { CardTitle } from "@/components/ui/card";
import { CircleArrowOutUpRight } from "lucide-react";

const InfoCardTitle = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <CardTitle className="text-lg">{text}</CardTitle>
      <div className="bg-black text-white rounded-full p-1">
        <CircleArrowOutUpRight />
      </div>
    </div>
  );
};

export default InfoCardTitle;
