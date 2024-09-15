import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InfoCardTitle from "./InfoCardTitle";

const HappyUserCard = () => {
  return (
    <>
      <CardHeader>
        <InfoCardTitle text="Happy Customer" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <CardTitle className="text-5xl">245K</CardTitle>
          <CardDescription>
            Unlock the power of seamless collaboration with our platform.
            Thousands of professionals trust us to manage their workflows, boost
            productivity, and achieve their goals. Experience intuitive
            features, unparalleled support, and a user-friendly interface
            designed to make your life easier.
          </CardDescription>
        </div>
      </CardContent>
    </>
  );
};

export default HappyUserCard;
