import React from "react";
import { AgentAvatar } from "./AgentAvatar";

const AgentGroup = () => {
  return (
    <div className="space-y-5">
      <div className="flex jusitfy-center space-x-3">
        <h1 className="text-5xl font-bold">24/7</h1>
        <div className="flex items-center">
          <AgentAvatar />
          <AgentAvatar />
          <AgentAvatar />
        </div>
      </div>
      <div>
        <p className="text-ellipsis text-pretty">
          With our expertise and commitment to excellent, we strive to deliver
          expectional that excees your expectations.🤌
        </p>
      </div>
    </div>
  );
};

export default AgentGroup;
