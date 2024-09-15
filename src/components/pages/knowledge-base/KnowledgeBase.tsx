import React from "react";
import KBHeader from "./KBHeader";
import BaseContainer from "@/components/global/base-container/BaseContainer";
import KBPurchaseNow from "./KBPurchaseNow";
import KBCards from "./KBCards";
import KBNewsLetter from "./KBNewsLetter";

const aritcals = ["Getting started", "Custom domain", "Billing", "Templates"];

const KnowledgeBase = () => {
  return (
    <div>
      <div className="bg-[url('/images/knowledgebase.png')] bg-cover bg-no-repeat  w-full h-full top-16 sticky left-0 ">
        <div className="backdrop-blur-sm">
          <KBHeader
            title="Knowledge base."
            description=" Do you have any questions?"
            tags={aritcals}
          />
        </div>
      </div>
      <div className="sticky bg-background rounded-t-3xl">
        <BaseContainer>
          <KBPurchaseNow />
          <KBCards />
          <KBNewsLetter />
        </BaseContainer>
      </div>
    </div>
  );
};

export default KnowledgeBase;
