import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { FAQ } from "@/lib/types/definitions";

export function FAQsBodyItems({ faqs }: { faqs: FAQ[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-5 max-w-3xl mx-auto backdrop-blur-lg bg-opacity-15"
    >
      {faqs.map((item, index) => (
        <Card className="p-2 px-3 " key={item.question}>
          <AccordionItem
            value={"item" + index}
            className="border-0 transition-all duration-500  "
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Card>
      ))}
    </Accordion>
  );
}
