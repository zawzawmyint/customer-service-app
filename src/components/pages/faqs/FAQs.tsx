import React from "react";
import FAQsHeader from "./FAQsHeader";
import FAQsBody from "./FAQsBody";
import BaseContainer from "@/components/global/base-container/BaseContainer";

const FAQs = () => {
  return (
    <BaseContainer>
      <FAQsHeader />
      <FAQsBody />
    </BaseContainer>
  );
};

export default FAQs;
