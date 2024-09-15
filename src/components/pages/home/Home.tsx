import BaseContainer from "@/components/global/base-container/BaseContainer";
import AgentGroup from "./home-right-side/AgentGroup";
import AgentInfos from "./home-right-side/AgentInfos";
import HomeTextCard from "./HomeTextCard";
import InfoCards from "./infos-card/InfoCards";
import PhoneIcon from "./PhoneIcon";

const Home = () => {
  return (
    <BaseContainer>
      <div className="flex flex-col md:flex-row gap-2 items-center space-y-10">
        <div className="basis-full sm:basis-3/4 space-y-5">
          <div className="flex gap-1">
            <HomeTextCard text="Exceptional" bgColor="green" />
            <PhoneIcon />
          </div>
          <HomeTextCard text="Customer Support at" bgColor="orange" />
          <HomeTextCard text="Your Fingertips" bgColor="blue" />
        </div>
        <div className="basis-1/4 space-y-5">
          <AgentGroup />
          <AgentInfos />
        </div>
      </div>
      <InfoCards />
      {/* <IntercomContacts /> */}
    </BaseContainer>
  );
};

export default Home;
