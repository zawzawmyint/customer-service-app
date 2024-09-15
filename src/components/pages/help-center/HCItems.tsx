import { FastForward, LampDesk, Paperclip } from "lucide-react";
import HCItemCard from "./HCItemCard";
const hcItems = [
  {
    icon: <LampDesk className="w-14 h-14 " />,
    title: "Knowledge Base",
    description: "Comprehensive articles for common questions",
    href: "/knowledge-base",
  },
  {
    icon: <FastForward className="w-14 h-14" />,
    title: "FAQs",
    description: "Quick answers to frequent queries.",
    href: "/faqs",
  },
  {
    icon: <Paperclip className="w-14 h-14" />,
    title: "Documentations",
    description: "Detailed guides for deeper understanding",
    href: "/help-center",
  },
];
const HCItems = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
    <div className="w-full sm:max-w-5xl mx-auto grid-cols-3 overflowy-y-hidden overflow-x-auto flex gap-5 ">
      {hcItems.map((item, index) => (
        <HCItemCard key={item.title + index} hcItem={item} />
      ))}
    </div>
  );
};

export default HCItems;
