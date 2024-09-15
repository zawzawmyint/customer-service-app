import { cn } from "@/lib/utils";
import { Play, Star, StarIcon } from "lucide-react";
import React from "react";

const infos = [
  {
    icon: <Star size={20} color="white" />,
    title: "4.5(240+)",
    desc: "Reviews on trustpilot",
  },
  {
    icon: <Play size={20} color="white" />,
    title: "Watch our",
    desc: "show reel",
  },
];

const AgentInfos = () => {
  return (
    <div className="space-y-5">
      {infos.map((info) => (
        <AgentInfoItem
          key={info.title}
          icon={info.icon}
          title={info.title}
          desc={info.desc}
        />
      ))}
    </div>
  );
};

export default AgentInfos;

type AgentInfoItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};
const AgentInfoItem = ({ icon, title, desc }: AgentInfoItemProps) => {
  return (
    <div className="inline-block">
      <div className="flex space-x-2 border-2 rounded-full p-2 pr-5">
        <div
          className={cn(
            "rounded-full  w-12 h-12 flex items-center bg-green-500 justify-center",
            {
              "bg-gray-400 ": desc.includes("show"),
            }
          )}
        >
          {icon}
        </div>
        <div className="">
          <h1 className="font-bold">{title}</h1>
          <p className="">{desc}</p>
        </div>
      </div>
    </div>
  );
};
