import React from "react";
import FAQsHeader from "./FAQsHeader";
import FAQsBody from "./FAQsBody";
import BaseContainer from "@/components/global/base-container/BaseContainer";
import Motion from "@/components/framer-motion/Motion";

const FAQs = () => {
  return (
    <BaseContainer>
      <FAQsHeader />

      <FAQsBody />
    </BaseContainer>
  );
};

export default FAQs;
