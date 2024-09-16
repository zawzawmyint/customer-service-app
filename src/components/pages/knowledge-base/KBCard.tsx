import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KnowledgeBase } from "@/lib/types/definitions";
import Link from "next/link";

const KBCard = ({ kb }: { kb: KnowledgeBase }) => {
  return (
    <Card className="grid place-items-center">
      <CardHeader className="grid place-items-center">
        <CardDescription className="text-primary">{kb.icon}</CardDescription>
        <CardTitle className="">{kb.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-pretty">{kb.description}</p>
      </CardContent>
      <CardFooter>
        <Link href={"knowledge-base"}>
          <Button variant={"link"}>Read more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default KBCard;
