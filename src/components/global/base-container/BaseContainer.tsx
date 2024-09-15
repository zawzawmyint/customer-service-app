import React from "react";

const BaseContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-7xl mx-auto p-3 space-y-16 py-10 mb-5">
      {children}
    </main>
  );
};

export default BaseContainer;
