import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="font-bold text-primary text-base sm:text-lg font-mono">
        HelpCus
      </h1>
    </Link>
  );
};

export default Logo;
