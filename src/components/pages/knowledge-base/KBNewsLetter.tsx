import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import React from "react";

const KBNewsLetter = () => {
  return (
    <Card className="text-center max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">
          Stay Ahead of the Shopping Game!
        </CardTitle>
        <CardDescription className="text-base">
          Subscribe and enjoy 40% off your first purchase!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="text-base">
            Be the first to discover exclusive deals, new arrivals, and special
            discounts sent directly to your inbox.
          </p>
        </div>
        <form action="">
          <div className="flex items-center w-full border-2 rounded-lg p-1 px-2">
            <Mail />
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="email"
              required
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
        <div>
          <h1 className="text-base">Only the best offers, no spam.</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default KBNewsLetter;
