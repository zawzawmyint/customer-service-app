import React from "react";
import { InfoCard } from "./InfoCard";
import HappyUserCard from "./HappyUserCard";
import TalentProfessionals from "./TalentProfessionals";
import WorkProcessCard from "./WorkProcessCard";

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
      <InfoCard bgColor="bg-gradient-to-r from-green-300">
        <HappyUserCard />
      </InfoCard>
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
