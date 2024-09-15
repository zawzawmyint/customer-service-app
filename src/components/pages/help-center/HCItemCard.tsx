import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCenterItem } from "@/lib/types/definitions";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HCItemCard = ({ hcItem }: { hcItem: HelpCenterItem }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex gap-4">
          {hcItem.icon}
          <div className="space-y-3">
            <CardTitle className="text-lg bg-gradient-to-r from-blue-500 to-green-700 bg-clip-text text-transparent tracking-wider ">
              {hcItem.title}
            </CardTitle>
            <CardDescription>{hcItem.description}</CardDescription>
            <Link href={hcItem.href}>
              <Button variant={"link"}>
                Learn More <ArrowRight className="w-4 h-3 mx-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default HCItemCard;
