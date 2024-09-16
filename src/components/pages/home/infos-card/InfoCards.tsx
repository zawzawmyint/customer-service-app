import React from "react";
import { InfoCard } from "./InfoCard";
import HappyUserCard from "./HappyUserCard";
import TalentProfessionals from "./TalentProfessionals";
import WorkProcessCard from "./WorkProcessCard";
import Motion from "@/components/framer-motion/Motion";

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
      <Motion>
        <InfoCard bgColor="bg-gradient-to-r from-green-300">
          <HappyUserCard />
        </InfoCard>
      </Motion>
      <InfoCard>
        <TalentProfessionals />
      </InfoCard>
      <InfoCard bgColor="bg-gradient-to-r from-blue-200">
        <WorkProcessCard />
      </InfoCard>
    </div>
  );
};

export default InfoCards;
