import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Guide } from "@/lib/types/definitions";

const HCGuideCard = ({ guide }: { guide: Guide }) => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="border-2 border-secondary-foreground rounded-full p-2">
            {guide.icon}
          </div>

          <Button variant={"link"} className="text-base text-wrap text-start">
            {guide.title}
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default HCGuideCard;
