import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TalentProfessionals = () => {
  return (
    <div className="bg-[url('/images/girl.jpg')] bg-cover bg-no-repeat w-full h-60 sm:h-full rounded-md ">
      <CardHeader>
        <CardTitle className="text-5xl">16K</CardTitle>
        <CardDescription className="text-blacks">
          Talented Professionals
        </CardDescription>
      </CardHeader>
    </div>
  );
};

export default TalentProfessionals;
