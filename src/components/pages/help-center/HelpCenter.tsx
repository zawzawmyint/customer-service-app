import BaseContainer from "@/components/global/base-container/BaseContainer";
import KBHeader from "../knowledge-base/KBHeader";
import HCItems from "./HCItems";
import HCGuides from "./HCGuides";
import KBNewsLetter from "../knowledge-base/KBNewsLetter";
import HCContact from "./HCContact";
const tags = ["Getting started", "Custom domain", "Billing", "Templates"];

const HelpCenter = () => {
  return (
    <div className="mb-14">
      <div className="bg-[url('/images/help-center.jpg')] bg-cover bg-no-repeat  w-full h-full top-0 sticky left-0 ">
        <div className="backdrop-blur-sm">
          <KBHeader
            tags={tags}
            title="Hello, what can we help you find?"
            description="We are here for you. Find out more about our documentation "
            hp
          />
        </div>
      </div>
      <div className="sticky bg-background rounded-t-xl space-y-10">
        <BaseContainer>
          <HCItems />
          <HCGuides />
        </BaseContainer>
        <HCContact />
        <KBNewsLetter />
      </div>
    </div>
  );
};

export default HelpCenter;
