import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InfoCard({
  bgColor,
  children,
}: {
  bgColor?: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        "w-full hover:-translate-y-2 hover:shadow-md hover:shadow-primary transition-all duration-500 ",
        bgColor
      )}
    >
      {children}
    </Card>
  );
}
