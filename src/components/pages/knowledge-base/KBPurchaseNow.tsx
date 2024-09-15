import { Button } from "@/components/ui/button";
import React from "react";

const KBPurchaseNow = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around p-5 gap-5 ">
      <div className="space-y-3 basis-full sm:basis-2/3">
        <h1 className="font-medium ">
          Enjoy Your Website. Filled with the things You Care About
        </h1>
        <p className="text-sm">
          Search for it. We have founded Avenue with a mission of turning
          agricult ural produce into a a predictable and optimized asset .
        </p>
      </div>
      <div>
        <Button>Purchase Now</Button>
      </div>
    </div>
  );
};

export default KBPurchaseNow;
